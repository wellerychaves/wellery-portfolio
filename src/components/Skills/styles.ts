import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: fit-content;
	padding-bottom: 50px;
	font-family: var(--tajawal);
	font-size: calc(var(--csize) * 1.6);
	transition: 300ms;
	background-color: ${props=>props.theme.colors.background};
	
	#title {
		padding-top: 25px;
		margin: 0 auto;
		width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media only screen and (min-width: 700px) {
		font-size: calc(var(--csize) * 2.4);

		#skills {
			max-width: 70vw;
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
		}
	}
`;

export const Line = styled.div`
	width: 94px;
	height: 3px;
	border-radius: 5px;
	margin-bottom: 1rem;
	background-color: ${(props) => props.theme.colors.primary};
`;

export const Skill = styled.div`
	padding-left: 20px;
	line-height: 25px;
	display: flex;
	flex-direction: column;

	#heading3 {
		font-weight: 500;
		font-size: calc(var(--csize) * 3);
		margin-top: 1.3rem;
		margin-bottom: 1rem;
	}

	p {
		font-family: var(--montserrat);
		width: fit-content;
	}

	@media only screen and (min-width: 700px) {
		line-height: 36px;
	}
`;
