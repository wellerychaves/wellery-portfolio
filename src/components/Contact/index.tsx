import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";
import {
	FaLinkedinIn,
	FaGithub,
	FaTelegramPlane,
	FaWhatsapp,
} from "react-icons/fa";

import Button from "../Button";
import {
	Buttons,
	Container,
	Content,
	CustomInput,
	Line,
	TextArea,
} from "./styles";

const Contact = () => {
	return (
		<IconContext.Provider
			value={{
				color: `${(props: any) => props.theme.colors.primary}`,
				size: "20px",
			}}
		>
			<Container id="ContactMe">
				<h2>Contact Me</h2>
				<Line />
				<Content>
					<div id="email">
						<CustomInput type="text" placeholder="Name" />
						<CustomInput type="email" placeholder="E-mail" />
						<CustomInput type="text" placeholder="Subject" />
						<TextArea placeholder="Your Message" />
						<Button type="submit">Send Message</Button>
					</div>
					<Buttons id="buttons">
						<div className="buttonDiv">
							<a
								className="iconButton"
								href="https://www.linkedin.com/in/wellerychaves/"
								target="_blank"
								type="button"
							>
								<FaLinkedinIn />
							</a>
							<a
								className="buttonText"
								href="https://www.linkedin.com/in/wellerychaves/"
								target="_blank"
							>
								LinkedIn
							</a>
						</div>
						<div className="buttonDiv">
							<a
								className="iconButton"
								href="https://github.com/wellerychaves"
								target="_blank"
								type="button"
							>
								<FaGithub />
							</a>
							<a
								className="buttonText"
								href="https://github.com/wellerychaves"
								target="_blank"
							>
								GitHub
							</a>
						</div>
						<div className="buttonDiv">
							<a
								className="iconButton"
								href="https://t.me/WelleryC"
								target="_blank"
								type="button"
							>
								<FaTelegramPlane />
							</a>
							<a
								className="buttonText"
								href="https://t.me/WelleryC"
								target="_blank"
							>
								Telegram
							</a>
						</div>
						<div className="buttonDiv">
							<a
								className="iconButton"
								href="https://wa.me/5583988434748"
								target="_blank"
								type="button"
							>
								<FaWhatsapp />
							</a>
							<a
								className="buttonText"
								href="https://wa.me/5583988434748"
								target="_blank"
							>
								Whatsapp
							</a>
						</div>
						<div className="buttonDiv">
							<a
								className="iconButton"
								href="mailto:wellerychaves@outlook.com"
								target="_blank"
								type="button"
							>
								<HiOutlineMail />
							</a>
							<a
								className="buttonText"
								href="mailto:wellerychaves@outlook.com"
								target="_blank"
							>
								E-Mail
							</a>
						</div>
					</Buttons>
				</Content>
			</Container>
		</IconContext.Provider>
	);
};

export default Contact;
