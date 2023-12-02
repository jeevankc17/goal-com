

# Goal.com Live Scores Project

Welcome to the Goal.com Live Scores project! This project allows you to display live scores and details of football matches. It consists of a Node.js backend for handling live scores data, a React.js frontend for the user interface, and a Laravel backend for connecting to the MySQL database. The project is designed to be run on the XAMPP server.

## Prerequisites

Before you begin, make sure you have the following software installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Composer](https://getcomposer.org/)
- [XAMPP](https://www.apachefriends.org/index.html)

# Clone and Setup

## Clone the repository:

```bash
git clone https://github.com/your-username/goal-com-live-scores.git
```


# Install required packages and start the server:



## Backend Setup

### Node.js Backend

Install required packages and start the server:

```bash
cd goal-com/backend-goal-com
npm install
npm start

```

The Node.js backend server should now be running on http://localhost:3001.


### Laravel Backend

Install Laravel packages, configure the database, run migrations, and start the server:

```bash
cd goal-com/server-goal-com
composer install
cp .env.example .env
# Update .env with your MySQL credentials
php artisan migrate
php artisan serve
```

The Laravel backend server should now be running on http://localhost:8000.



## Frontend Setup

### React.js Frontend

Install React.js packages and start the development server:

```bash
cd goal-com-live-scores/frontend-goal-com
npm install
npm start
```

The React.js frontend development server should now be running on http://localhost:3000.


# Access the Application
1. Open your web browser and go to http://localhost:3000 to access the Goal.com Live Scores application.
2. Start the xampp server running mysql and apache module with action command.
3. To see the json response of nodejs backend go to http://localhost:3001/api/{specific-routes}
   - http://localhost:3001/api/live-scores
4. To see the json response of php backend go to  http://127.0.0.1:8000/api/{specific-routes}
   - for eg http://127.0.0.1:8000/api/users


That's it! You have successfully set up the Goal.com Live Scores project on your local machine. Feel free to explore the live scores and details of football matches. If you encounter any issues, please refer to the documentation for each component (Node.js, Laravel, React.js) or feel free to reach out for assistance.