import React from "react";
import { Container, Span } from "./styles";

type TitleProps = {
	title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
	return (
		<Container>
			<h2>{title}</h2>
			<Span />
		</Container>
	);
};

export default Title;
