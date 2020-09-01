import React from 'react';
import PicksCard from './PicksCard';
import {picksData} from '../data/picksData';
const PicksSection = () =>(
    <section id="nts_pics">
        <h4>NTS Picks</h4>
        {picksData.map((item,index)=><PicksCard key={index} date={item.date} loc={item.loc} title={item.title} tags={item.tags} />)}
    </section>
);

export default PicksSection;