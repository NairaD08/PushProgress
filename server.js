const express = require("express");
// Connection Pool FAQ: https://node-postgres.com/features/pooling
const { Pool } = require("pg");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connects to database
const pool = new Pool(
  {
    // TODO: create dotenv
    user: "postgres",
    password: "Jaws2",
    host: "localhost",
    database: "progress_db",
  },
  console.log(`Connected to the progress_db database.`)
);

pool.connect();

// Log a workout
app.post("/api/new-workout", ({ body }, res) => {
  const sql = `INSERT INTO progress (workout_id)
    VALUES ($1)`;
  const params = [body.workout_id];

  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

// Review all workouts
app.get("/api/workouts", (req, res) => {
  // TODO: ensure the logic is correct here
  //   const sql = `SELECT workout_id, activity_type AS activity FROM workouts`;

  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Delete a workout
app.delete("/api/workout/:workout_id", (req, res) => {
  const sql = `DELETE FROM progress WHERE workout_id = $1`;
  const params = [req.params.id];

  pool.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: err.message });
    } else if (!result.rowCount) {
      res.json({
        message: "Workout not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.rowCount,
        id: req.params.id,
      });
    }
  });
});

// Read list of all workouts and associated activity type using LEFT JOIN
app.get("/api/activity-type", (req, res) => {
  const sql = `SELECT workouts.activity_type AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
  pool.query(sql, (err, { rows }) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// BONUS: Update review
app.put("/api/review/:id", (req, res) => {
  const sql = `UPDATE reviews SET review = $1 WHERE id = $2`;
  const params = [req.body.review, req.params.id];

  pool.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.rowCount) {
      res.json({
        message: "Workout not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.rowCount,
      });
    }
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
