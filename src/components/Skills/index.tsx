import { forwardRef, type Ref, useContext } from "react";
import { TechsContext } from "../../providers/techs";
import Title from "../Title";
import { Container } from "./styles";

const Skills = (_: unknown, ref: Ref<HTMLDivElement>) => {
	const { frontEnd, backEnd, database, versionControl, tests, devops, learning } = useContext(TechsContext);

	return (
		<Container ref={ref}>
			<Title title="My Stacks" />
			<div className="skillsDiv">
				<div className="skillType">
					<h3 className="skillType-title">Front End</h3>
					<ul className="skillType-list">
						{frontEnd.map((item, index) => (
							<li key={index.toString()}>
								{item}
								{index < frontEnd.length - 1 ? "," : ";"}
							</li>
						))}
					</ul>
				</div>
				<div className="skillType">
					<h3 className="skillType-title">Back End</h3>
					<ul className="skillType-list">
						{backEnd.map((item, index) => (
							<li key={index.toString()}>
								{item}
								{index < backEnd.length - 1 ? "," : ";"}
							</li>
						))}
					</ul>
				</div>
				<div className="skillType">
					<h3 className="skillType-title">Database</h3>
					<ul className="skillType-list">
						{database.map((item, index) => (
							<li key={index.toString()}>
								{item}
								{index < database.length - 1 ? "," : ";"}
							</li>
						))}
					</ul>
				</div>
				<div className="skillType">
					<h3 className="skillType-title">Version Control</h3>
					<ul className="skillType-list">
						{versionControl.map((item, index) => (
							<li key={index.toString()}>
								{item}
								{index < versionControl.length - 1 ? "," : ";"}
							</li>
						))}
					</ul>
				</div>
				<div className="skillType">
					<h3 className="skillType-title">Tests</h3>
					<ul className="skillType-list">
						{tests.map((item, index) => (
							<li key={index.toString()}>
								{item}
								{index < tests.length - 1 ? "," : ";"}
							</li>
						))}
					</ul>
				</div>
				<div className="skillType">
					<h3 className="skillType-title">DevOps & Deploy</h3>
					<ul className="skillType-list">
						{devops.map((item, index) => (
							<li key={index.toString()}>
								{item}
								{index < devops.length - 1 ? "," : ";"}
							</li>
						))}
					</ul>
				</div>
				<div className="skillType">
					<h3 className="skillType-title">Learning</h3>
					<ul className="skillType-list">
						{learning.map((item, index) => (
							<li key={index.toString()}>
								{item}
								{index < learning.length - 1 ? "," : ";"}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Container>
	);
};

export default forwardRef(Skills);
