// createContext will be used to instantiate a new Context object
// useContext is another React Hook that will allow us to use the tate created in the createContext function
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

// this instantiates our initial global state with the useProductReducer() function
// this function manages state at a global level and makes it available to all of the other components through a special <Provider> component
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

// this is a custom React Hook
// when this function is executed within a component, we will receive the [state, dispatch] data the StoreProvider manages
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };