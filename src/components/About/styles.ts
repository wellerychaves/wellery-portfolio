import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 1000px;
	margin: 0 auto;
	transition: 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: var(--tajawal);
	background-color: ${(props: any) => props.theme.colors.background2};

	#line {
		background-color: ${(props: any) => props.theme.colors.primary};
		width: 94px;
		height: 3px;
		border-radius: 3px;

		@media only screen and (min-width: 700px) {
			width: 146px;
		}
	}

	#content {
		max-width: 90vw;
		display: flex;
		flex-direction: column;

		@media only screen and (min-width: 1000px) {
			justify-content: space-around;
			align-items: center;
			flex-direction: row;
			gap: 72px;
		}
	}

	#content-right {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		width: fit-content;

		h4 {
			font-weight: 500;
			margin-top: 20px;
			font-size: calc(var(--csize) * 1.6);
			font-weight: 500;
		}

		@media only screen and (min-width: 600px) {
			max-width: 90vw;
		}

		@media only screen and (min-width: 700px) {
			h2 {
				width: fit-content;
				height: fit-content;
			}

			h4 {
				max-width: 600px;
				font-size: calc(var(--csize) * 2);
			}
		}
	}
`;

export const ImageBox = styled.figure`
	width: 280px;
	height: 339.23px;
	background: ${(props: any) => props.theme.colors.background};
	box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.4);
	border-radius: 4px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	#image {
		border-radius: 4px;
		object-fit: cover;
		max-width: 95%;
		height: 95.26%;
	}

	@media only screen and (min-width: 700px) {
		margin: 0;
	}

	@media only screen and (min-width: 1000px) {
		width: 450px;
		height: 536px;
	}
`;

export const InfoBox = styled.div`
	width: 280px;
	max-width: 620px;
	height: 280px;
	margin-top: 26px;
	border-radius: 5px;
	border: 2px solid ${(props: any) => props.theme.colors.primary};
	display: flex;
	flex-direction: column;
	padding: 2rem 1rem;
	font-family: var(--tajawal);
	line-height: 30px;

	div {
		margin: 0;
	}

	span {
		font-weight: 600;
	}

	@media only screen and (min-width: 600px) {
		flex-direction: row;
		flex-wrap: wrap;
		width: 85vw;
		font-size: calc(var(--csize) * 2);
		display: flex;
		justify-content: space-around;

		div {
			line-height: 40px;
			align-items: space-around;
			flex-direction: column;
		}
	}
	@media only screen and (min-width: 700px) {
		flex-direction: row;
		flex-wrap: wrap;
		width: 600px;
		font-size: calc(var(--csize) * 2.4);
		display: flex;
		justify-content: space-around;

		div {
			line-height: 40px;
			align-items: space-around;
			flex-direction: column;
		}
	}
`;
