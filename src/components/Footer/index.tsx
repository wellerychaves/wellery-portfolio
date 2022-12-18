import React from "react";

import { Container } from "./styled";

interface Props {
	toggleTheme(): void;
}

const Footer: React.FC<Props> = ({ toggleTheme }) => {
	return (
		<Container>
			<a href="#top" className="logo">
				ツ
			</a>
			<p>
				All Right Reserved{" "}
				<button onClick={() => toggleTheme()}>©</button> 2022
				<span> Wellery Chaves</span>
			</p>
		</Container>
	);
};

export default Footer;
