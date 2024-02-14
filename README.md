# SyncHub📍

Official GitHub repo for SyncHub project by amuchina

## Welcome to Synchub!

SyncHub is a web platform designed to resemble a forum, where users can seamlessly create accounts, log in, modify their profile settings, and engage with an interesting and user-friendly graphical interface. Users can upload threads (which represent posts) where they have the flexibility to add categories and tags, facilitating discussions with other users.

### Key Features:
- User account creation and authentication system.
- Profile settings customization.
- Thread creation with category and tag options.
- Engaging discussion interface.
- Possibility of creating "Hubs" (groups) for discussing various topic-based arguments

### Project Status:
SyncHub is currently under development, with ongoing efforts to enhance its features and user experience. Hence, consider that most features are not implemented yet and will take time to be published.

Stay tuned for more updates and improvements as we continue to refine SyncHub for an even better experience!

## Project Setup Guide

Do these steps in order to run the project locally for development or demo:

### Requirements
- PHP 8.3
- Composer
- npm (Node.js)
- MySQL

### Steps to Run the Project

1. Clone this repository to your local machine.
2. Navigate to the cloned directory in your terminal.
3. Run the following commands:
   - `npm install`
   - `composer install`
4. Rename the `.env.example` file to `.env`
5. Generate an application key by running:
   `php artisan key:generate`
6. Migrate the database using:
   `php artisan migrate`
7. Seed the database (if applicable) with:
   `php artisan db:seed`
8. Compile assets and run Vite with:
   `npm run dev`
9. Open another terminal in the same directory and start the Laravel development server with:
   `php artisan serve`
10. Ensure your MySQL server is running.

Now, your Laravel project should be up and running smoothly. Enjoy coding!

## Contribute

We're excited to have new contributors who want to improve and enhance this project. If you're interested in contributing, follow the steps below.
We're open to all forms of contribution: reporting bugs, proposing new features, fixing documentation or code, and more. Feel free to get involved!

### Steps to Contribute

1. **Fork the Repository:**
    - Click the "Fork" button at the top right of this page to create your own copy of the repository.

2. **Clone the Repository:**
    - Clone your fork to your local machine using the command:
      ```bash
      git clone https://github.com/amuchina/SyncHub.git
      ```

3. **Create a Branch:**
    - Create a new branch for your work:
      ```bash
      git checkout -b feature/new-feature
      ```

4. **Make Changes:**
    - Make your changes or add new features to the code. Be sure to test them and follow the project's guidelines.

5. **Commit and Push:**
    - Commit your changes and push your branch to your fork:
      ```bash
      git commit -m "Description of your changes"
      git push origin your-branch-name
      ```

6. **Open a Pull Request:**
    - Go back to the repository page on GitHub and open a Pull Request from your branch to the project's main branch.

7. **Discussion and Review:**
    - Participate in the discussion on your Pull Request. Additional changes or revisions may be requested.

8. **Pull Request Acceptance:**
    - Once your Pull Request has been reviewed and approved, it will be accepted and merged into the main project branch.


## Issues and Suggestions

If you encounter issues or have suggestions to improve the project, open an issue on GitHub. We welcome feedback and aim to make this project the best it can be.

## Contact

For further questions or information, reach out to me at giovannidesio9@gmail.com.

Thank you for contributing to SyncHub!
