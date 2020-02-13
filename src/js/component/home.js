import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Card
					imgUrl="https://randomuser.me/api/portraits/men/8.jpg"
					title="4Geeks Academy"
				/>
				<Card
					imgUrl="https://randomuser.me/api/portraits/men/9.jpg"
					title="Google"
				/>
				<Card
					imgUrl="https://randomuser.me/api/portraits/men/7.jpg"
					title="Google"
				/>
				{/* <Card />
                <Card /> */}
			</div>
			<Footer />
		</>
	);
}
