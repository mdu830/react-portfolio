import styled, { keyframes } from 'styled-components'
import { flipInX } from 'react-animations'

const Animate = styled.div`animation: 1s ${keyframes`${flipInX}`} `;

function Contact() {
  return (
    <Animate>
      <article className="media m-5 mt-5 mb-4 bord">
        <div className="media-body m-1">
          <div className="container mr-n3">
            <div className="row">
              <div className="col-9">
                <h5 className="title ml-2 mt-5 mb-4">Contact</h5>
              </div>
              <div className="col-3">
                <a href="https://github.com/mdu830"><img className="ico mt-3" alt="Github" src={`${process.env.PUBLIC_URL}/assets/icons/github.png`}></img></a>
                <a href="https://www.linkedin.com/in/mitchell-duncan-a466501bb"><img className="ico mt-3" alt="LinkedIn" src={`${process.env.PUBLIC_URL}/assets/icons/linkedin.png`}></img></a>
                <a href="mailto:mdu830@yahoo.com"><img className="ico mt-3" alt="Email" src={`${process.env.PUBLIC_URL}/assets/icons/email.png`}></img></a>
              </div>
            </div>
            <div className="row">
              <div className="col ml-5">
                <p className="ml-5">If you have any questions or would like to get in contact with me here is my contact information: </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h6 className="m-5">Email: <a className="bsLink" href="mailto:mdu830@yahoo.com">mdu830@yahoo.com</a></h6>
              </div>
              <div className="col-6">
                <h6 className="m-5">Phone: <a href="Phone Number" className="bsLink">(252) 207-7476</a></h6>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Animate>

  );
}

export default Contact;
