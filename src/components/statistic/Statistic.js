import React from 'react';
import './Statistic.css';
import PropTypes from 'prop-types';

function randomColor(){
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length === 1 ? "0" + sub : sub);
    }
    return "#" + color;
}


function Statistic ({statistical}) {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                {statistical.map(item => (
                    <li className="item" key={item.id} style={{backgroundColor: randomColor()}}>
                        <span className="label">{item.label }</span><br/>
                        <span className="percentage">{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};


export default Statistic;

Statistic.propTypes = {
    statistical: PropTypes.arrayOf(PropTypes.object)
}