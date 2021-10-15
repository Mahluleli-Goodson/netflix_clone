import {Context, useContext} from 'react';

/**
 * This works as [useContext] hook, but allows us to intercept the context and FailFast, with a better error message
 * @param context
 * @constructor
 */
const useCustomContext = (context: Context<any>): any => {
    const cstContext: Context<any> | undefined = useContext(context);
    if (cstContext === undefined) {
        throw Error("Seems you called a context outside its provider. Remember to use your <Context.Provider> as an HOC.");
    }
    return cstContext;
};

export default useCustomContext;
