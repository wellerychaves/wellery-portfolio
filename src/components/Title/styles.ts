import styled from "styled-components";

export const Container = styled.div`
	width: 90%;
	max-width: 1120px;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin: 2rem auto;

	@media screen and (min-width: 745px) {
		margin-bottom: 4rem;
		align-items: start;
	}
`;

export const Span = styled.span`
	width: 6rem;
	height: 3px;
	align-items: baseline;
	border-radius: 3px;
	background-color: ${(props) => props?.theme.colors.primary};

	@media screen and (min-width: 745px) {
		width: 9rem;
	}
`;
