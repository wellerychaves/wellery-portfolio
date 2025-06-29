import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import { Form, SubmitButton } from "./styles";

const Formulario = () => {
	const sendEmail = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		emailjs.sendForm("service_108055", "template_52rw9bf", evt.currentTarget, "ZmWaCznNTG3x7kLSG").then(
			(_result) => {
				toast.success("Email successfully sent", {
					position: "top-right",
					autoClose: 3499,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined
				});
			},
			(_error) => {
				toast.error("Something went wrong", {
					position: "top-right",
					autoClose: 3499,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined
				});
			}
		);
		(evt.target as HTMLFormElement).reset();
	};
	return (
		<Form autoComplete="off" onSubmit={(evt) => sendEmail(evt)}>
			<div className="inputBox">
				<input id="Name" required type="text" name="user_name" className="form__field" />
				<label htmlFor="Name" className="form__label">
					Name
				</label>
			</div>
			<div className="inputBox">
				<input id="Email" required type="email" name="user_email" className="form__field" />
				<label htmlFor="Email" className="form__label">
					Email
				</label>
			</div>
			<div className="inputBox">
				<textarea id="Message" required name="message" className="form__field from_text_area" />
				<label htmlFor="Message" className="form__label">
					Message
				</label>
			</div>
			<SubmitButton type="submit" value="Send Message" />
		</Form>
	);
};

export default Formulario;
