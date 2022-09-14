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
		width: 60vw;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.navBar {
			@media only screen and (max-width: 700px) {
				display: none;
			}
		}

		/* burguer button */
		input[type="checkbox"] {
			-webkit-appearance: none;
			display: none;
			visibility: hidden;
		}

		.bar {
			position: relative;
			cursor: pointer;
			width: 30px;
			height: 20px;
			display: flex;
			gap: 20px;
		}

		.bar span {
			position: absolute;
			width: 25px;
			height: 4px;
			background: ${(props) => props.theme.colors.primary};
			border-radius: 100px;
			display: inline-block;
			transition: 0.3s ease;
			left: 0;
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

		input[type]:checked ~ span.top {
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
	}
`;

export const NavBar = styled.nav`
	width: 100%;
	height: 300px;
	border: 1px solid red;

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

	@media only screen and (min-width: 700px) {
		display: none;
	}
`;
