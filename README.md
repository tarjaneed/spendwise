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

Certainly, let me provide a simplified guide on creating a general component, a styles file, importing the styles, and using them in JSX. You can then adapt this process for your specific component.

**Creating a General Component:**

1. Create a new JavaScript file for your component, for example, `MyComponent.js`.

   ```bash
   touch MyComponent.js
   ```

2. Define your component within `MyComponent.js`. For example:

```javascript
import React from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  return (
    <View>
      <Text>This is my custom component.</Text>
    </View>
  );
};

export default MyComponent;
```

**Creating a Styles File:**

1. Create a new JavaScript file for your styles, for example, `MyComponentStyles.js`.

   ```bash
   touch MyComponentStyles.js
   ```

2. Open `MyComponentStyles.js` and define your component styles using the `StyleSheet` module:

```javascript
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
```

**Using the Component and Styles in a JSX File (e.g., `App.js`):**

1. Import the `MyComponent` and its styles at the top of your JSX file (e.g., `App.js`):

```javascript
import MyComponent from './MyComponent';
import { styles } from './MyComponentStyles';
```

2. Use the `MyComponent` within your JSX content, and apply the styles as needed:

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './MyComponentStyles';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App</Text>
      <MyComponent />
    </View>
  );
};

export default App;
```

In this simplified example, `MyComponent` is created and styled separately in its own files. Then, it is imported and used within the `App.js` file, applying the defined styles to the component.

You can follow a similar approach for creating components, styles, and using them in your app.

**Creating Firebase Collection**

To store expense data, Spendwise uses Firebase Firestore, a NoSQL cloud database. Follow these steps to create a Firebase collection for your expenses:

1. **Go to Firebase Console**: Open the [Firebase Console](https://console.firebase.google.com/) in your web browser.

2. **Select Your Project**: If you haven't created a project for Spendwise yet, create one. Otherwise, select your existing Spendwise project.

3. **Go to Firestore Database**: In the Firebase Console, navigate to the "Firestore Database" section.

4. **Create a Collection**: Click on the "Start collection" button to create a new collection. 

5. **Set Collection ID**: Enter a name for your collection, for example, "expenses," in the "Collection ID" field.

6. **Set Document ID**: You can either allow Firestore to auto-generate a document ID or specify your own. Each document in the "expenses" collection will represent a single expense entry.

7. **Add Fields**: For each expense entry, you may want to include fields such as `amount`, `category`, `description`, `date`, etc. Click on "Add field" for each field you want to include and set its type.

8. **Set Security Rules**: In the Firebase Console, go to the "Firestore Database" > "Rules" tab. Make sure your security rules are appropriately configured to control access to your data.

9. **Save Changes**: Once you have set up your collection and defined the necessary fields, click on "Create" to save your changes.

## Support

If you encounter any issues or have questions, please don't hesitate to [create an issue](https://github.com/your-username/spendwise/issues). We're here to help!

Happy budgeting with Spendwise! 📊💰
