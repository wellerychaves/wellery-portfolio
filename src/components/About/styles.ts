/* eslint-disable */

import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	margin: 0 auto;
	padding-bottom: 2rem;


	display: flex;
	align-items: center;
	flex-direction: column;

	font-family: var(--tajawal);
	background-color: ${(props) => props?.theme?.colors?.background2};

	.content {
		width: 90%;
		max-width: 70rem;

		display: flex;
		flex-direction: column-reverse;
		gap: 1rem;
	}

	@media screen and (min-width: 756px) {
		min-height: 44rem;
		padding-top: 0;
		padding-bottom: 0;

		.content {
			margin: 0 auto;
			align-items: center;
			flex-direction: row;
			justify-content: space-around;
		}
	}
`;

export const ContentRight = styled.div`
	width: 100%;
	max-width: 450px;

	display: flex;
	justify-content: space-around;
	flex-direction: column;
	gap: 1rem;

	.infos_Apresentation {
		user-select: none;
		font-weight: 500;
		line-height: 20px;
		text-align: justify;
		font-size: calc(var(--csize) * 1.8);
	}

	@media screen and (min-width: 756px) {
		max-width: 37rem;
		line-height: 26px;

		.infos_Apresentation {
			font-size: 1.5rem;
			font-weight: 400;
			line-height: 30px;
		}
	}
`;

export const InfoBox = styled.div`
	width: 100%;
	padding: 1rem 1.5rem;
	margin: 0 auto;

	gap: 0.5rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;

	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 5px;

	.row {
		width: 100%;
		height: 100%;
		margin: 0 auto;

		gap: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
	}

	p {
		font-size: 1.2rem;
		font-weight: 400;
	}

	span {
		font-weight: 500;
	}

	@media screen and (min-width: 756px) {
		max-width: 37rem;
		height: 12rem;
		max-height: 12rem;

		flex-direction: row;

		.row {
			gap: 1rem;
		}
	}
`;

export const ImageBox = styled.figure`
	width: 100%;
	height: 100vw;
	min-width: 17.5rem;
	max-width: 28rem;
	max-height: 27rem;
	margin: 0 auto;
	user-select: none;
	border-radius: 4px;
	padding: 0.5rem;
	background: ${(props) => props?.theme?.colors?.background};

	display: flex;
	align-items: center;
	justify-content: center;

	#image {
		width: 100%;
		height: 100%;
		border-radius: 4px;
		object-fit: cover;
	}

	@media only screen and (min-width: 1200px) {
		width: 448px;
		height: 432px;
		margin: 0;
	}
`;

export const StyledA = styled.a`
	max-width: 9rem;

	font-size: 1rem;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0.8rem;
	border-radius: 0.25rem;
	border: 2px solid ${(props) => props?.theme?.colors?.primary};

	:hover {
		font-weight: 500;
		background-color: ${(props) => props?.theme?.colors?.primary};
	}

	@media only screen and (min-width: 756px) {
		max-width: 168px;
		font-size: 1.125rem;
	}
`;
