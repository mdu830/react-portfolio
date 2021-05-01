import small from './images/small.jpg'

function About() {
    return (
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
                    <p>I am a student in the UNC Programming Bootcamp course.</p>
                    <p>I currently design, build, fly and sell drones online. It is one of the most rewarding feelings to fly your projects after they have been completed.</p>
                    <p>Along with building drones, I also enjoy 3D Printing my autocad designs.</p>
                    <p>I also work on various other electronic devices includes: PC repair, Iphone and Android repair, and Network penetration testing.</p>
                  </div>
                </div>                
             </div>
         </div>
      </article>
    );
  }
  
  export default About;