import { forwardRef, type Ref, useContext } from "react";
import wellery from "../../assets/images/wellery.jpg";
import { type Info, InfosContext } from "../../providers/infos";
import curriculum from "../../utils/links";
import Title from "../Title";
import { Container, ContentRight, ImageBox, InfoBox, StyledA } from "./styles";

const About = (_: unknown, ref: Ref<HTMLDivElement>) => {
	const apresentation =
		"My name is Wellery Chaves. I'm a Full Stack Developer based in Paraíba, Brazil, and I'm very passionate in my work. With more than a year experience as a professional Full Stack Developer, I have acquired some skills necessary to develop great codes and applications.";
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
