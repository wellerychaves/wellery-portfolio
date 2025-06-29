import { forwardRef, type Ref, useContext } from "react";
import { IconContext } from "react-icons";
import { ThemeContext } from "styled-components";

import Formulario from "../Formulario";
import SocialMediaButtons from "../SocialMediaButtons";
import Title from "../Title";
import { Container, Content } from "./styles";

const Contact = (_: unknown, ref: Ref<HTMLDivElement>) => {
	const theme = useContext(ThemeContext);

	return (
		<IconContext.Provider
			value={{
				color: theme.colors.primary,
				size: "20px"
			}}
		>
			<Container ref={ref}>
				<Title title="Contact-me" />
				<Content>
					<Formulario />
					<SocialMediaButtons />
				</Content>
			</Container>
		</IconContext.Provider>
	);
};

export default forwardRef(Contact);
