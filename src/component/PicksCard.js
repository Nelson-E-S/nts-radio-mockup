import React from 'react';
import PicksTags from './PicksTags';

const PicksCard = (props) =>(
    <div className="picksCard">
        <img src="#" alt="#" />
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
);

export default PicksCard;