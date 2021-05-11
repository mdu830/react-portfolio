import small from './images/small.jpg'
import styled, { keyframes } from 'styled-components'
import { rotateInDownRight } from 'react-animations'

const Animate = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`} `;

function About() {
  return (
    <Animate>
      <article className="media m-5 mt-5 mb-4 bord">
        <div className="media-body m-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h5 className="title mt-4 mb-4">About Me</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <img src={small} alt="Mitchell" title="Mitchell" className="img-fluid img-thumbnail h-auto"></img>
              </div>

              <div className="col-md-8 mb-5">
                <h3>Full Stack Web Developer</h3>
                <p>
                  Full stack web developer, proficient in front-end and back-end web development to
                  provide an improved end-user experience with web-application and other software
                  platforms. Earned a certificate in Full Stack Web Development from University of North
                  Carolina, Chapel Hill Programming Bootcamp. Innovative problem-solver who is
                  passionate about developing apps focused on quality end-user experience, along with,
                  more efficient application delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Animate>

  );
}

export default About;