import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webappsecurity from "../../Assets/Projects/websecurity.png";
import weatherapp from "../../Assets/Projects/weatherapp.jpg";
import poll from "../../Assets/Projects/poll.png";
import musicapp from "../../Assets/Projects/musicapp.png";
import taskhive from "../../Assets/Projects/taskhive.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poll}
              isBlog={false}
              title="Polls_App"
              description="This is a polling app, using python,Django and google charts."
              ghLink="https://github.com/SHREYK213/Django_Polls_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskhive}
              isBlog={false}
              title="TaskHive"
              description="This is a task app built using the MERN stack (MongoDB, Express.js, React, Node.js)."
              ghLink="https://github.com/SHREYK213/MERN-stack_TaskHive"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Wether_Website"
              description="Online weather website using API"
              ghLink="https://github.com/SHREYK213/Wether_Website"
              demoLink="https://weather-application-3pfw.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskhive}
              isBlog={false}
              title="TaskApp backend"
              description="This is a more complex backend, with much more features implemented into it."
              ghLink="https://github.com/SHREYK213/NODE.js_TaskApp-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicapp}
              isBlog={false}
              title="MusicApp"
              description="This is a project made utilizing DotNetCore and EntityFramework to build RestAPI's where the audio is stored in azure and accessed though api."
              ghLink="https://github.com/SHREYK213/MusicApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webappsecurity}
              isBlog={false}
              title="WebApp_Security"
              description="This is a project made using ASP.NET CORE Identity and that aims on WebSecurity by taking the user details and password and providing the user with otp to login."
              ghLink="https://github.com/SHREYK213/WebApp_Security"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
