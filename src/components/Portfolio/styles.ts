import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: fit-content;

	margin: 0 auto;
	padding-bottom: 2rem;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: column;

	background-color: ${(props) => props?.theme?.colors?.background2};

	.cards {
		width: 100%;
		max-width: 70rem;

		gap: 2rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
	}

	@media only screen and (min-width: 650px) {
		padding-bottom: 4rem;

		.cards {
			padding: 0 2rem;
			flex-direction: row;
		}
	}
`;

export const Line = styled.div`
	width: 94px;
	height: 3px;
	border-radius: 3px;
	background-color: ${(props) => props?.theme?.colors?.primary};

	@media only screen and (min-width: 700px) {
		width: 146px;
		margin-left: 0;
	}
`;
