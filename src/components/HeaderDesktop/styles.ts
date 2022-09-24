import styled from "styled-components";

export const Container = styled.header`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 60px;
	background-color: ${(props: any) => props.theme.colors.background2};
	border-bottom: 2px solid ${(props: any) => props.theme.colors.primary};
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	user-select: none;

	#content {
		margin: 0 auto;
		width: 80vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#navBar {
		width: 30rem;
		display: flex;
		justify-content: space-between;
		font-family: var(--montserrat);
	}


	@media only screen and (max-width: 750px) {
		display: none;
	}
`;
