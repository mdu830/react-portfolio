import Header from '../header/header';
import portfolioItems from './portfolioItems'
import Project from './projects'
import styled, { keyframes } from 'styled-components'
import { zoomIn, fadeIn } from 'react-animations'

const Animate = styled.div`animation: 1s ${keyframes`${zoomIn}`} `;
const Animate2 = styled.div`animation: 3.5s ${keyframes`${fadeIn}`} `;




function Portfolio() {

  console.log(portfolioItems);
  return (
    <div className="justify-content-center">
      <Header />
      <Animate2>
        <article className="row pageTitle justify-content-center">
          <h5 className="title mt-5 mb-4">Portfolio</h5>
        </article>
      </Animate2>

      {portfolioItems && portfolioItems.map((i, propKey) => {
        return (
          <Animate><Project key={propKey} feat={i.feat} title={i.title} image={i.image} pTag1={i.pTag1} pTag2={i.pTag2} link={i.link} linkText={i.linkText} pTag3={i.pTag3} github={i.github} /></Animate>
        )
      }
      )}


    </div>
  )
};

export default Portfolio;