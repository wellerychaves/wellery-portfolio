import { StyledBurguer } from "./styles";

const Burguer = ({ prop }: { prop: () => void }) => {
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
