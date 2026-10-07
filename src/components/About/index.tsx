import { forwardRef, type Ref } from "react";
import wellery from "../../assets/images/wellery.webp";
import { linkedIn } from "../../utils/links";
import Title from "../Title";
import { Container, ContentRight, ImageBox, StyledA } from "./styles";

const About = (_: unknown, ref: Ref<HTMLDivElement>) => {
	const apresentation1 =
		"I'm Wellery Chaves, a Full Stack Developer with 3+ years of experience engineering scalable web applications. My practice spans full lifecycle development, building modern interfaces with React and TypeScript alongside solid backend systems focused on performance, accessibility, and high code quality.";
	const apresentation2 =
		"Core-wise, I work extensively with React, TypeScript, Node.js, and relational databases like PostgreSQL and MySQL. Driven by continuous learning, I'm currently expanding my systems-level knowledge with Rust to write safer, even more efficient code.";

	return (
		<Container ref={ref}>
			<Title title="About me" />
			<div className="content">
				<ContentRight>
					<p className="infos_Apresentation">{apresentation1}</p>
					<p className="infos_Apresentation">{apresentation2}</p>
					<StyledA target="_blank" href={linkedIn}>
						LinkedIn
					</StyledA>
				</ContentRight>
				<ImageBox>
					<img id="image" src={wellery} alt="Wellery Chaves" />
				</ImageBox>
			</div>
		</Container>
	);
};

export default forwardRef(About);
