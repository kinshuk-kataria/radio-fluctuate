### https://radio-fluctuate-kinshuk-kataria.vercel.app/
# Objective:

The objective of this project is to build an automated system in which songs are accessed directly from Spotify without user authentication or invlovement of user information.


# Project Details
<ul>
<li>Frontend: React</li>
<li>Backend:Node.js, Express.js</li>
<li>Data Fetching: Axios</li>
<li>API: Spotify</li>
</ul>



# Some details about API
### OAuth flow used: Client Credentials Flow
The Client Credentials flow is used in server-to-server authentication. Since this flow does not include authorization, only endpoints that do not access user information can be accessed.

## UI
<img width="1440" alt="fluctuate" src="https://user-images.githubusercontent.com/103840688/210045208-fb1314c8-90f1-45b9-9ffc-2fb4ae85ecbf.png">


The Client Credentials flow is used in server-to-server authentication. Since this flow does not include authorization, only endpoints that do not access user information can be accessed.
The following diagram shows how the Client Credentials Flow works:



<img width="522" alt="AuthG_ClientCredentials" src="https://user-images.githubusercontent.com/103840688/206432793-50ae5b75-ec2e-4a91-a925-a059a4513d77.png">

For more info about OAuth flow please visit: https://developer.spotify.com/documentation/general/guides/authorization/






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

