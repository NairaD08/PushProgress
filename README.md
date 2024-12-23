# PushProgress

## Description

PushProgress is a user-friendly application designed to help individuals log their exercises, track their progress, and achieve their fitness goals. Whether you're a beginner or an experienced athlete, this app provides the tools you need to stay motivated and organized on your fitness journey.



## User Story

As a fitness enthusiast, I want to set specific fitness goals and have a platform to log my workouts so that I can monitor my progress and stay accountable to my fitness journey.

## Acceptance Criteria

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes public features
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I click on the nav links
THEN I am redirected to the correct page and see the public or private features based on my login status
WHEN I am logged in and click on the Progress tab
THEN I am presented with my progress history as retrieved from the database
WHEN I click on the logout option in the navigation
THEN I am signed out of the site

## Features



- **Exercise Logging**: Easily log various types of exercises, including cardio, strength training, and flexibility workouts. Users can log individual exercises, including details such as duration, reps, and weights used.
- **Progress Tracking**: Monitor your fitness progress over time. The app allows users to track metrics such as weight, body fat percentage, and muscle mass, providing visual representations of their journey.
- **Goal Setting**: Set personalized fitness goals, whether it's weight loss, muscle gain, or improving endurance. The app helps users stay accountable and motivated by tracking their progress toward these goals.
- **User-Friendly Interface**: The app features an intuitive design that makes it easy to navigate and log workouts and meals quickly.
- **User Authentication**: Secure user accounts to ensure that workout data is private and only accessible by the user.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- Internet connection (for accessing online features)

### Usage

1. **Create an Account**: Users can create an account to save their data and access it from any device.
2. **Log Exercises**: Navigate to the "Workout Tracker" section to log your workouts.
3. **Track Progress**: Use the "Progress Tracker" to input and monitor your fitness metrics.

You can login using a premade account: (username: test  password:Hi12345!)

## Technologies Used

- **HTML**: For the structure of the web application.
- **CSS**: For styling and layout.
- **JavaScript**: For interactivity and dynamic content.
- **Node.js**: Serves as the runtime environment, allowing to run JavaScript on the server.
- **Express.js**: Acts as the framework that simplifies the creation of web servers and APIs, handling routing and middleware.
- **Handlebars**: To render dynamic HTML pages based on data fetched from the server, allowing for a more interactive user experience.
- **PostgreSQL**: Serves as the database where all application data is stored, enabling data persistence and complex querying capabilities.

## Acknowledgments

- Inspired by the need for a comprehensive fitness tracking solution.
- Thanks to the open-source community for their invaluable resources and support.
- Thanks to John Young and Zac Warner at edX/UC Berkeley Full-Stack Bootcamp for instruction and guidance.
- This project is inspired by Bootcamp Mini-Project #14 which uses Sequelize and Handlebars in the MVC model.
- OpenAI was a source of inspiration when we hit dead-ends.
- Jass.CSS is a product of Normalize (github.com/necolas/normalize.css).



## Planned updates coming soon:

- **Social Connectivity**: Users can upload pictures and share profile with other users, and follow other users.
- **Create Workout Routines**: Users can design and save customized workout routines tailored to their fitness levels and goals.
- **Import Data from Other Apps**: Users can import data from other fitness apps.

- **Goal Setting**: Set personalized fitness goals, whether it's weight loss, muscle gain, or improving endurance. The app helps users stay accountable and motivated by tracking their progress toward these goals.
- **More Feachers**: Users can track metrics such as weight, body fat percentage, and muscle mass, providing visual representations of their journey.


## Installation

To get started with the Fitness Goals and Workout Logger, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/nairaD08/PushProgress.git
   Navigate to the project directory:
   cd PushProgress
   Install the dependencies:
   npm install
   Start the server:
   npm start
   Usage
   Create an account or log in to your existing account.
   Log your workouts in the "Log Exercise" section.
   View your progress in the "Progress Tracker" section, where you can see visual representations of your data.
   ```
