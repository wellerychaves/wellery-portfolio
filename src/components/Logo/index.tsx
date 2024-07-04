import KyotoFlag from "../../assets/images/Kyoto_flag.svg";
import { Button } from "./styles";

const Logo = () => {
	const handleLogoClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<>
			<Button onClick={handleLogoClick} type="button">
				<img className="logo" src={KyotoFlag} alt="PageLogo" />
			</Button>
		</>
	);
};

export default Logo;
