import styled from "styled-components";

import { DefaultTheme } from "./../../styles/styled.d";

export const Container = styled.section`
	width: 100vw;
	height: fit-content;
	padding-bottom: 50px;
	font-family: var(--tajawal);
	font-size: calc(var(--csize) * 1.6);
	background-color: ${(props: DefaultTheme) => props.theme.colors.background};

	#content {
		max-width: 50vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0 auto;
	}

	#title {
		margin: 0 auto;
		padding-top: 25px;
		width: fit-content;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	#skills {
		max-width: 600px;
		margin: 20px auto;
		text-transform: capitalize;

		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		border: 1px solid red;
	}

	#skills-li {
		display: flex;
		align-items: center;
		flex-direction: column;

		margin: 10px;
	}

	.skills-icons {
		all: unset;
		fill: ${(props) => props.theme.colors.text};
		margin: 1px;
		transition: 0s;
	}

	.skills-icons:hover {
		transition: 0s;
		transform: none;
		fill: ${(props) => props.theme.colors.primary};
	}

	.skills-icons:hover #skills-span {
		color: darkmagenta;
	}

	#skills-span {
		font-size: 1rem;
		color: ${(props) => props.theme.colors.text};
	}

	@media only screen and (min-width: 700px) {
	}
`;

export const Line = styled.div`
	width: 94px;
	height: 3px;
	border-radius: 3px;
	background-color: ${(props: DefaultTheme) => props.theme.colors.primary};

	@media only screen and (min-width: 700px) {
		width: 146px;
		margin-left: 0;
	}
`;
