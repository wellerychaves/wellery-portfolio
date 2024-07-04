import { forwardRef, Ref } from "react";

import { IconContext } from "react-icons";

import Formulario from "../Formulario";
import SocialMediaButtons from "../SocialMediaButtons";
import Title from "../Title";
import { Container, Content } from "./styles";

const Contact = (_: any, ref: Ref<HTMLDivElement>) => {
	return (
		<IconContext.Provider
			value={{
				color: `${(props: any) => props.theme.colors.primary}`,
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
