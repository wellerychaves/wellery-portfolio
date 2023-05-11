/* eslint-disable */
import styled from "styled-components";

export const Container = styled.div`
	width: 18rem;
	height: fit-content;

	padding: 16px;
	border-radius: 0.5rem;

	gap: 1rem;
	display: flex;
	flex-direction: column;

	font-family: var(--montserrat);
	background-color: ${(props) => props?.theme?.colors?.background};
`;

export const Figure = styled.figure`
	width: 16rem;
	height: 9rem;
	border-radius: 2px;

	font-weight: bold;
	font-family: var(--zen);
	font-size: calc(var(--csize) * 3);

	display: flex;
	align-items: center;
	justify-content: center;

	color: ${(props) => props?.theme?.colors?.primary};
	background-color: ${(props) => props?.theme?.colors?.background2};
`;

export const CardContent = styled.div`
	width: 16rem;
	margin: 0 auto;

	gap: 1rem;
	display: flex;
	flex-direction: column;

	font-weight: 400;

	.cardContent_item {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
	}

	h3 {
		font-weight: 500;
		line-height: 24px;
		font-size: calc(var(--csize) * 2);
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
	width: 90%;
	height: fit-content;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-around;

	button {
		max-height: 2rem;
		
		font-weight: 400;
		font-size: 0.75rem;
		
		display: flex;
		align-items: center;
		justify-content: center;

		border: 1px solid ${(props) => props?.theme?.colors?.primary};
	}
`;
