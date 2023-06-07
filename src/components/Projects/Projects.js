import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webappsecurity from "../../Assets/Projects/websecurity.png";
import weatherapp from "../../Assets/Projects/weatherapp.jpg";
import poll from "../../Assets/Projects/poll.png";
import musicapp from "../../Assets/Projects/musicapp.png";
import taskhive from "../../Assets/Projects/taskhive.png";
import portfolio from '../../Assets/Projects/portfolio.svg'
import destuk from '../../Assets/Projects/destuk.jpg'
import taxi from '../../Assets/Projects/taxi.png'

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
              imgPath={portfolio}
              isBlog={false}
              title="Personal Website"
              description="This is a personal portfolio made using React.js. This is the present project you are viewing"
              ghLink="https://github.com/SHREYK213/Portfolio#readme"
              demoLink="https://shreyas-portfolio.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poll}
              isBlog={false}
              title="Polls_App"
              description="This is a polling app, using python,Django and google charts. This allows users to create, update, vote and filter"
              ghLink="https://github.com/SHREYK213/Django_Polls_App#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskhive}
              isBlog={false}
              title="TaskHive"
              description="This is a task app built using the MERN stack (MongoDB, Express.js, React, Node.js). This allows users to create update and delete tasks and accounts"
              ghLink="https://github.com/SHREYK213/MERN-stack_TaskHive#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Wether_Website"
              description="Online weather website using API and Node.js, this allows users to find the details of the weather of that location"
              ghLink="https://github.com/SHREYK213/Wether_Website#readme"
              demoLink="https://weather-application-3pfw.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskhive}
              isBlog={false}
              title="TaskApp backend"
              description="This is a more complex backend, with much more features implemented into it. Than the currently available app"
              ghLink="https://github.com/SHREYK213/NODE.js_TaskApp-backend#readme"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={destuk}
              isBlog={false}
              title="Destination Unknown"
              description="This is a simple HTML5 and CSS3 project with basic javascript. With completely functioning buttons, navbar, and a responsive design."
              ghLink="https://github.com/SHREYK213/Destination_Unknown#readme"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxi}
              isBlog={false}
              title="TaxiSite"
              description="This is a responsive Taxi Booking site that is built using HTML5, CSS3, Bootstrap and Javascript"
              ghLink="https://github.com/SHREYK213/TaxiSite#readme"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
