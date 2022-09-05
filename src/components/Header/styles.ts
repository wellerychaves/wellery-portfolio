import styled from "styled-components";

export const Container = styled.header`
	width: 100vw;
	height: 60px;
	background-color: ${(props: any) => props.theme.colors.background2};
	border-bottom: 2px solid ${(props: any) => props.theme.colors.primary};

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	user-select: none;

	#content {
		margin: 0 auto;
		width: 60vw;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.navBar {
			all: unset;
			width: 450px;
			font-weight: 600;
			text-decoration: none;
			display: flex;
			justify-content: space-between;
			font-family: var(--montserrat);

			@media only screen and (max-width: 700px) {
				display: none;
			}
		}
	}
`;
