//create a context using import from react app
import { createContext, useEffect, useReducer } from "react";
import {
  onAuthUserStateChanged,
  createUserDocumentFromAuth,
} from "../Utils/firebase/firebase.utils";

//as the actual value we want to access
export const UserContext = createContext({
  //context also needs initial value
  currentUser: null,
  setCurrentUser: () => null, //empty callback function that just returns null
});


//Reducer 
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in User Reducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

//Provider is the actual component

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null); //user object

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };


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

/*
   const userReducer = (state,action) => {
    return {
      currentUser : null , 
    }
   }
 */
