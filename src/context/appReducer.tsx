import React from "react";

export function appReducer(state: any, action: any) {
	console.log("test", state, action);
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

export default appReducer;
