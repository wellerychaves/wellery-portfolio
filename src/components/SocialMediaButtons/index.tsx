import {
	FaLinkedinIn,
	FaGithub,
	FaTelegramPlane,
	FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Container } from "./styles";

const SocialMediaButtons = () => {
	return (
		<Container>
			<div className="buttonDiv">
				<a
					rel="noopener"
					className="iconButton"
					href="https://www.linkedin.com/in/wellerychaves/"
					target="_blank"
					type="button"
				>
					<FaLinkedinIn />
				</a>
				<a
					rel="noopener"
					className="buttonText"
					href="https://www.linkedin.com/in/wellerychaves/"
					target="_blank"
				>
					LinkedIn
				</a>
			</div>
			<div className="buttonDiv">
				<a
					rel="noopener"
					className="iconButton"
					href="https://github.com/wellerychaves"
					target="_blank"
					type="button"
				>
					<FaGithub />
				</a>
				<a
					rel="noopener"
					className="buttonText"
					href="https://github.com/wellerychaves"
					target="_blank"
				>
					GitHub
				</a>
			</div>
			<div className="buttonDiv">
				<a
					rel="noopener"
					className="iconButton"
					href="https://t.me/WelleryC"
					target="_blank"
					type="button"
				>
					<FaTelegramPlane />
				</a>
				<a
					rel="noopener"
					className="buttonText"
					href="https://t.me/WelleryC"
					target="_blank"
				>
					Telegram
				</a>
			</div>
			<div className="buttonDiv">
				<a
					rel="noopener"
					className="iconButton"
					href="https://wa.me/5583982251204"
					target="_blank"
					type="button"
				>
					<FaWhatsapp />
				</a>
				<a
					rel="noopener"
					className="buttonText"
					href="https://wa.me/5583982251204"
					target="_blank"
				>
					Whatsapp
				</a>
			</div>
			<div className="buttonDiv">
				<a
					className="iconButton"
					href="mailto:wellerypro@outlook.com"
					target="_blank"
					type="button"
				>
					<HiOutlineMail />
				</a>
				<a
					className="buttonText"
					href="mailto:wellerypro@outlook.com"
					target="_blank"
				>
					E-Mail
				</a>
			</div>
		</Container>
	);
};

export default SocialMediaButtons;
