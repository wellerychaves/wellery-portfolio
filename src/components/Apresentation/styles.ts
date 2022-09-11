import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 100vh;
	background-color: ${(props: any) => props.theme.colors.background};

	font-family: var(--montserrat);
	font-weight: 500;

	display: flex;
	align-items: center;

	line-height: 70px;

	#content {
		padding-left: 30px;
	}

	p {
		font-size: calc(var(--csize) * 2);
	}

	#mainName {
		font-family: var(--tajawal);
		font-size: calc(var(--csize) * 3.5);
	}

	@media screen and (min-width: 575px) {
		width: 60vw;

		#content {
			margin: 0 auto;
		}

		p {
			font-size: calc(var(--csize) * 2.5);
		}

		#mainName {
			font-family: var(--tajawal);
			font-size: calc(var(--csize) * 5);
		}
	}
`;
