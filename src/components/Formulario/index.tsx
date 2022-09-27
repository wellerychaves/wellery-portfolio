import emailjs from "@emailjs/browser";
import { Form, SubmitButton } from "./styles";

const Formulario = () => {
	const sendEmail = (evt: any) => {
		evt.preventDefault();

		emailjs
			.sendForm(
				"service_106063",
				"template_52rw9bf",
				evt.target,
				"ZmWaCznNTG3x7kLSG"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<Form autoComplete="off" onSubmit={(evt) => sendEmail(evt)}>
			<div className="inputBox">
				<input
					required
					type="text"
					name="user_name"
					className="form__field"
				/>
				<label className="form__label">Name</label>
			</div>
			<div className="inputBox">
				<input
					required
					type="email"
					name="user_email"
					className="form__field"
				/>
				<label className="form__label">Email</label>
			</div>
			<div className="inputBox">
				<textarea required name="message" className="form__field" />
				<label className="form__label">Message</label>
			</div>
			<SubmitButton type="submit" value="Send" />
		</Form>
	);
};

export default Formulario;
