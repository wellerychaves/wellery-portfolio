import styled from "styled-components";

export const MobileHeader = styled.header`
	position: fixed;
	top: 0;
	left: center;
	width: 100vw;
	height: 60px;
	background-color: ${(props: any) => props.theme.colors.background2};
	border-bottom: 2px solid ${(props: any) => props.theme.colors.primary};
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 10%;
	user-select: none;

	/* burguer button */
	input[type="checkbox"] {
		-webkit-appearance: none;
		display: none;
		visibility: hidden;
		user-select: none;
	}

	.bar {
		position: relative;
		width: 30px;
		height: 20px;
		gap: 20px;
		display: flex;
		cursor: pointer;
	}

	.bar span {
		position: absolute;
		left: 0;
		width: 25px;
		height: 4px;
		border-radius: 100px;
		display: inline-block;
		transition: 0.3s ease;
		background: ${(props) => props.theme.colors.primary};
	}

	.bar span.top {
		top: 0;
	}

	.bar span.middle {
		top: 8px;
	}

	.bar span.bottom {
		bottom: 0;
	}

	/* 	input[type]:checked ~ span.top {
		transform: rotate(46deg);
		transform-origin: top left;
		width: 25px;
		left: 4px;
	}

	input[type]:checked ~ span.bottom {
		transform: rotate(-45deg);
		transform-origin: top left;
		width: 26px;
		bottom: -2px;
		box-shadow: 0 0 10px #495057;
	}

	input[type]:checked ~ span.middle {
		transform: translateX(-20px);
		opacity: 0;
	}
 	*/
	@media only screen and (min-width: 751px) {
		display: none;
	}

	#navBar {
		width: 100%;
		height: 300px;
		position: absolute;
		left: 0;
		top: 60px;
		font-weight: 600;
		text-decoration: none;
		font-family: var(--montserrat);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: #000000ee;
		padding-left: 20px;

		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(7px);
		box-shadow: 0 8px 32px -2px rgba(0, 0, 0, 1);

		a {
			user-select: none;
		}

		@media only screen and (min-width: 751px) {
			display: none;
		}
	}
`;

export const DesktopHeader = styled.header`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 60px;
	background-color: ${(props: any) => props.theme.colors.background2};
	border-bottom: 2px solid ${(props: any) => props.theme.colors.primary};
	margin: 0 auto;
	padding: 10px 10%;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: space-between;

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
