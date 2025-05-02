import type React from "react";

import { Container } from "./styled";

interface Props {
	toggleTheme(): void;
}

const Footer: React.FC<Props> = ({ toggleTheme }) => {
	return (
		<Container>
			<p>
				Planned and developed by{" "}
				<button type="button" onClick={() => toggleTheme()}>
					Wellery Chaves
				</button>
			</p>
		</Container>
	);
};

export default Footer;
