import React from "react";
import SecondCounter from "./secondCounter";
import BetterCounter from "./betterCounter";
import CountDown from "./countDown";

//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<SecondCounter />
			<CountDown />
		</div>
	);
};

export default Home;
