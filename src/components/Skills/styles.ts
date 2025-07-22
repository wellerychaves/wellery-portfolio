import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	margin: 0 auto;

	display: flex;
	flex-direction: column;

	font-size: 1rem;
	font-weight: 400;
	font-family: var(--montserrat);

	background-color: ${(props) => props?.theme?.colors?.background};

	.skillsDiv {
		width: fit-content;
		max-width: 90%;
		margin: 0 auto;
		margin-top: 2rem;
		margin-bottom: 2rem;

		gap: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-sizing: border-box;
	}

	.skillType {
		width: fit-content;

		gap: 0.5rem;
		display: flex;
		flex-direction: column;
	}

	.skillType-title {
		width: 16rem;
		font-size: 24px;
		font-weight: 500;
		font-family: var(--tajawal);

		color: ${(props) => props?.theme?.colors?.primary};
	}

	.skillType-list {
		width: 100%;

		gap: 4px;
		display: flex;
		list-style: none;
		flex-direction: column;
	}

	@media only screen and (min-width: 680px) {
		min-height: 44rem;
		.skillsDiv {
			max-width: 80%;
		}
	}

	@media only screen and (min-width: 1024px) {
		.skillsDiv {
			gap: 1rem;
			width: 100%;
			max-width: 70rem;
			margin-top: 0;
			margin-bottom: 0;
			justify-content: space-between;
		}

		.skillType-title {
			width: fit-content;
			font-size: 28px;
		}

		.skillType-list {
			flex-direction: row;
		}
	}
`;
