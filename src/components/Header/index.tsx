import { useState } from "react";
import { Container, NavBar } from "./styles";

const Header = () => {
	const [isChecked, setIsChecked] = useState(false);

	const menuButton = () => {
		setIsChecked(!isChecked);
	};
	return (
		<Container>
			<div id="content">
				<a className="logo">ツ</a>
				<label htmlFor="check" className="bar">
					<input onClick={menuButton} id="check" type="checkbox" />

					<span className="top"></span>
					<span className="middle"></span>
					<span className="bottom"></span>
				</label>
				<nav className="navBar">
					<a href="#top">Home</a>
					<a href="#about">About Me</a>
					<a href="#skills">Techs</a>
					<a href="#portfolio">Portfolio</a>
					<a href="#ContactMe">Contacts</a>
				</nav>
				{isChecked ? (
					<NavBar>
						<a href="#top">Home</a>
						<a href="#about">About Me</a>
						<a href="#skills">Techs</a>
						<a href="#portfolio">Portfolio</a>
						<a href="#ContactMe">Contacts</a>
					</NavBar>
				) : (
					""
				)}
			</div>
		</Container>
	);
};

export default Header;
