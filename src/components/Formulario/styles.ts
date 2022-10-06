import styled from "styled-components";

export const Form = styled.form`
	width: 80vw;
	max-width: 500px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	font-family: var(--montserrat);

	.inputBox {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: ${(props) => props.theme.colors.background};
	}

	.inputBox input,
	.inputBox textarea {
		resize: none;
		padding: 0.8rem;
		border-radius: 4px;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		color: ${(props) => props.theme.colors.text};
		border: 2px solid ${(props) => props.theme.colors.primary};
	}

	.inputBox textarea {
		height: 7rem;
	}

	.inputBox label {
		position: absolute;
		left: 0.6rem;
		top: 1.3rem;
		font-size: 0.9rem;
		transition: 0.4s;
		border-left: 0px solid transparent;
		border-right: 0px solid transparent;

		background-color: ${(props) => props.theme.colors.background};
	}

	.form__field:valid ~ label,
	.form__field:focus ~ label {
		padding: 0 1rem;
		border-radius: 10px;
		font-weight: lighter;
		color: ${(props) => props.theme.colors.text};
		transform: translateX(10px) translateY(-21px);
		background-color: ${(props) => props.theme.colors.background};
		border-left: 3px solid ${(props) => props.theme.colors.primary};
		border-right: 3px solid ${(props) => props.theme.colors.primary};
	}
`;

export const SubmitButton = styled.input`
	width: 7rem;
	height: 2.5rem;
	color: ${(props) => props.theme.colors.text};
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 4px;
	
	cursor: pointer;
	transition: 200ms;

	:hover {
		color: ${(props) => props.theme.colors.text};
		background-color: ${(props) => props.theme.colors.primary};
		font-weight: bold;
	}
`;
