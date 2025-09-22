import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p1.png";
import projImg2 from "../assets/img/p2.jpeg";
import projImg3 from "../assets/img/p3.jpeg";
import projImg4 from "../assets/img/p4.jpg";
import projImg5 from "../assets/img/p5.jpg";
import projImg6 from "../assets/img/p6.jpg";
import colorSharp2 from "../assets/img/s2.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Online Land Sales System",
      description: "User Management System (PHP)",
      imgUrl: projImg1,
    },
    {
      title: "Online Bidding System",
      description: "User Management System (Java))",
      imgUrl: projImg2,
    },
    {
      title: "Vehicle Repair Management System(MERN)",
      description: "Issues Management System",
      imgUrl: projImg3,
    },
    {
      title: "Maths Quiz Game",
      description: "Kotlin",
      imgUrl: projImg4,
    },
    {
      title: "Task App",
      description: "Kotlin, Android Studio",
      imgUrl: projImg5,
    },
    {
      title: "Medicare",
      description: "Flutter, Shareable medical profile",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I’ve worked on a variety of projects that showcase my skills in software development, including mobile apps, management systems, and interactive solutions. These projects reflect my ability to create user friendly, functional software that addresses real world challenges.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
