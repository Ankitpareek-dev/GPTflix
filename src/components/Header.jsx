import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL, USER_AVATAR } from "../utils/constantValues";

function Header() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isUserLoggedIn = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const userName = isUserLoggedIn?.name;

  const handleButtonClick = () => {
    setShowUserMenu((prev) => !prev);
  };
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex justify-between items-center">
      {/* Netflix Logo */}
      <img
        className="w-24 sm:w-28 md:w-36 lg:w-44"
        src={NETFLIX_LOGO_URL}
        alt="Netflix Logo"
      />

      {/* Avatar & Dropdown */}
      {isUserLoggedIn && (
        <div className="relative">
          <img
            src={USER_AVATAR}
            alt="User Avatar"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full cursor-pointer"
            onClick={handleButtonClick}
          />

          {/* Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 top-12 sm:top-14 bg-[#2e2e2e]/90 backdrop-blur-sm text-white w-36 sm:w-40 rounded-xl shadow-xl py-3 flex flex-col items-center">
              <div className="flex items-center px-4 pb-3 border-b border-gray-600 w-full">
                <img
                  src={USER_AVATAR}
                  alt="User"
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full mr-3"
                />
                <span className="text-sm font-medium truncate max-w-[90px]">
                  {userName}
                </span>
              </div>
              <ul className="text-sm mt-2 space-y-2 px-4 text-left w-full">
                <li className="hover:underline cursor-pointer">Account</li>
                <li className="hover:underline cursor-pointer">Settings</li>
                <li className="hover:underline cursor-pointer">Help Center</li>
              </ul>
              <button
                onClick={handleSignOut}
                className="mt-4 bg-red-600 hover:bg-red-700 transition text-sm font-semibold py-2 px-4 rounded-md"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
