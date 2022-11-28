import { useState } from "react";

import { DesktopHeader, MobileHeader } from "./styles";

const Header = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleClick = () => setIsChecked(!isChecked);

	return (
		<>
			<MobileHeader>
				<a className="logo">ツ</a>
				<label htmlFor="check" className="bar">
					<input
						onClick={handleClick}
						id="check"
						type="checkbox"
					></input>

					<span className="top"></span>
					<span className="middle"></span>
					<span className="bottom"></span>
				</label>

				{isChecked && (
					<nav id="navBar">
						<a onClick={handleClick} href="#top">
							Home
						</a>
						<a onClick={handleClick} href="#about">
							About Me
						</a>
						<a onClick={handleClick} href="#skills">
							Techs
						</a>
						<a onClick={handleClick} href="#portfolio">
							Portfolio
						</a>
						<a onClick={handleClick} href="#ContactMe">
							Contacts
						</a>
					</nav>
				)}
			</MobileHeader>

			<DesktopHeader>
				<a className="logo">ツ</a>
				<nav id="navBar">
					<a href="#top">Home</a>
					<a href="#about">About Me</a>
					<a href="#skills">Techs</a>
					<a href="#portfolio">Portfolio</a>
					<a href="#ContactMe">Contacts</a>
				</nav>
			</DesktopHeader>
		</>
	);
};

export default Header;
