//create a context using import from react app
import { createContext, useState, useEffect } from "react";
import { onAuthUserStateChanged, createUserDocumentFromAuth } from "../Utils/firebase/firebase.utils";

//as the actual value we want to access
export const UserContext = createContext({
  //context also needs initial value
  currentUser: null,
  setCurrentUser: () => null, //empty callback function that just returns null
});

//Provider is the actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); //user object
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthUserStateChanged((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
