import { Container, ImageBox, InfoBox } from "./styles";
import wellery from "../../assets/images/wellery_pp.jpg";
import Button from "../Button";

const About = () => {
	return (
		<Container>
			<ImageBox>
				<img
					id="image"
					src={wellery}
					alt="Wellery Chaves profile photo"
				/>
			</ImageBox>
			{/* Title */}
			<h2>About me</h2>
			<div id="line" />
			{/* Title */}
			<InfoBox>
				<p>
					<span>Name: </span>Wellery T. Chaves
				</p>
				<p>
					<span>Experiencie: </span> 1 Year
				</p>
				<p>
					<span>Age: </span> 21
				</p>
				<p>
					<span>Location: </span> Paraíba, Brazil
				</p>
				<p>
					<span>LinkedIn: </span> Wellery Chaves
				</p>
				<p>
					<span>Github: </span>wellerychaves
				</p>
				<p>
					<span>Phone: </span>+55 83 98843 4748
				</p>
			</InfoBox>
			<Button>Download CV</Button>
		</Container>
	);
};

export default About;
