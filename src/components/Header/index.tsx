import { Container } from "./styles";

const Header = () => {
	return (
		<Container>
			<div id="content">
				<a className="logo">ツ</a>
				<nav className="navBar">
					<a href="#top">Home</a>
					<a href="#about">About Me</a>
					<a href="#skills">Techs</a>
					<a href="#portfolio">Portfolio</a>
					<a href="#ContactMe">Contacts</a>
				</nav>
			</div>
		</Container>
	);
};

export default Header;
