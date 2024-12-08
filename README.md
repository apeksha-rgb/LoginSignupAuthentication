# LoginSignup Component with Firebase Authentication 

This  repository  containes a React project  where I have created a reusable  `LoginSignup` component. Initiallu, the component provide basic functionality  for user login  and signup. Later, Firebase Authentication  was added  to provide secure login  and Registration  features.

## Features

- **Login and Signup Forms** : A single component to handle both login and signup forms.
- **Firbase Authentication**: Integrated Firebase Authentication for handling user authentication securely.
- **Responsive UI**: The component is designed  to be responsive and  user-friendly.
- **Vite**: Used for fast development  and  production  builds with  optimized performance.

## Technolgies  Used

- **React** :  A Javascript library for building user interfaces.
- **Firebase**: Firebase Authentication  to manage user authentication.
- **Vite**: A build tool for fast and optimized React development.

- **CSS**: For styling the components and making them responsive.

## Getting Started 

### Prerequisites
Before you begin, ensure you have the following installed: 

- **Node.js** (LTS version)
- **npm** (comes with Node.js)

### Installation 

1- Clone the repo to your local machine:

```bash
    git clone https://github.com/apeksha-rgb/LoginSignupAuthentication.git

    cd repo-name


```
2- Install the dependencies:

```bash
    npm install

```
3- Setup Firebase:

- Go to Firebase Console, create a project, and enable  Firebase Authentication.
- Obtain your firbase configuration  object and  add it to your project.

4- Add your firebase config in you firbaseConfig.js

5- Set up you .env file with firebase crendentials

6- Start the Development  server: 

```bash
npm run dev
```

#### How It Works

- The LoginSignup component contains both a login and signup form that toggles between them based on the user's action.
-On form submission, the component validates the input and interacts with Firebase Authentication to create a new user or log in an existing user.

#### Firebase Authentication Setup

- **Sign Up a User**: When a new user submits their details (email and password), the firebase.auth().createUserWithEmailAndPassword method is used to create a new account.

- **Log In an Existing User**: For existing users, the firebase.auth().signInWithEmailAndPassword method is used for logging in.

- **Sign Out**: Users can log out using the firebase.auth().signOut method.

##### Contributing

Feel free to fork this repository and submit pull requests for improvements, bug fixes, or additional features. If you encounter any issues or have suggestions, please open an issue in the repository.