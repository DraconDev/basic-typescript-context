import React, { useContext } from "react";
import { AppContext } from "./../../context/AppContext";

export default function Counter() {
	const [state, dispatch] = useContext(AppContext);
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: "decrement" })}>-</button>
			<button onClick={() => dispatch({ type: "increment" })}>+</button>
		</>
	);
}
