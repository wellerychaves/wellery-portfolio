/* eslint-disable */
import styled from "styled-components";

export const Form = styled.form`
	width: 100%;
	max-width: 20rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	font-family: var(--montserrat);

	.inputBox {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: ${(props) => props?.theme?.colors?.background};
	}

	.form__field {
		width: 100%;
		resize: none;
		height: 3rem;
		padding-left: 1rem;
		border-radius: 4px;
		padding-right: 1rem;

		color: ${(props) => props?.theme?.colors?.text};
		border: 2px solid ${(props) => props?.theme?.colors?.primary};
	}

	.from_text_area {
		height: 7rem;
		padding-top: 14px;
		padding-bottom: 14px;
		padding-right: 1rem;
	}

	.form__label {
		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);

		font-size: 0.9rem;
		transition: 0.4s;
		border-left: 0px solid transparent;
		border-right: 0px solid transparent;

		color: #696969;
		background-color: ${(props) => props?.theme?.colors?.background};
	}

	.from_text_area + .form__label {
		position: absolute;
		top: 24px;
		left: 1rem;
	}

	.form__field:focus-within + .form__label {
		padding: 0 1rem;
		font-weight: lighter;
		color: ${(props) => props?.theme?.colors?.text};
		transform: translateX(10px) translateY(-2rem);
		background-color: ${(props) => props?.theme?.colors?.background};
		border-left: 2px solid ${(props) => props?.theme?.colors?.primary};
		border-right: 2px solid ${(props) => props?.theme?.colors?.primary};
	}

	@media screen and (min-width: 756px) {
		max-width: 25rem;
		align-items: flex-start;
	}

	@media screen and (min-width: 900px) {
		max-width: 28.5rem;
		align-items: flex-start;
	}
`;

export const SubmitButton = styled.input`
	width: 7rem;
	height: 2.5rem;
	color: ${(props) => props?.theme?.colors?.text};
	border: 2px solid ${(props) => props?.theme?.colors?.primary};
	border-radius: 4px;

	cursor: pointer;
	transition: 200ms;

	:hover {
		color: ${(props) => props?.theme?.colors?.text};
		background-color: ${(props?) => props?.theme?.colors?.primary};
		font-weight: bold;
	}
`;
