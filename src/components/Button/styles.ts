import styled from "styled-components";

export const Container = styled.button`
	max-width: 144px;
	background-color: #ffffff00;
	padding: 0.8rem 1rem;
	font-size: calc(var(--csize) * 1.6);
	margin-top: 16px;
	border-radius: 5px;
	transition: 100ms;
	border: 2px solid ${(props: any) => props.theme.colors.primary};

	:hover {
		font-weight: 500;
		background-color: ${(props: any) => props.theme.colors.primary};
	}

	@media only screen and (min-width: 700px) {
		max-width: 168px;
		font-size: calc(var(--csize) * 1.8);
	}
`;
