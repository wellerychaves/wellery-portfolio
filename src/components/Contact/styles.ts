import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;

	display: flex;
	flex-direction: column;
`;

export const Content = styled.div`
	width: 90vw;
	max-width: 56.5rem;
	height: 62vh;
	padding-bottom: 3rem;
	margin: 0 auto;

	gap: 32px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;

	@media only screen and (min-width: 756px) {
		flex-direction: row-reverse;
	}
`;
