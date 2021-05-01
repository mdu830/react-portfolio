import portfolioItems from './portfolioItems'
import Project from './projects'

function Portfolio() {
  return (
    <article className="media m-5 mt-5 mb-4 bord">
      <div className="media-body m-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h5 className="title mt-4 mb-4">Portfolio</h5>
            </div>
          </div>
          {portfolioItems && portfolioItems.map((i) => 
          <Project image={i.image}/>
          )}
        </div>
      </div>
    </article>

    // <div className="row">
    //   <div className="col-12">
    //     <div className="row bord mb-2">
    //       <div className="col-lg">
    //       {portfolioItems && portfolioItems.map((i) => 
    //       <Project portfolioItems={i.portfolioItems}/>
    //       )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )};

export default Portfolio;

// pTag1={i.pTag1} pTag2={i.pTag2} link={i.link} pTag3={i.pTag3} github={i.github}