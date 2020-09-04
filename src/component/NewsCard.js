import React from 'react';
import '../styles/NewsCard.css';

const NewsCard = (props) =>(
    <div className="newsCard">
        <div className="newsCardContent">
            <img src={`${props.src}${props.title.replace(/\s/g,'+').replace(/&/g,' and ')}`} alt={props.title} />
            <span className="title">{props.title}</span>
            <div className="cardHead">
                <span>{props.type}</span>
                <span>{props.date===''?null:` - ${props.date}`}</span>
            </div>
            <span className="cardDesc">{props.desc}</span>
        </div>
    </div>
);

export default NewsCard;