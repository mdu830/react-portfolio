import Header from '../header/header';
import styled, { keyframes } from 'styled-components'
import { fadeInDown, fadeIn } from 'react-animations'

const Animate = styled.div`animation: 1s ${keyframes`${fadeInDown}`} `;
const Animate2 = styled.div`animation: 3.5s ${keyframes`${fadeIn}`} `;


function Contact() {
  return (
    <div>
      <Header />
      <Animate2>
        <article className="row pageTitle justify-content-center">
          <h5 className="title mt-5 mb-n1">Contact</h5>
        </article>
      </Animate2>
      <Animate>
        <article className="media m-5 mt-5 mb-4 bord box">
          <div className="media-body m-1">
            <div className="container">
              <div className="row justify-content-center mt-5">
                <h3 className="text-center ml-4 mr-4 cardTitle">If you have any questions or would like to get in contact with me here is my contact information: </h3>

              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-4-md">
                  <p className="m-4">Email: <a className="bsLink" href="mailto:mdu830@yahoo.com">mdu830@yahoo.com</a></p>
                </div>
                <div className="col-4-md">
                  <a href="https://github.com/mdu830"><img className="ico mt-1 ml-3 mr-3" alt="Github" src={`${process.env.PUBLIC_URL}/assets/icons/github.png`}></img></a>
                  <a href="https://www.linkedin.com/in/mitchell-duncan-a466501bb"><img className="ico mt-1 ml-3 mr-3" alt="LinkedIn" src={`${process.env.PUBLIC_URL}/assets/icons/linkedin.png`}></img></a>
                  <a href="mailto:mdu830@yahoo.com"><img className="ico mt-1 ml-3 mr-3" alt="Email" src={`${process.env.PUBLIC_URL}/assets/icons/email.png`}></img></a>
                </div>
                <div className="col-4-md">
                  <p className="m-4">Phone: <a href="Phone Number" className="bsLink">(252) 207-7476</a></p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Animate>
    </div>
  );
}

export default Contact;
