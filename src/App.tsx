import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import { StateProvider } from "./context/StateProvider";

function App() {
	return (
		<div className="App">
			<StateProvider>
				<Counter></Counter>
			</StateProvider>
		</div>
	);
}

export default App;
