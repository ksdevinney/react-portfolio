import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <h4 className="card-title">{props.App}</h4>
            <p>{props.description}</p>
            <a href={props.github} target="_blank" rel="noreferrer">
                <span className="tile">Github Repo</span></a>
                <a href={props.live} target="_blank" rel="noreferrer">
                    {/* <img src={props.screenshot} className="img-fluid project-img" alt={props.id} /> */}
                    </a>
        </div>
    )
}

export default Card
