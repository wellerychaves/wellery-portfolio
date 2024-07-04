import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${(props) => props?.theme?.colors?.background};

	#content {
		width: 90vw;
		height: fit-content;
	}

	.content_p {
		font-weight: 400;
		font-family: var(--montserrat);
		font-size: calc(var(--csize) * 1.6);
	}

	.mainName {
		font-weight: 500;
		font-family: var(--tajawal);
		font-size: calc(var(--csize) * 3.5);

		color: ${(props) => props.theme.colors.primary};
	}

	// Desktop
	@media screen and (min-width: 745px) {
		#content {
			max-width: 1120px;
			margin: 0 auto;
			gap: 8px;
		}

		.content_p {
			font-size: calc(var(--csize) * 3.2);
		}

		.mainName {
			font-family: var(--tajawal);
			font-size: calc(var(--csize) * 6.4);
		}
	}
`;
