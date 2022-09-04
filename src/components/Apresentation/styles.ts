import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 91vh;
	background-color: ${(props) => props.theme.colors.background};

	font-family: var(--montserrat);
    font-weight: 500;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;

    p {
        width: fit-content;
    }
	#mainName {
        width: fit-content;
		font-family: var(--tajawal);
        font-size: calc(var(--csize) * 3.5);
        font-weight: 500;
	}
`;
