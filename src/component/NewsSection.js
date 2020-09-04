import React from 'react';
import NewsCard from './NewsCard';
import {newsData} from '../data/newsData';
//import '../styles/PicksSection.css'
const PicksSection = () =>(
    <section id="nts_news">
        <h4>NEWS &amp; EVENTS</h4>
        <div className="body">
            {newsData.map((item,index)=><NewsCard key={index} date={item.date} type={item.type} title={item.title} src={item.img} desc={item.desc} />)}
        </div>
    </section>
);

export default PicksSection;