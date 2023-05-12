import { useState } from "react";

import { DesktopHeader, MobileHeader } from "./styles";

import Logo from "../Logo";
import { HeaderProps } from "../../@types/types";
import Burguer from "../Burguer";

interface ElementWithBoundingRect extends React.RefObject<HTMLElement> {
	getBoundingClientRect(): DOMRect;
}

const Header: React.FC<HeaderProps> = ({
	aboutRef,
	techsRef,
	portfolioRef,
	contactRef,
}) => {
	const [isChecked, setIsChecked] = useState(false);
	const handleClick = () => {
		setIsChecked(!isChecked);
	};

	/* scrollTo functions */
	const adiantaVida = (ref: React.RefObject<HTMLElement>) => {
		let windowWidth = 0;
		window.innerWidth <= 768 ? (windowWidth = 60) : (windowWidth = 80);

		if (ref.current !== null) {
			return (
				ref.current.getBoundingClientRect().top +
				window.pageYOffset -
				windowWidth
			);
		}
	};

	const scrollToSection = (section: string) => {
		if (section === "about") {
			window.scrollTo({ top: adiantaVida(aboutRef), behavior: "smooth" });
		} else if (section === "techs") {
			window.scrollTo({ top: adiantaVida(techsRef), behavior: "smooth" });
		} else if (section === "portifolio") {
			window.scrollTo({
				top: adiantaVida(portfolioRef),
				behavior: "smooth",
			});
		} else if (section === "contact") {
			window.scrollTo({
				top: adiantaVida(contactRef),
				behavior: "smooth",
			});
		}
		handleClick();
	};

	return (
		<>
			<MobileHeader>
				<div className="content">
					<Logo />
					<Burguer prop={handleClick} />
				</div>
				<span className="border" />

				{isChecked ? (
					<nav className="navBar">
						<ul>
							<li className="navBar_li">
								<button
									className="buttonReset"
									type="button"
									onClick={() => scrollToSection("about")}
								>
									About Me
								</button>
							</li>
							<li className="navBar_li">
								<button
									className="buttonReset"
									type="button"
									onClick={() => scrollToSection("techs")}
								>
									Techs
								</button>
							</li>
							<li className="navBar_li">
								<button
									className="buttonReset"
									type="button"
									onClick={() =>
										scrollToSection("portifolio")
									}
								>
									Portifolio
								</button>
							</li>
							<li className="navBar_li">
								<button
									className="buttonReset"
									type="button"
									onClick={() => scrollToSection("contact")}
								>
									Contact-me
								</button>
							</li>
						</ul>
					</nav>
				) : null}
			</MobileHeader>

			<DesktopHeader>
				<div className="content">
					<Logo />
					<nav className="navBar">
						<ul className="navBar_ul">
							<li className="navBar_li">
								<button
									type="button"
									className="buttonReset"
									onClick={() => scrollToSection("about")}
								>
									About Me
								</button>
							</li>
							<li>
								<button
									type="button"
									className="buttonReset"
									onClick={() => scrollToSection("techs")}
								>
									Techs
								</button>
							</li>
							<li>
								<button
									type="button"
									className="buttonReset"
									onClick={() =>
										scrollToSection("portifolio")
									}
								>
									Portifolio
								</button>
							</li>
							<li>
								<button
									type="button"
									className="buttonReset"
									onClick={() => scrollToSection("contact")}
								>
									Contact-me
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</DesktopHeader>
		</>
	);
};

export default Header;
