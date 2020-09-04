import React from 'react';
import PicksTags from './PicksTags';
import '../styles/PicksCard.css';

const PicksCard = (props) =>(
    <div className="picksCard">
        <div className="picksCardContent">
            <img src={`${props.src}${props.title.replace(/\s/g,'+').replace(/&/g,' and ')}`} alt={props.title} />
            <div className="cardDate">
                <span>{props.date}</span>
                <span>{props.loc?props.loc:null}</span>
            </div>
            <span className="title">
                {props.title}
            </span>
            <div className="cardTags">
                {props.tags.map((item, index)=><PicksTags name={item} key={index}/>)}
            </div>
        </div>
    </div>
);

export default PicksCard;