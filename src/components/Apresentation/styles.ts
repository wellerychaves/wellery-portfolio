import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 91vh;
	background-color: ${(props: any) => props.theme.colors.background};

	font-family: var(--montserrat);
	font-weight: 500;

	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 20px;

	p {
		width: fit-content;
	}

	#content {
		margin: 0 auto;
		width: 60vw;
		line-height: 70px;
		font-size: calc(var(--csize) * 2.5);
	}

	#mainName {
		width: fit-content;
		font-family: var(--tajawal);
		font-size: calc(var(--csize) * 3.5);
		font-weight: 500;
	}
`;
