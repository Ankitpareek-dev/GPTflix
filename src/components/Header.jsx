import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isUserLoggedIn = useSelector((state) => state.user);

  console.log(isUserLoggedIn);

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
        navigate("/error");
      });
  };

  return (
    <div className="bg-gradient-to-b from-black px-8 py-4 z-10 flex justify-between items-center relative">
      {/* Netflix Logo */}
      <img
        className="w-36 md:w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />

      {/* Avatar & Dropdown */}
      {isUserLoggedIn && (
        <div className="relative">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User Avatar"
            className="h-10 w-10 rounded cursor-pointer"
            onClick={handleButtonClick}
          />

          {/* Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 top-12 bg-[#2e2e2e] text-white w-36 rounded-lg shadow-lg py-3 text-center">
              <div className="flex items-center px-4 pb-3 border-b border-gray-600 ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt="User"
                  className="h-8 w-8 rounded-full mr-3"
                />
                <span className="text-sm font-medium">User1</span>
              </div>
              <ul className="text-sm mt-2 space-y-2 px-4">
                <li className="hover:underline cursor-pointer">Account</li>
                <li className="hover:underline cursor-pointer">Settings</li>
                <li className="hover:underline cursor-pointer">Help Center</li>
              </ul>
              <button
                onClick={handleSignOut}
                className="mt-4 w-1/2 bg-red-600 hover:bg-red-700 transition text-sm font-semibold py-2 rounded-lg"
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
