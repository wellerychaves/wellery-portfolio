import Button from "../Button";
import { Container, CustomInput, Line } from "./styles";

const Contact = () => {
	return (
		<Container>
			<h2>Contact-me</h2>
			<Line />
			<div id="email">
				<CustomInput type="text" placeholder="Name" />
				<CustomInput type="email" placeholder="E-mail" />
				<CustomInput type="text" placeholder="Subject" />
				<CustomInput type="text" placeholder="Your Message" />
				<Button>Send Message</Button>
			</div>
			<div></div>
		</Container>
	);
};

export default Contact;
