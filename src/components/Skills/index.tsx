import React from "react";
import { Container, Line, Skill } from "./styles";
import skill from "../../utils/skills";

const Skills = () => {
	const techs = skill.techs.map((skill, index) => <p key={index}>{skill}</p>);
	const tools = skill.tools.map((skill, index) => <p key={index}>{skill}</p>);
	const studing = skill.studing.map((skill, index) => (
		<p key={index}>{skill}</p>
	));

	return (
		<Container>
			<div id="content">
				<div id="title">
					<h2>My Skills</h2>
					<Line />
				</div>
				<div id="skills">
					<h3 id="heading3">Techs</h3>
					<Skill id="techs">{techs}</Skill>
					<h3 id="heading3">Tools</h3>
					<Skill id="tools">{tools}</Skill>
					<h3 id="heading3">Studing</h3>
					<Skill id="studing">{studing}</Skill>
				</div>
			</div>
		</Container>
	);
};

export default Skills;
