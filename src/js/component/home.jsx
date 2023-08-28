import React from "react";
import SecondCounter from "./secondCounter";
import BetterCounter from "./betterCounter";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SecondCounter />
			<BetterCounter />
		</div>
	);
};

export default Home;
