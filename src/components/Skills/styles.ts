import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: fit-content;
	padding-bottom: 50px;
	font-family: var(--tajawal);
	font-size: calc(var(--csize) * 1.6);
	background-color: ${(props: any) => props.theme.colors.background};

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
		max-width: 90vw;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		flex-direction: column;

		#heading3 {
			font-weight: 500;
			user-select: none;
			margin-top: 1.3rem;
			margin-bottom: 1rem;
			font-size: calc(var(--csize) * 3);
		}
	}

	@media only screen and (min-width: 700px) {
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

export const Skill = styled.div`
	padding-left: 20px;
	line-height: 25px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 10px;

	p {
		font-family: var(--montserrat);
		width: fit-content;
	}

	@media only screen and (min-width: 700px) {
		line-height: 36px;
	}
`;
