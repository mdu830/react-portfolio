import React from 'react'

const Project = ({feat, title, image, pTag1, pTag2, link, linkText, pTag3, github }) => {
    return (
        <div className="row bord mt-2 mb-1">
            <div className="row ml-5 mt-2">
                <div className="mt-1 mr-2">{feat}</div><h3>{title}</h3>
            </div>
            <div className="row ml-3 mb-2">
                <div className="col-lg">
                    <img src={`${process.env.PUBLIC_URL}${image}`} alt="" className="img-fluid img-thumbnail w-50 h-auto ml-2 mt-3 mr-2 mb-3" />
                </div>
                <div className="col-lg mr-4">
                    <p className="mt-3">{pTag1}</p>
                    <p>{pTag2}<a href={link} className="bsLink">{linkText}</a></p>
                    <p>{pTag3}<a href={github} className="bsLink">{github}</a></p>
                </div>
            </div>
        </div>
    )
}

export default Project