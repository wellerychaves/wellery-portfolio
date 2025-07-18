import { forwardRef, type Ref } from "react";

import PortifolioCard from "../PortifolioCard";
import Title from "../Title";
import { Container } from "./styles";

const Portfolio = (_: unknown, ref: Ref<HTMLDivElement>) => {
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
