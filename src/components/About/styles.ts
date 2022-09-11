import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 1000px;
	margin: 0 auto;
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
		width: 90vw;
		max-width: 720px;
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: 575px) {
	}

	@media screen and (min-width: 768px) {
	}

	@media screen and (min-width: 992px) {
		height: 800px;

		#content {
			gap: 25px;
			margin: 0 auto;
			max-width: 1140px;
			align-items: center;
			flex-direction: row;
			justify-content: space-around;
		}
	}
`;

export const ContentRight = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	max-width: 450px;

	#apresentation {
		font-weight: 400;
		margin-top: 20px;
		font-size: calc(var(--csize) * 1.4);
		font-weight: 500;
		max-width: 450px;
	}

	@media screen and (min-width: 575px) {
	}
	@media screen and (min-width: 768px) {
		max-width: 690px;

		#apresentation {
			width: 100%;
			max-width: fit-content;
			font-size: calc(var(--csize) * 1.6);
		}
	}
	@media screen and (min-width: 992px) {
		width: 635px;

		#apresentation {
			font-size: calc(var(--csize) * 1.8);
		}
	}
`;

export const ImageBox = styled.figure`
	width: 100%;
	height: 100vw;
	min-width: 280px;
	max-width: 400px;
	max-height: 400px;
	margin: 0 auto;
	border-radius: 4px;
	margin-bottom: 20px;
	background: ${(props: any) => props.theme.colors.background};

	display: flex;
	align-items: center;
	justify-content: center;

	#image {
		border-radius: 4px;
		object-fit: cover;
		max-width: 95%;
		height: 95%;
	}

	@media only screen and (min-width: 992px) {
		min-width: 440px;
		min-height: 496px;
		margin: 0;
	}
`;

export const InfoBox = styled.div`
	min-width: 280px;
	height: 280px;
	margin-top: 26px;
	border-radius: 5px;
	font-family: var(--tajawal);
	border: 2px solid ${(props: any) => props.theme.colors.primary};

	#row {
		display: flex;
		justify-content: center;
		flex-direction: column;

		padding: 25px 25px 10px 25px;
		line-height: 35px;
		margin: 0 auto;
		width: 100%;
		height: 100%;
	}

	.info {
		width: 90%;
	}

	span {
		font-weight: 600;
	}

	@media only screen and (min-width: 575px) {
		min-width: 510px;
		max-height: 192px;

		#row {
			flex-wrap: wrap;
			align-items: center;
			justify-content: flex-start;
		}

		.info {
			width: 216px;
		}
	}

	@media only screen and (min-width: 768px) {
		#row {
			flex-wrap: wrap;
			align-items: center;
		}
		.info {
			width: 304px;
		}
	}

	@media only screen and (min-width: 992px) {
		min-width: 450px;
		height: 192px;

		#row {
			padding: 25px 25px 10px 25px;
		}
		.info {
			width: 216px;
		}
	}
`;

export const StyledA = styled.a`
	all: unset;
	max-width: 144px;
	background-color: #ffffff00;
	padding: 0.8rem 0;
	font-size: calc(var(--csize) * 1.7);
	margin-top: 16px;
	border-radius: 5px;
	transition: 100ms;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid ${(props: any) => props.theme.colors.primary};

	:hover {
		font-weight: 500;
		background-color: ${(props: any) => props.theme.colors.primary};
	}

	@media only screen and (min-width: 700px) {
		max-width: 168px;
		font-size: calc(var(--csize) * 1.8);
	}
`;
