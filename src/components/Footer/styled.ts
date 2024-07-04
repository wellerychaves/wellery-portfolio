import styled from "styled-components";

export const Container = styled.footer`
	width: 100vw;
	height: 3.5rem;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: default;
	user-select: none;
	font-size: 0.75rem;
	font-family: var(--montserrat);

	border-top: 2px solid ${(props) => props?.theme?.colors?.primary};

	@media only screen and (min-width: 768px) {
		height: 4rem;
		font-size: 1rem;
	}

	@media only screen and (min-width: 1200px) {
		height: 5rem;
		font-size: 1rem;
	}

	button {
		all: unset;
		cursor: help;
		width: fit-content;
		height: fit-content;
		font-weight: 600;

		color: ${(props) => props?.theme?.colors?.primary};
	}
`;
