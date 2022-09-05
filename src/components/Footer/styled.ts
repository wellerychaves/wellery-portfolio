import styled from "styled-components";

export const Container = styled.footer`
	width: 100vw;
	height: 120px;
	border-top: 3px solid ${(props) => props.theme.colors.primary};
	background-color: ${(props) => props.theme.colors.background};
	font-family: var(--montserrat);
	display: flex;
    align-items: center;
	justify-content: space-around;
    flex-direction:column;
	span {
        font-weight: 600;
		color: ${(props) => props.theme.colors.primary};
	}
`;
