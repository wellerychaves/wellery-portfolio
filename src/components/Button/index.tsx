import React from "react";
import { Container } from "./styles";

interface ButtonProps {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
	return (
		<Container>
			<p>{children}</p>
		</Container>
	);
};

export default Button;
