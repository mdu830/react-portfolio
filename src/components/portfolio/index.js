import portfolioItems from './portfolioItems'
import Project from './projects'
import styled, { keyframes } from 'styled-components'
import { slideInUp } from 'react-animations'

const Animate = styled.div`animation: 1s ${keyframes`${slideInUp}`} `;

function Portfolio() {
  console.log(portfolioItems);
  return (
    <Animate>
      <article className="media m-5 mt-5 mb-4 bord">
        <div className="media-body m-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h5 className="title mt-4 mb-4">Portfolio</h5>
              </div>
            </div>
            {portfolioItems && portfolioItems.map((i, propKey) => {
              return (
                <Project key={propKey} image={i.image} pTag1={i.pTag1} pTag2={i.pTag2} link={i.link} linkText={i.linkText} pTag3={i.pTag3} github={i.github} />
              )
            }
            )}
          </div>
        </div>
      </article>
    </Animate>


  )
};

export default Portfolio;