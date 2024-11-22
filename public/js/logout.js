document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
  
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async () => {
        try {
          // Send a POST request to logout
          const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          });
  
          // Check for the 204 No Content response before attempting to parse JSON
          if (response.ok) {
            // After logout, redirect to homepage
            if (response.status === 204) {
              window.location.href = '/';
            } else {
              const data = await response.json();
              console.log('Logged out:', data);
            }
          } else {
            console.error('Logout failed.');
          }
        } catch (error) {
          console.error('Error logging out:', error);
        }
      });
    }
  });
  