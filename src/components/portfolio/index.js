import Header from '../header/header';
import portfolioItems from './portfolioItems'
import Project from './projects'
import styled, { keyframes } from 'styled-components'
import { zoomIn } from 'react-animations'

const Animate = styled.div`animation: 1s ${keyframes`${zoomIn}`} `;



function Portfolio() {

  console.log(portfolioItems);
  return (
    <div>
      <Header />

      <article className="row pageTitle justify-content-center">
        <h5 className="title ml-3 mt-5 mb-4">Portfolio</h5>
      </article>

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