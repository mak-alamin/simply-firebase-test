/**
 * Steps to ues firebase
 *
 * 1. Create a project on console.firebase.google.com
 * 2. npm install firebase
 * 3. Register web app in firebase
 * 4. Copy firebase init with config from firebase project settings
 * 5. Export default firebase init app
 * 6. Import firebase init app to your App.js
 * 7. Import getAuth from 'firebse/auth'
 * 8. Turn on firebase authentication and select sign-in provider on console.firebase.google.com
 * 9. Create provider from GoogleAuthProvider()
 * 10. signInWithPopup(auth, provide) when button click
 * 11. handle .then result (if success) and .catch error (if failure)
 * 12. SignOut(auth) --> .then(setUser({})) --> .catch()
 *
 */
