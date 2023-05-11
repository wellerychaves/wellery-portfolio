import { forwardRef, Ref } from "react";

import { IconContext } from "react-icons";

import Formulario from "../Formulario";
import { Container, Content } from "./styles";
import SocialMediaButtons from "../SocialMediaButtons";
import Title from "../Title";

const Contact = (_: any, ref: Ref<HTMLDivElement>) => {
	return (
		<IconContext.Provider
			value={{
				color: `${(props: any) => props.theme.colors.primary}`,
				size: "20px",
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
