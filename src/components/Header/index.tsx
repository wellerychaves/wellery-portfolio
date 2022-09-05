import { Container } from "./styles";
import tsu from "../../assets/images/tsu.svg";
import React from "react";

interface Props {
	toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
	/*onClick={() => toggleTheme()}*/
	return (
		<>
			<Container>
				<a className="logo">ツ</a>
				<button onClick={() => toggleTheme()} id="menu">
					T
				</button>
			</Container>
		</>
	);
};

export default Header;
