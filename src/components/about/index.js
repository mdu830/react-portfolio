import Header from '../header/header';
import small from './images/small.jpg'
import styled, { keyframes } from 'styled-components'
import { fadeInDown, fadeIn } from 'react-animations'
// icons
import css from './techIcons/css3.svg'
import html from './techIcons/html5-original.svg'
import javascript from './techIcons/javascript.svg'
import jquery from './techIcons/jquery-original-wordmark.svg'
import node from './techIcons/nodejs-original-wordmark.svg'
import npm from './techIcons/npm-original-wordmark.svg'
import mysql from './techIcons/mysql-plain-wordmark.svg'
import sequelize from './techIcons/sequelize-original-wordmark.svg'
import express from './techIcons/express-original.svg'
import reactSvg from './techIcons/react-original-wordmark.svg'
import bootstrapSvg from './techIcons/bootstrap-plain-wordmark.svg'
import mongodbSvg from './techIcons/mongodb-original-wordmark.svg'
import yarnSvg from './techIcons/yarn-original-wordmark.svg'
import vscode from './techIcons/vscode-original-wordmark.svg'
import heroku from './techIcons/heroku-original-wordmark.svg'
import git from './techIcons/git-original-wordmark.svg'
import github from './techIcons/github-original-wordmark.svg'
import gitlab from './techIcons/gitlab-plain-wordmark.svg'
import chrome from './techIcons/chrome-original-wordmark.svg'
import ubuntu from './techIcons/ubuntu-plain-wordmark.svg'
import raspberryPi from './techIcons/raspberrypi-original-wordmark.svg'
import arduino from './techIcons/arduino-original-wordmark.svg'
import ssh from './techIcons/ssh-original-wordmark.svg'

const Animate1 = styled.div`animation: 1s ${keyframes`${fadeInDown}`} `;
const Animate2 = styled.div`animation: 1.3s ${keyframes`${fadeInDown}`} `;

const Animate3 = styled.div`animation: 3.5s ${keyframes`${fadeIn}`} `;



function About() {
  return (
    <div className="justify-content-center ml-4 mr-4">
      <Header />
      <Animate3>
        <article className="row pageTitle justify-content-center">
          <h5 className="title mt-5 mb-n1">About Me</h5>
        </article>
      </Animate3>
      <Animate1>
        <article className="media mt-5 mb-4 bord box">
          <div className="media-body m-1">
            <div className="container mt-5">

              <div className="row">
                <div className="col-md-4 mt-2 mb-3">
                  <img src={small} alt="Mitchell" title="Mitchell" className="img-fluid img-thumbnail h-auto"></img>
                </div>

                <div className="col-md-8 mb-5">
                  <h3 className="mb-5 cardTitle">Full Stack Web Developer</h3>
                  <p>
                    Full stack web developer, proficient in front-end and back-end web development to
                    provide an improved end-user experience with web-application and other software
                    platforms. Earned a certificate in Full Stack Web Development with Honors (4.0 GPA) from University of North
                    Carolina, Chapel Hill Programming Bootcamp. Innovative problem-solver who is
                    passionate about developing apps focused on quality end-user experience, along with,
                    more efficient application delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Animate1>

      <Animate2>
        <article className="media mt-5 mb-4 bord box">
          <div className="media-body m-1">
            <div className="container">

              <div className="row m-4 p-4 justify-content-center">
                <h3 className="mb-5 cardTitle">Skills and Technologies</h3>

                <div className="row pl-2 pr-2 pb-2 justify-content-center">
                  <img className="techIcon m-1" alt="HTML" src={html}></img>
                  <img className="techIcon m-1" alt="CSS" src={css}></img>
                  <img className="techIcon m-1" alt="Javascript" src={javascript}></img>
                  <img className="techIcon m-1" alt="jQuery" src={jquery}></img>
                  <img className="techIcon m-1" alt="Node.js" src={node}></img>
                  <img className="techIcon m-1" alt="Node Package Manager" src={npm}></img>
                  <img className="techIcon m-1" alt="mySQL" src={mysql}></img>
                  <img className="techIcon m-1" alt="Sequelize" src={sequelize}></img>
                  <img className="techIcon m-1" alt="Express" src={express}></img>
                  <img className="techIcon m-1" alt="React" src={reactSvg}></img>
                  <img className="techIcon m-1" alt="Bootstrap" src={bootstrapSvg}></img>
                  <img className="techIcon m-1" alt="MongoDB" src={mongodbSvg}></img>
                  <img className="techIcon m-1" alt="Yarn" src={yarnSvg}></img>
                  <img className="techIcon m-1" alt="Visual Studio Code" src={vscode}></img>
                  <img className="techIcon m-1" alt="Heroku" src={heroku}></img>
                  <img className="techIcon m-1" alt="git" src={git}></img>
                  <img className="techIcon m-1" alt="Github" src={github}></img>
                  <img className="techIcon m-1" alt="Gitlab" src={gitlab}></img>
                  <img className="techIcon m-1" alt="Google Chrome" src={chrome}></img>
                  <img className="techIcon m-1" alt="Ubuntu Linux" src={ubuntu}></img>
                  <img className="techIcon m-1" alt="Raspberry Pi" src={raspberryPi}></img>
                  <img className="techIcon m-1" alt="Arduino" src={arduino}></img>
                  <img className="techIcon m-1" alt="SSH" src={ssh}></img>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Animate2>
      <Animate2>
        <article className="media mt-5 mb-5 bord box">
          <div className="media-body m-1">
            <div className="container mt-5">

              <div className="row m-4 justify-content-center">
                <h3 className="mb-4 cardTitle">Other Skills and interests</h3>

                <p className="p-3">
                  In my free time, I enjoy designing, building and flying autopilot drones.
                  I design the new parts and covers with autocad, then
                  create the designs with my 3D Printers. I have had plenty of experience with FDM (fused deposition modeling)
                  and SLA (Stereolithography) 3D printing.
                </p>
                <p className="p-3">
                  I've also been a avid guitar player for the last 14 years I love playing bluesy music like Jimi Hendrix, Cream, Stevie Ray Vahn, etc.
                  I've played in a few different groups over the years, playing shows, and creating new music.
                </p>
              </div>
            </div>
          </div>
        </article>
      </Animate2>
    </div>

  );
}

export default About;