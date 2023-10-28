# Spendwise - An Intuitive Expense Tracker Native App

Welcome to Spendwise, an intuitive and user-friendly Expense Tracker app designed to help you gain control of your finances. Whether you want to keep track of your daily spending, budget for upcoming expenses, or simply gain insights into your financial habits, Spendwise has you covered. This README will guide you through setting up and using Spendwise to manage your expenses effectively.

## Prerequisites

Before you get started with Spendwise, make sure you have the following dependencies installed on your system:

### 1. Expo CLI

Expo CLI is a critical tool for developing and running React Native applications. If you don't already have it, you can install it with the following steps:

- First, ensure you have Node.js installed. If you don't have it, follow the next step.
  
  **Node.js**: Download and install Node.js, which includes npm (Node Package Manager). You can download it from the official website: [Node.js](https://nodejs.org/). Make sure you have at least Node.js version 14 or higher.

- Once Node.js is installed, open your terminal or command prompt and run the following command to install Expo CLI:

  ```bash
  npm install -g expo-cli
  ```

### 2. Node.js

Node.js is a JavaScript runtime that is required for running the Expo CLI and the project itself. Make sure you have Node.js installed with at least version 14 or higher. If you don't have Node.js installed, you can download it from the official website: [Node.js](https://nodejs.org/).

## Configuring Firebase

To use Firebase with Spendwise, you need to configure it with your own API keys. Follow these steps to set up Firebase:

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).

2. Once your project is created, obtain the configuration values required for Spendwise. These include the `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`, and `measurementId`.

3. Update the `firebaseConfig` object in your code with your Firebase project's configuration. Open the file `config.js` in your project and replace the placeholder values with your Firebase project's actual configuration.

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

## Getting Started

Now, let's get Spendwise up and running on your local machine. Follow these steps:

1. **Clone the Repository**: Start by cloning the Spendwise repository to your local system.

   ```bash
   git clone https://github.com/tarjaneed/spendwise.git
   ```

2. **Navigate to the Project Directory**: Change your working directory to the Spendwise project folder.

   ```bash
   cd spendwise
   ```

3. **Install Dependencies**: Use npm to install the required project dependencies.

   ```bash
   npm install
   ```

4. **Configure React Native Reanimated**: To enable React Native Reanimated for your project, follow these steps:

   - Open your project's `babel.config.js` file.
   - Add `'react-native-reanimated/plugin'` to the `plugins` array in your `babel.config.js`. Your `babel.config.js` should look like this:

     ```javascript
     module.exports = {
       presets: ['module:metro-react-native-babel-preset'],
       plugins: ['react-native-reanimated/plugin'],
     };
     ```

     This step is required to set up React Native Reanimated for animations and gestures in your application.

5. **Run the App**: After installing the dependencies and configuring React Native Reanimated, you can start the app using the Expo CLI.

   ```bash
   expo start
   ```

    OR

   ```bash
   npm start
   ```

6. **View the App**: After running the app, you will see a QR code and a list of options to run the app. To test Spendwise on your mobile device, follow these steps:

   - Install the [Expo Go](https://expo.dev/client) app on your mobile device.
   - Open Expo Go and tap on the "Scan QR Code" option.
   - Use your mobile device's camera to scan the QR code displayed in the terminal.

This will load Spendwise on your phone, allowing you to interact with the app on your mobile device.

## Features

Spendwise offers a range of features to help you manage your expenses effectively:

- **Expense Input**: Easily input your expenses, specifying the amount, description, and category.
- **Category Management**: Create new expense categories on the fly, allowing you to organize your spending efficiently.
- **Expense Breakdown**: Gain insights into your spending habits with an expense breakdown by category.
- **Interactive Pie Chart**: Visualize your expenses through an interactive pie chart, making it easy to identify where you are spending the most.
- **Authentication Flow using Context**: Implement a secure and seamless user authentication flow in your app with the help of context, ensuring that user data and interactions are protected.

## Support

If you encounter any issues or have questions, please don't hesitate to [create an issue](https://github.com/your-username/spendwise/issues). We're here to help!

Happy budgeting with Spendwise! 📊💰
