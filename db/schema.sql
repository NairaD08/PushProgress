-- Drops the sample_db if it exists currently --
DROP DATABASE IF EXISTS progress_db;
-- Creates the sample_db database --
CREATE DATABASE progress_db;

\c progress_db;

-- CREATE TABLE progress (
--   workout_id INTEGER NOT NULL,
-- --   workout_id SERIAL PRIMARY KEY,
--   activity_type TEXT NOT NULL,
--   time DEFAULT NULL,
--   distance DEFAULT NULL,
--   weight DEFAULT NULL,
--   reps DEFAULT NULL,
--   date_logged TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
-- );

-- -- Transaction block--------------------------------------------------
-- DO $$
--     BEGIN
--         -- Begin transaction
--     INSERT INTO progress (activity_type, time, distance, weight, reps)
--     VALUES
--         ('bike', 113:43, 26mi, [], []),
--     -- If the code reaches here, it means no exceptions were raised.
--     -- Thus, it will commit automatically at the end of the block.
--     RAISE NOTICE 'Workout Logged.';

--     EXCEPTION
--     WHEN OTHERS THEN
--         RAISE NOTICE 'An error occurred: %', SQLERRM; -- Log the error
--         ROLLBACK; -- Explicitly roll back changes in case of error  
-- END $$;
-- -- transaction block ends here----------------------------------------