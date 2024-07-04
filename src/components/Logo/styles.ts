import styled from "styled-components";

export const Button = styled.button`
	padding: 0;
	border: none;
	background: none;

	display: flex;
	align-items: center;
	justify-content: center;

	.logo {
		padding: 0;
		max-width: 48px;
		max-height: 48px;
	}

	@media only screen and (min-width: 768px) {
		.logo {
			max-width: 60px;
			max-height: 60px;
		}
	}
`;
