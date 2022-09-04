import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 170vh;
	background-color: ${(props) => props.theme.colors.background2};
	padding-left: 20px;
	padding-top: 50px;
	#line {
		background-color: ${(props) => props.theme.colors.primary};
		width: 94px;
		height: 3px;
		border-radius: 3px;
	}
`;

export const ImageBox = styled.figure`
	width: 280px;
	height: 339.23px;
	background: ${(props) => props.theme.colors.background};
	box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.4);
	border-radius: 4px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	#image {
		border-radius: 4px;
		object-fit: cover;
		max-width: 95%;
		height: 95.26%;
	}
`;

export const InfoBox = styled.div`
    margin-top: 26px;
    width: 90%;
    height: 300px;
	border-radius: 5px;
	border: 2px solid ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem 1rem;
    font-family: var(--tajawal);

    span {
        font-weight: 700;
    }
`;
