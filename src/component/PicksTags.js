import React from 'react';
import '../styles/PicksTags.css';

const PicksTags = (props) =>(
    <span className="tag">
        {props.name}
    </span>
);

export default PicksTags;