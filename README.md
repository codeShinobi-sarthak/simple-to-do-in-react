# Simple React To-Do App

This is a simple To-Do application built with **React**. Users can add tasks to the list, and once the task is completed, it can be deleted by clicking on the task itself.

## Features

- **Add To-Do:** Users can input tasks and add them to the list by clicking the "Add" button.
- **Delete To-Do:** To remove a task, users can click on the task in the list, and it will be deleted.
- **Real-Time Update:** The app updates the list dynamically when adding or deleting tasks.

## Live Demo

Check out the live version of the To-Do app: [Live Demo](https://codeshinobi-sarthak.github.io/simple-to-do-react/)

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/codeShinobi-sarthak/simple-to-do-react.git
    cd simple-to-do-react
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```
   The app will be available on `http://localhost:3000`.

4. **Add a To-Do**:
    - Enter the task name in the input field.
    - Click the **Add** button to add the task to the list.

5. **Delete a To-Do**:
    - Click on the task you want to remove, and it will be deleted from the list.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: Main logic for handling actions (adding and deleting tasks).
- **HTML5**: Structuring the content of the app.
- **CSS3**: Styling the application to make it look clean and simple.
- **GitHub Pages**: Hosting the live demo of the app.

## Project Structure

```plaintext
simple-to-do-react/
│
├── src/                  # Source files
│   ├── components/       # Reusable components
│   ├── main.jsx            # Main App component
│   └── style.css          # styles
├── index.html            # React DOM entry point
├── package-lock.json
├── package.json          # NPM dependencies and scripts
├── README.md             # Project documentation
├── vite.config.js        # vite config file
└── .gitignore            # Files to ignore in the repository
