import { useContext } from "react";
import { IconContext } from "react-icons";
import { TechsContext } from "../../providers/techs/techs";
import { Container, Line } from "./styles";

const Skills = () => {
	const { techs } = useContext(TechsContext);

	return (
		<Container>
			<div id="content">
				<div id="title">
					<h2>My Skills</h2>
					<Line />
				</div>
				<ul id="skills">
					{techs.map((item, index) => (
						<li key={index} id="skills-li">
							<IconContext.Provider
								value={{
									size: "60px",
									className: "skills-icons",
								}}
							>
								{item.icon}
								<span id="skills-span" key={index}>
									{item.name}
								</span>
							</IconContext.Provider>
						</li>
					))}
				</ul>
			</div>
		</Container>
	);
};

export default Skills;
