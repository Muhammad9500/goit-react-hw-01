import React from 'react';
import PropTypes from 'prop-types';
import {h2Statistic, ulStatistic, sectionStatistics, liStatistic, labelStatistic, percentageStatistic} from './statistics.module.css';
const Statistics = (props) => {
    return (
        
        <section className={sectionStatistics}>
            {props.title ? <h2 className={h2Statistic}>{props.title}</h2> : null}
            <ul className={ulStatistic}>

                {props.stats.map((key) => 
                    <li className={liStatistic}>
                        <span className={labelStatistic}>
                            {key.label}
                        </span>
                        <span className={percentageStatistic}>
                            {key.percentage}%
                        </span>
                    </li>   
                )}
            </ul>
            
        </section>
        
    );
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default Statistics