
function Contact() {
  return (
    <article className="media m-5 mt-5 mb-4 bord">
        <div className="media-body m-1">
          <div className="container">
              <div className="row">
                <div className="col-9">
                  <h5 className="title mt-4 mb-4">Contact</h5>
                </div>
                <div className="col-3">
                  <a href="https://github.com/mdu830"><img className="ico mt-3" alt="Github" src="assets/icons/github.png"></img></a>
                  <a href="https://www.linkedin.com/in/mitchell-duncan-a466501bb"><img className="ico mt-3" alt="LinkedIn" src="assets/icons/linkedin.png"></img></a>
                  <a href="mailto:mdu830@yahoo.com"><img className="ico mt-3" alt="Email" src="assets/icons/email.png"></img></a>
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
  );
}

  export default Contact;
  