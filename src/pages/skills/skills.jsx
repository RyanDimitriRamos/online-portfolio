import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Image from 'react-bootstrap/Image';
import { skills } from "./skills-data";
import './skills.css';


const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">Tech Skills</h1>
      <div className="col d-flex justify-content-center">
        <CardColumns>
          {/* Frontend */}
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              {/* Frontend */}
              <Card.Title className="text-center  card-title">Frontend</Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.frontend.map((skill, index) => (
                  <span className="p-2" key={index}>
                    <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="focus mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">Backend</Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.backend.map((skill, index) => (
                  <span className="p-2" key={index}>
                    <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Database */}
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">Database</Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.databases.map((skill, index) => (
                  <span className="p-2" key={index}>
                    <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Programming Languages */}
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                {skills.programmingLanguages.map((skill, index) => (
                  <span className="p-2" key={index}>
                    <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                      <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                    </a>
                  </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Version Control */}
          <Card className="focus mt-2 mb-2">
            <Card.Body>
              <Card.Title className="text-center  card-title">Version Control</Card.Title>
              <hr />
              <Card.Text className="card-text d-flex justify-content-start flex-column">
                <span className="p-2">
                  <a className="text-dark text-decoration-none" href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                    <Image src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {skills.versionControl[0].skillName}
                  </a>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    </div>
  );
};
 
export default Skills;