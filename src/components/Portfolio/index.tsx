import { forwardRef, Ref } from "react";

import PortifolioCard from "../PortifolioCard";
import { Container } from "./styles";
import Title from "../Title";

const Portfolio = (_: any, ref: Ref<HTMLDivElement>) => {
	return (
		<Container ref={ref}>
			<Title title="Main Projects" />
			<div className="cards">
				<PortifolioCard />
				<PortifolioCard />
				<PortifolioCard />
			</div>
		</Container>
	);
};

export default forwardRef(Portfolio);
