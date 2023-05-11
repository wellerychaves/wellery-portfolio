/* eslint-disable */
import styled from "styled-components";

export const Container = styled.button`
	max-width: 9.5rem;
	background-color: #ffffff00;
	padding: 1rem;
	font-size: 1rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 3px;
	transition: 100ms;
	border: 2px solid ${(props) => props?.theme?.colors?.primary};

	:hover {
		font-weight: 500;
		background-color: ${(props) => props?.theme?.colors?.primary};
	}

	@media only screen and (min-width: 700px) {
		max-width: 168px;
		font-size: calc(var(--csize) * 1.8);
	}
`;
