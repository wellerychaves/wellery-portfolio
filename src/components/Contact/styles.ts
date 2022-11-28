import styled from "styled-components";

import { DefaultTheme } from "./../../styles/styled.d";

export const Container = styled.section`
	width: 100vw;
	height: fit-content;
	padding: 50px 0;
	user-select: none;
	display: flex;
	flex-direction: column;
	background-color: ${(props: any) => props.theme.colors.background};

	#email {
		gap: 20px;
		margin-top: 20px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	h2 {
		margin: 20px auto 0;
	}
`;

export const Line = styled.div`
	width: 94px;
	height: 3px;
	border-radius: 3px;
	background-color: ${(props: DefaultTheme) => props.theme.colors.primary};
	margin: 0 auto 20px;

	@media only screen and (min-width: 700px) {
		width: 146px;
	}
`;

export const Content = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	@media only screen and (min-width: 550px) {
		flex-direction: row-reverse;
		gap: 100px;
	}

	@media only screen and (min-width: 650px) {
		gap: 150px;
	}
`;

export const Buttons = styled.div`
	width: fit-content;
	display: flex;
	margin: 50px auto;
	justify-content: space-around;
	gap: 18px;

	.buttonDiv {
		gap: 20px;
		display: flex;
		align-items: center;
	}

	.iconButton {
		width: 43px;
		height: 43px;
		border-radius: 5px;
		background-color: #00000000;
		border: 2px solid ${(props: DefaultTheme) => props.theme.colors.primary};
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 20px;
			stroke: white;
		}

		:hover {
			color: pink;
			text-decoration: pink;

			img {
				stroke: pink;
			}
		}
	}

	.buttonText {
		all: unset;
		font-family: var(--montserrat);
		font-size: calc(var(--csize) * 2);
		color: ${(props: DefaultTheme) => props.theme.colors.text};
		cursor: pointer;

		@media only screen and (max-width: 550px) {
			display: none;
		}
	}

	@media only screen and (min-width: 550px) {
		gap: 20px;
		flex-direction: column;
	}
`;
