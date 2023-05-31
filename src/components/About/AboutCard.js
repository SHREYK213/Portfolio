import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Shreyas K Poojary</span> from <span className="purple">Karnataka, India</span>.<br />
            I have completed a Bachelor of Engineering (B.E) in Computer Science and Engineering.<br />
            Additionally, I am currently working as a software developer at Hexmos and have previously worked as an intern at Techshreshta, and Slides 365.<br />
            <br />
            Apart from coding, there are other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Fiction and Non-fiction Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "YOLO!"{" "}
          </p>
          <footer className="blockquote-footer">SHREYAS</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
