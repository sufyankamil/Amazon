import React, {createContext, useReducer, useContext} from "react";

// Prepare DataLayer (create provider)
export const StateContext =  createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = (reducer, initialState, children) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}

    </StateContext.Provider>
);

// Dispatch the data => useReducer();
// Pull the data useContext();

// Pull information from Data Layer
export const useStateValue = () => useContext(StateContext);