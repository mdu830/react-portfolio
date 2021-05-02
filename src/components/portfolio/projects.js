import React from 'react'

const Project = ({image, pTag1, pTag2, link, linkText, pTag3, github}) => {
    return (
        <div className="row bord mt-2 mb-1">
            <div className="col-lg">
                <img src={image} alt="" className="img-fluid imgThumbnail w-50 h-auto ml-2 mt-3 mr-2 mb-3" />
            </div>
            <div className="col-lg mr-4">
                <p className="mt-3">{pTag1}</p>
                <p>{pTag2}<a href={link} className="bsLink">{linkText}</a></p>
                <p>{pTag3}<a href={github} className="bsLink">{github}</a></p>
            </div>
        </div>
    )
}

export default Project