import { forwardRef, type Ref, useContext } from "react";
import wellery from "../../assets/images/wellery.jpg";
import { type Info, InfosContext } from "../../providers/infos";
import curriculum from "../../utils/links";
import Title from "../Title";
import { Container, ContentRight, ImageBox, InfoBox, StyledA } from "./styles";

const About = (_: unknown, ref: Ref<HTMLDivElement>) => {
	const apresentation =
		"Software Engineering student and Full Stack Developer building robust and scalable web applications with React and TypeScript. My work prioritizes high-quality code, performance, and a user-centric approach focused on accessibility.";
	const { infos, infos2 } = useContext(InfosContext);

	return (
		<Container ref={ref}>
			<Title title="About me" />
			<div className="content">
				<ContentRight>
					<p className="infos_Apresentation">{apresentation}</p>
					<InfoBox className="personal-info">
						<div className="row">
							{infos.map((item: Info, index: number) => (
								<div key={index.toString()} className="info">
									<p>
										<span>{item.label}: </span>
										{item.value}
									</p>
								</div>
							))}
						</div>
						<div className="row">
							{infos2.map((item: Info, index: number) => (
								<div key={index.toString()} className="info">
									<p>
										<span>{item.label}: </span>
										{item.value}
									</p>
								</div>
							))}
						</div>
					</InfoBox>
					<StyledA target="_blank" href={curriculum}>
						Download CV
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
