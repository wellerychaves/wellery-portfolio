import { useContext, forwardRef, Ref } from "react";
import wellery from "../../assets/images/wellery.jpg";
import curriculum from "../../utils/links";
import { Container, ContentRight, ImageBox, InfoBox, StyledA } from "./styles";
import { InfosContext } from "../../providers/infos";
import Title from "../Title";

const About = (_: any, ref: Ref<HTMLDivElement>) => {
	const apresentation =
		"My name is Wellery Chaves. I'm a Full Stack Developer based in Paraíba, Brazil, and I'm very passionate to my work. With a year experience as a professional Full Stack Developer, I have acquired some skills necessary to develop great applications.";
	const { infos, infos2 } = useContext(InfosContext);

	return (
		<Container ref={ref}>
			<Title title="About me" />
			<div className="content">
				<ContentRight>
					<p className="infos_Apresentation">{apresentation}</p>
					<InfoBox className="personal-info">
						<div className="row">
							{infos.map((item: any, index: number) => (
								<div key={index} className="info">
									<p>
										<span>{Object.keys(item)}: </span>
										{item[Object.keys(item)[0]]}
									</p>
								</div>
							))}
						</div>
						<div className="row">
							{infos2.map((item: any, index: number) => (
								<div key={index} className="info">
									<p>
										<span>{Object.keys(item)}: </span>
										{item[Object.keys(item)[0]]}
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
					<img
						id="image"
						src={wellery}
						alt="Wellery Chaves profile photo"
					/>
				</ImageBox>
			</div>
		</Container>
	);
};

export default forwardRef(About);
