import React from "react";
import "./App.css";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Logo from "./assets/Frontend Simplified Logo.png";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "hi@email.com", "test12")
      .then((user) => console.log(user))
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    console.log("Logged in");
    signInWithEmailAndPassword(auth, "hi@email.com", "test12")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <nav>
        <div className="nav__container">
          <img src={Logo} className="logo" alt="" />
          <div className="buttons__wrapper">
            {loading ? (
              "Loading..."
            ) : user.email ? (
              <button className="btn__logout" onClick={logout}>
                {user.email && user.email[0].toUpperCase()}
              </button>
            ) : (
              <>
                <button className="btn" onClick={register}>
                  Register
                </button>
                <button className="btn__login" onClick={login}>
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
