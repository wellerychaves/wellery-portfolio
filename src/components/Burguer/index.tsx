import { StyledBurguer } from "./styles";

const Burguer = ({ prop }: any) => {
	console.log();
	return (
		<StyledBurguer onClick={prop}>
			<div />
			<div />
			<div />
		</StyledBurguer>
	);
};

export default Burguer;
