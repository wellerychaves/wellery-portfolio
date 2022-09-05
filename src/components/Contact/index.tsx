import Button from "../Button";
import {
	FaLinkedinIn,
	FaGithub,
	FaTelegramPlane,
	FaWhatsapp,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";
import linkedin from "../../assets/images/linkedin.svg";
import { Buttons, ContactButton, Container, CustomInput, Line } from "./styles";

const Contact = () => {
	return (
		<IconContext.Provider
			value={{
				color: `${(props: any) => props.theme.colors.primary}`,
				size: "20px",
			}}
		>
			<Container>
				<h2>Contact-me</h2>
				<Line />
				<div id="email">
					<CustomInput type="text" placeholder="Name" />
					<CustomInput type="email" placeholder="E-mail" />
					<CustomInput type="text" placeholder="Subject" />
					<CustomInput type="text" placeholder="Your Message" />
					<Button type="submit">Send Message</Button>
				</div>
				<Buttons id="buttons">
					<a
						href="https://www.linkedin.com/in/wellerychaves/"
						target="_blank"
						type="button"
					>
						<FaLinkedinIn />
					</a>
					<a
						href="https://github.com/wellerychaves"
						target="_blank"
						type="button"
					>
						<FaGithub />
					</a>
					<a
						href="https://t.me/WelleryC"
						target="_blank"
						type="button"
					>
						<FaTelegramPlane />
					</a>
					<a
						href="https://wa.me/5583988434748"
						target="_blank"
						type="button"
					>
						<FaWhatsapp />
					</a>
					<a
						href="mailto:wellerychaves@outlook.com"
						target="_blank"
						type="button"
					>
						<HiOutlineMail />
					</a>
				</Buttons>
			</Container>
		</IconContext.Provider>
	);
};

export default Contact;
