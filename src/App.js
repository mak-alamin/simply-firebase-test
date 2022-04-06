import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import firebaseApp from "./firebase.init";

const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.log("User Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      {user.email || user.uid ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Sign-in with Google</button>
          <button onClick={handleGithubSignIn}>Sign-in with Github</button>
        </>
      )}

      <h1>User Name: {user.displayName}</h1>
      <p>User Email: {user.email}</p>
      <img src={user.photoURL} alt={user.name} />
    </div>
  );
}

export default App;
