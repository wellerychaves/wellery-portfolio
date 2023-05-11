import { useState } from "react";
import { Container, NavBar } from "./styles";

const HeaderMobile = () => {
	const [isChecked, setIsChecked] = useState(true);

	const handleClick = () => {
		setIsChecked(!isChecked);
	};

	return (
		<Container>
			<a className="logo">ツ</a>
			<label htmlFor="check" className="bar">
				<input  onClick={handleClick} id="check" type="checkbox"></input>

				<span className="top"></span>
				<span className="middle"></span>
				<span className="bottom"></span>
			</label>

			{isChecked && (
				<NavBar id="navBar">
					<a href="#top">Home</a>
					<a href="#about">About Me</a>
					<a href="#skills">Techs</a>
					<a href="#portfolio">Portfolio</a>
					<a href="#ContactMe">Contacts</a>
				</NavBar>
			)}
		</Container>
	);
};

export default HeaderMobile;
