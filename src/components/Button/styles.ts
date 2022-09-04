import styled from "styled-components";

export const Container = styled.button`
	background-color: #ffffff00;
	padding: 0.8rem 1rem;
	border: 2px solid ${(props) => props.theme.colors.primary};
	font-size: calc(var(--csize) * 1.6);
	margin-top: 16px;
	border-radius: 5px;
    transition: 100ms;

	:hover {
		background-color: ${(props) => props.theme.colors.primary};
        font-weight: 500;
	}
`;
