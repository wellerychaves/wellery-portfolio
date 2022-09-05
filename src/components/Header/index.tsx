import { Container } from "./styles";

const Header = () => {
	return (
		<>
			<Container>
				<div id="content">
					<a className="logo">ツ</a>
					<nav className="navBar">
						<a href="#top">Home</a>
						<a href="">About Me</a>
						<a href="">Techs</a>
						<a href="">Portfolio</a>
						<a href="">Contacts</a>
					</nav>
				</div>
			</Container>
		</>
	);
};

export default Header;
