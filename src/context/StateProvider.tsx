import React, { useReducer } from "react";
import AppContext from "./AppContext";
import appReducer from "./appReducer";
import { initialState } from "./initialState";

export function StateProvider(props: any) {
	const [state, dispatch] = useReducer(appReducer, initialState);
	const value = [state, dispatch];
	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
}
