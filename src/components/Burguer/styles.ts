import styled from "styled-components";

export const StyledBurguer = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;

	margin: 0;
	&:focus {
		outline: none;
	}

	div {
		width: 2rem;

		height: 0.25rem;
		background-color: ${(props) => props.theme.colors.primary};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		margin: 0;
	}
`;
