import { Container, ImageBox, InfoBox } from "./styles";
import wellery from "../../assets/images/wellery.jpg";
import Button from "../Button";

const About = () => {
	return (
		<Container>
			<div id="content">
				<ImageBox>
					<img
						id="image"
						src={wellery}
						alt="Wellery Chaves profile photo"
					/>
				</ImageBox>
				{/* Title */}
				<div id="content-right">
					<h2>About me</h2>
					<div id="line" />

					<h4>
						My name is Wellery Chaves. I'm a Full Stack Developer
						based in Paraíba, Brazil.
					</h4>
					{/* Title */}
					<InfoBox>
						<div>
							<p>
								<span>Name: </span>Wellery T. Chaves
							</p>
							<p>
								<span>Age: </span> 21
							</p>
							<p>
								<span>Experiencie: </span> 1 Year
							</p>
							<p>
								<span>Location: </span> Paraíba, Brazil
							</p>
						</div>
						<div>
							<p>
								<span>LinkedIn: </span> Wellery Chaves
							</p>
							<p>
								<span>Github: </span>wellerychaves
							</p>
							<p>
								<span>Phone: </span>+55 83 98843 4748
							</p>
						</div>
					</InfoBox>
					<Button>Download CV</Button>
				</div>
			</div>
		</Container>
	);
};

export default About;
