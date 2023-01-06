# phase-2-project-travel-app

# README:

@travelApp

# App Purpose: 

Join a Social Network where you can `add`, `save`, and `favorite` destinations and activities at said destinations. 

This is to help you keep track of the places you've been, and also find inspiration for the next destination you'd want to go based off your peer's selections! 

# App functionality is as follows:

- Register as a user using the `Register` feature (form with `POST`)
   - You can `edit` your user details using a `PATCH`
   - You can also `delete` your user details using a `DELETE`

- You can add `Places` and `Activities` using their respective forms in the respective `ROUTED` tabs once you are logged in.
   - They will be added as `Objects` in the `db.json` server

- You can `favorite` and `mark interest` for specific `Places` or `Activities`, which will then update the `db.json` to reflect the user's selections.

- Your `Home` page reflects your favorited `Places` and they will persist.


## Not Working Yet

- Following other users to see their favorite `Places` and `Activities`
- Being able to `Search` `People`, `Places`, and `Activities`
- Being able to `click` on a `Person` and get their respective `Places` and `Activities`.
- Being able to `click` on a `Place` and see which `People` have been there and what `Activities` were there as well.
- Being able to `click` on an `Activity` and see which `People` have participated and where their respective `Places` are.


```
travel-app
└─ src
   ├─ components
      ├─ App.js((loggedIn, currentUser, people, places, activities))
      │  ├─ NavBar.js(loggedIn, setLoggedIn, setCurrentUser)
      │  ├─ Home.js(people, loggedIn, setLoggedIn, currentUser, setCurrentUser, setPeople,places)
      │  │  ├─ LogIn.js(setCurrentUser, people, setLoggedIn, loggedIn)
      │  │  ├─ PlacesIndividual.js(currentUser, setCurrentUser)
      │  │  └─ People.js(people, currentUser, setLoggedIn, setPeople, setCurrentUser)
      │  ├─People.js(people, currentUser, setLoggedIn, setPeople, setCurrentUser)        
      │  ├─ Places.js(places, setPlaces, currentUser, setCurrentUser)
      │  │  ├─ PlacesIndividual.js(currentUser, setCurrentUser)
      │  │  ├─ FormPlaces.js(places, setPlaces)
      │  ├─ Activities.js(activities, setActivities)     
      │  │  ├─ ActivitiesIndividual.js
      │  │  ├─ FormActivities.js(activities, setActivities)
      │  ├─ FormPeople.js(people, loggedIn, setLoggedIn, setPeople, setCurrentUser, currentUser)
      ├─ styles
      │  ├─ ActivitiesCard.js
      │  ├─ Button.js
      │  ├─ PeopleCard.js
      │  ├─ PlacesCard.js
      │  └─ index.js
      ├─ index.css
      └─ index.js

```

!!! How to use React App via VS CODE
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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

