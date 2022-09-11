import styled from "styled-components";

export const Container = styled.footer`
	width: 100vw;
	height: 120px;
	display: flex;
	margin: 0 auto;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
	font-family: var(--montserrat);
	background-color: ${(props: any) => props.theme.colors.background};
	border-top: 3px solid ${(props: any) => props.theme.colors.primary};
	cursor: default;
	user-select: none;

	p {
		font-size: calc(var(--csize) * 1.3);
		@media only screen and (min-width: 700px) {
			font-size: calc(var(--csize) * 1.6);
		}
	}

	span {
		font-weight: 600;
		color: ${(props: any) => props.theme.colors.primary};
	}

	button {
		all: unset;
		cursor: help;
		width: fit-content;
		height: fit-content;
	}
`;
