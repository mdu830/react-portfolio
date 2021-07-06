import React from 'react'

const Project = ({ feat, title, image, pTag1, pTag2, link, linkText, pTag3, github }) => {
    return (
        <article className="media-body m-3 mt-5 mb-5 bord box">
            <div className="row mt-2 mb-1">
                <div className="row ml-5 mt-2">
                    <div className="mt-1 mr-2 starIcon">{feat}</div><h3 className="cardTitle">{title}</h3>
                </div>
                <div className="row ml-3 mb-2">
                    <div className="col-lg ml-3">
                        <img src={`${process.env.PUBLIC_URL}${image}`} alt="" className="img-fluid img-thumbnail w-50 h-auto ml-2 mt-3 mr-2 mb-3" />
                    </div>
                    <div className="col-lg mr-5">
                        <p className="mt-3">{pTag1}</p>
                        <p>{pTag2}<a href={link} className="bsLink">{linkText}</a></p>
                        <p>{pTag3}<a href={github} className="bsLink">{github}</a></p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Project