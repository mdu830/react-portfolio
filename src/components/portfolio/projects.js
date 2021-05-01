import React from 'react'

const Project = ({image, pTag1, pTag2, link, pTag3, github}) => {
    return (
        <div className=" col-12 card">
            <div className="image-project col-lg">
                <div className={`projectImage ${image}`}><img alt="" src={image}></img></div>
                {/* <img className="projectImage" alt="" src={image}></img> */}
            </div>
        </div>
    )
}

export default Project