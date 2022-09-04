import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 60px;
	background-color: ${(props) => props.theme.colors.background2};
	border-bottom: 2px solid ${(props) => props.theme.colors.primary};

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;

	#menu {
		all: unset;
		height: fit-content;
		width: fit-content;
		font-size: calc(var(--csize) * 2);
	}
`;
