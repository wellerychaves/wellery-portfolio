import { useContext, forwardRef, Ref } from "react";
import { TechsContext } from "../../providers/techs";
import { Container } from "./styles";
import Title from "../Title";

const Skills = (_: any, ref: Ref<HTMLDivElement>) => {
	const { programmingLanguages, backEndDev, frontEndDev, softwareAndTools } =
		useContext(TechsContext);

	return (
		<Container ref={ref}>
			<Title title="My Skills" />
			<div className="skillsDiv">
				<div className="skillType">
					<h3 className="skillType-title">Front End development</h3>
					<ul className="skillType-list">
						{frontEndDev.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className="skillType">
					<h3 className="skillType-title">Back End development</h3>
					<ul className="skillType-list">
						{backEndDev.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className="skillType">
					<h3 className="skillType-title">Software & Tools</h3>
					<ul className="skillType-list">
						{softwareAndTools.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className="skillType">
					<h3 className="skillType-title">Programming languages</h3>
					<ul className="skillType-list">
						{programmingLanguages.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</Container>
	);
};

export default forwardRef(Skills);
