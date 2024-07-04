import styled from "styled-components";

export const MobileHeader = styled.header`
	position: fixed;
	z-index: 10;

	width: 100vw;
	height: fit-content;

	display: flex;
	align-items: center;
	flex-direction: column;

	user-select: none;

	background-color: ${(props) => props?.theme?.colors?.mica};

	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(7px);
	box-shadow: 0 8px 32px -2px rgba(0, 0, 0, 1);

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 90vw;
		height: 4rem;
	}

	.border {
		width: 100vw;
		height: 2px;
		background-color: ${(props) => props?.theme?.colors?.primary};
	}

	.navBar {
		width: 100vw;
		background-color: ${(props) => props?.theme?.colors?.mica};
	}

	.navBar_li {
		display: flex;
		align-items: center;
		padding: 16px;
		max-height: 48px;
	}

	.buttonReset {
		width: max-content;

		border: none;
		margin: none;
		padding: none;

		user-select: none;
		font-size: 1rem;

		background: none;
		font-family: var(--montserrat);
	}

	@media only screen and (min-width: 769px) {
		display: none;
	}
`;

export const DesktopHeader = styled.header`
	top: 0;
	position: fixed;

	width: 100vw;
	height: 5rem;

	margin: 0 auto;
	padding: 10px 10%;

	user-select: none;

	display: flex;
	align-items: center;
	justify-content: center;

	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(7px);
	box-shadow: 0 8px 32px -2px rgba(0, 0, 0, 1);

	background-color: ${(props) => props?.theme?.colors?.mica};
	border-bottom: 2px solid ${(props) => props?.theme?.colors?.primary};

	.content {
		width: 70rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.navBar {
		width: max-content;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: var(--montserrat);
	}

	.navBar_ul {
		width: fit-content;

		padding: 0px 20px;
		margin: 0px 20px;

		list-style-type: none;

		gap: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.navBar_li {
		all: none;
	}

	.buttonReset {
		width: max-content;

		border: none;
		margin: none;
		padding: none;

		user-select: none;
		font-size: 1.1rem;

		background: none;
		font-family: var(--montserrat);
	}

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;
