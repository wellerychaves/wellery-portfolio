import React from "react";
import { Container, Figure } from "./styles";

const PortifolioCard = () => {
	return (
		<Container>
			<Figure>
				<div>SOON</div>
                <h5>Lorem Ipsum</h5>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eaque ducimus nobis sint eius voluptate rem harum autem quia
					tenetur error nostrum eos numquam accusamus quos voluptas
					itaque, iste ad quasi?
				</p>
			</Figure>
			<div id="buttons">
				<button>Preview</button>
				<button>GitHub</button>
			</div>
		</Container>
	);
};

export default PortifolioCard;
