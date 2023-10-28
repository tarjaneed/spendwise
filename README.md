# Spendwise - An Expense Tracker Native App

Spendwise is an intuitive and user-friendly Expense Tracker app designed to help you keep track of your expenses. Whether you want to monitor your daily spending, budget for upcoming expenses, or simply gain insight into your financial habits, Spendwise has you covered. With its versatile design, you can easily input and categorize your expenses, create new spending categories on the fly, and visualize your expenses through an interactive pie chart.

## Requirements

To get started with Spendwise, make sure you have the following dependencies installed:

- [expo-cli](https://docs.expo.dev/workflow/expo-cli/): 6.3.10
- [Node.js](https://nodejs.org/): 18.18.2

## Configuring Firebase

To use Firebase with Spendwise, you need to configure Firebase with your own API keys. Update the `firebaseConfig` object in your code with your Firebase project's configuration:

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

Replace `"YOUR_API_KEY"`, `"YOUR_AUTH_DOMAIN"`, `"YOUR_PROJECT_ID"`, `"YOUR_STORAGE_BUCKET"`, `"YOUR_MESSAGING_SENDER_ID"`, `"YOUR_APP_ID"`, and `"YOUR_MEASUREMENT_ID"` with your Firebase project's actual configuration values.

## Getting Started

Follow these steps to set up and run Spendwise on your local machine:

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

- **Expense Input**: Easily input your expenses, specifying the amount, description, and category.
- **Category Management**: Create new expense categories if they do not exist, allowing you to organize your spending efficiently.
- **Expense Breakdown**: Gain insights into your spending habits with an expense breakdown by category.
- **Interactive Pie Chart**: Visualize your expenses through an interactive pie chart, making it easy to identify where you are spending the most.
- **Authentication Flow using Context**: Implement a secure and seamless user authentication flow in your app with the help of context, ensuring that user data and interactions are protected.

## Support

If you encounter any issues or have questions, please don't hesitate to [create an issue](https://github.com/your-username/spendwise/issues). We're here to help!

Happy budgeting with Spendwise! 📊💰
