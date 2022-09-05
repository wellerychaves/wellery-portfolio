import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	margin: 0 auto;
	padding: 50px 0;
	height: fit-content;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: ${(props: any) => props.theme.colors.background2};

	h2 {
		margin-top: -30px;
		justify-content: flex-start;
	}

	#cards {
		gap: 20px;
		width: 90%;
		margin-top: 48px;
		max-width: 1000px;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		@media only screen and (min-width: 650px) {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
`;

export const Line = styled.div`
	width: 94px;
	height: 3px;
	border-radius: 3px;
	background-color: ${(props: any) => props.theme.colors.primary};

	@media only screen and (min-width: 700px) {
		width: 146px;
		margin-left: 0;
	}
`;
