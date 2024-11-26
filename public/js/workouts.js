document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch workouts of the logged-in user
    const fetchWorkouts = () => {
      fetch('/api/workouts', {
        method: 'GET',
        credentials: 'include', // Ensure session cookie is included
      })
        .then((response) => {
          if (!response.ok) {
            // If response status is not OK, handle it here
            throw new Error('Unauthorized or No workouts found');
          }
          return response.json(); // Parse the JSON response
        })
        .then((data) => {
          // Handle the fetched workout data
          console.log(data); // You can display this data in your page
          if (data.length === 0) {
            alert('No workouts found for your user.');
          } else {
            displayWorkouts(data); // Call a function to display the data
          }
        })
        .catch((error) => {
          console.error('Error fetching workouts:', error);
          alert('Failed to fetch workouts. Please log in again or try later.');
        });
    };
  
    // Function to display workouts on the page
    const displayWorkouts = (workouts) => {
      const workoutList = document.getElementById('workout-list');
      workoutList.innerHTML = ''; // Clear any existing content
      workouts.forEach((workout) => {
        const workoutItem = document.createElement('li');
        workoutItem.textContent = `${workout.exercises_type} - ${workout.duration} minutes`;
        workoutList.appendChild(workoutItem);
      });
    };
  
    // Call the function to fetch workouts when the page is ready
    fetchWorkouts();
  });