import styled from "styled-components";

export const StyledBurguer = styled.button`
	/* 	position: absolute;
	top: 5%;
	left: 2rem; */
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

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${(props) => props.theme.colors.primary};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
	}

	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: ${({ theme }) => theme.primaryDark};
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: ${({ theme }) => theme.primaryHover};
		}
	}
`;
