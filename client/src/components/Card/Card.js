import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = ({ val }) => {
    return (
        <div className='card'>
            <Link className="link" to={`/post/${val.id}`}>
                <span className="title">{val.title}</span>
                <img src={val.img} alt="" className="img" />
                <p className="desc">{val.desc}</p>
                <button className="cardButton">Read More</button>
            </Link>
        </div>
    )
}

export default Card
