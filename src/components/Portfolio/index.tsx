import PortifolioCard from "../PortifolioCard";
import { Container, Line } from "./styles";

const Portfolio = () => {
	return (
		<Container id="portfolio">
			<h2>My Portifolio</h2>
			<Line />
			<div id="cards">
				<PortifolioCard></PortifolioCard>
				<PortifolioCard></PortifolioCard>
				<PortifolioCard></PortifolioCard>
			</div>
		</Container>
	);
};

export default Portfolio;
