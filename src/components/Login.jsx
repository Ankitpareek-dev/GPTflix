import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginButtonLoading, setLoginButtonLoading] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;
    setLoginButtonLoading(true);
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            console.log(auth.currentUser);
            dispatch(
              addUser({
                uid: uid,
                email: email,
                name: displayName,
              })
            );
          });

          // ...
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        })
        .finally(() => {
          setLoginButtonLoading(false);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signed in successfully");
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative w-full min-h-screen font-sans overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="fixed inset-0 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
      </div>

      {/* Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 w-[90%] sm:w-4/5 md:w-3/5 lg:w-[28rem] mx-auto mt-24 bg-black/60 text-white p-6 sm:p-8 md:p-10 rounded-2xl"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 rounded bg-neutral-800 placeholder-gray-400 focus:outline-none"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="w-full p-3 mb-4 rounded bg-neutral-800 placeholder-gray-400 focus:outline-none"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-neutral-800 placeholder-gray-400 focus:outline-none"
        />

        <p className="text-red-500 pb-4">{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white font-semibold py-3 rounded cursor-pointer"
        >
          {loginButtonLoading ? (
            <div className="flex justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            </div>
          ) : isSignInForm ? (
            "Sign in"
          ) : (
            "Sign up"
          )}
        </button>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <span className="hover:underline cursor-pointer">Need help?</span>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          {isSignInForm ? "New to Netflix? " : "Already have an account? "}
          <span
            onClick={toggleSignInForm}
            className="text-white hover:underline cursor-pointer"
          >
            {isSignInForm ? "Sign up" : "Sign in"}
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
