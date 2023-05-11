import Button from "../Button";
import {
	ButtonsDiv,
	Container,
	CardContent,
	DescriptionP,
	Figure,
	TechsP,
} from "./styles";

const PortifolioCard = () => {
	return (
		<Container>
			<Figure>
				<div>SOON</div>
			</Figure>
			<CardContent>
				<div className="cardContent_item">
					<h3>Title</h3>
					<DescriptionP>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eaque ducimus nobis sint eius voluptate rem harum autem
						quia tenetur error nostrum eos numquam accusamus quos
						voluptas itaque, iste ad quasi?
					</DescriptionP>
				</div>
				<div className="cardContent_item">
					<h3>Techs</h3>
					<TechsP>
						React, Typescript, React-router-dom, MUI,
						React-hook-form, Yup, Axios, NodeJS, Express, JWT,
						TypeORM, PostgreSQL, Docker
					</TechsP>
				</div>
				<ButtonsDiv>
					<Button type="button">Website</Button>
					<Button type="button">Code</Button>
				</ButtonsDiv>
			</CardContent>
		</Container>
	);
};

export default PortifolioCard;
