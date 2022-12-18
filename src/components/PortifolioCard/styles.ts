/* eslint-disable */
import styled from "styled-components";
import { DefaultTheme } from "./../../styles/styled.d";

export const Container = styled.div`
	width: 300px;
	max-width: 300px;
	height: 450px;
	border-radius: 7px;
	font-family: var(--montserrat);
	background-color: ${(props: any) => props.theme.colors.background};
`;

export const Figure = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		width: 279px;
		height: 148px;
		margin-top: 10px;
		border-radius: 5px;
		font-weight: bold;
		font-family: var(--zen);
		font-size: calc(var(--csize) * 3);
		color: ${(props: DefaultTheme) => props.theme.colors.primary};
		background-color: ${(props: DefaultTheme) =>
			props.theme.colors.background2};
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const CardContent = styled.div`
	width: 93%;
	margin: 0 auto;

	h3 {
		margin-top: 10px;
		font-size: calc(var(--csize) * 1.8);
		font-weight: 600;
	}
`;

export const DescriptionP = styled.p`
	font-size: calc(var(--csize) * 1.2);
	text-align: justify;
`;

export const TechsP = styled.p`
	font-size: calc(var(--csize) * 1.2);
`;

export const ButtonsDiv = styled.div`
	all: unset;
	height: 50px;
	margin-top: 15px;
	gap: 20px;

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	button {
		cursor: pointer;
		border-radius: 3px;
		font-size: calc(var(--csize) * 1.8);
		padding: 0.4rem 1.1rem;
		background-color: #00000000;
		font-family: var(--tajawal);
		color: ${(props: DefaultTheme) => props.theme.colors.text};
		border: 2px solid ${(props: DefaultTheme) => props.theme.colors.primary};
		:hover {
			background-color: ${(props: DefaultTheme) =>
				props.theme.colors.primary};
		}
	}
`;
