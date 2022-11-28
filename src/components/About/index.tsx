import wellery from "../../assets/images/wellery.jpg";
import { Container, ContentRight, ImageBox, InfoBox, StyledA } from "./styles";

const About = () => {
	return (
		<Container id="about">
			<div id="content">
				<ImageBox>
					<img
						id="image"
						src={wellery}
						alt="Wellery Chaves profile photo"
					/>
				</ImageBox>
				{/* Title */}
				<ContentRight id="content-right">
					<h2>About me</h2>
					<div id="line" />

					<p id="apresentation">
						My name is Wellery Chaves. I'm a Full Stack Developer
						based in Paraíba, Brazil, and I'm very passionate to my
						work. With a year experience as a professional Full
						Stack Developer, I have acquired some skills necessary
						to build great websites.
					</p>
					{/* Title */}
					<InfoBox className="personal-info">
						<div id="row">
							<div className="info">
								<p>
									<span>Name: </span>Wellery T. Chaves
								</p>
							</div>
							<div className="info">
								<p>
									<span>Age: </span> 21
								</p>
							</div>
							<div className="info">
								<p>
									<span>Experiencie: </span> 1 Year
								</p>
							</div>
							<div className="info">
								<p>
									<span>Location: </span> Paraíba, Brazil
								</p>
							</div>
							<div className="info">
								<p>
									<span>LinkedIn: </span> Wellery Chaves
								</p>
							</div>
							<div className="info">
								<p>
									<span>Github: </span>wellerychaves
								</p>
							</div>
							<div className="info">
								<p>
									<span>Phone: </span>+55 83 98843 4748
								</p>
							</div>
						</div>
					</InfoBox>
					<StyledA
						target="_blank"
						href="https://drive.google.com/file/d/1wc_HjPYCxb25O0KOtVmWB1B4slF0PeAt/view?usp=sharing"
					>
						Download CV
					</StyledA>
				</ContentRight>
			</div>
		</Container>
	);
};

export default About;
