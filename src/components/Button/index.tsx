import React from "react";
import { Container } from "./styles";

interface ButtonProps {
	type: string;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
	return <Container type={type}>{children}</Container>;
};

export default Button;
