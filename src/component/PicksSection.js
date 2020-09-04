import React from 'react';
import PicksCard from './PicksCard';
import {picksData} from '../data/picksData';
import '../styles/PicksSection.css'
const PicksSection = () =>(
    <section id="nts_pics">
        <h4>NTS Picks</h4>
        <div className="body">
            {picksData.map((item,index)=><PicksCard key={index} date={item.date} loc={item.loc} title={item.title} tags={item.tags} src={item.img} />)}
        </div>
    </section>
);

export default PicksSection;