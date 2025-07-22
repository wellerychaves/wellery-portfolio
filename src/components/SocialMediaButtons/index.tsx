import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Container } from "./styles";

const SocialMediaButtons = () => {
	return (
		<Container>
			<div className="buttonDiv">
				<a
					title="Linkedin Wellery Chaves"
					rel="noreferrer noopener"
					className="iconButton"
					href="https://www.linkedin.com/in/wellerychaves/"
					target="_blank"
					type="button"
				>
					<FaLinkedinIn />
				</a>
				<a
					rel="noreferrer noopener"
					className="buttonText"
					href="https://www.linkedin.com/in/wellerychaves/"
					target="_blank"
				>
					LinkedIn
				</a>
			</div>
			<div className="buttonDiv">
				<a
					title="GitHub Wellery Chaves"
					rel="noreferrer noopener"
					className="iconButton"
					href="https://github.com/wellerychaves"
					target="_blank"
					type="button"
				>
					<FaGithub />
				</a>
				<a
					rel="noreferrer noopener"
					className="buttonText"
					href="https://github.com/wellerychaves"
					target="_blank"
				>
					GitHub
				</a>
			</div>
			<div className="buttonDiv">
				<a
					title="E-Mail Wellery Chaves"
					className="iconButton"
					href="mailto:wellerypro@outlook.com"
					target="_blank"
					type="button"
					rel="noreferrer"
				>
					<HiOutlineMail />
				</a>
				<a className="buttonText" href="mailto:wellerypro@outlook.com" target="_blank" rel="noreferrer">
					E-Mail
				</a>
			</div>
		</Container>
	);
};

export default SocialMediaButtons;
