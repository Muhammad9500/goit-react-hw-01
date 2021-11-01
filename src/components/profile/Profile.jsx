import React from 'react';
import PropTypes from 'prop-types'
import {imgProfile, nameProfile, tagProfile, locationProfile, liProfile, statsKey, statsVal, divProfile, ulProfile} from './Profile.module.css';
const Profile = (props) => {
    return (
        <div className={divProfile}>
            <div>
                <img className={imgProfile} src={props.avatar} alt="Аватар пользователя" />
                <p className={nameProfile}>
                    {props.name}
                </p>
                <p className={tagProfile}>
                    {props.tag}
                </p>
                <p className={locationProfile}>
                    {props.location}
                </p>
            </div>
            <ul className={ulProfile}>
                {Object.entries(props.stats).map((key) =>
                    <li className={liProfile}>              
                        <span className={statsKey}>{key[0]}</span>
                        <span className={statsVal}>{key[1]}</span>        
                    </li>
                )}
            </ul>
        </div>
    );
}

    Profile.propTypes = {
        name: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.object.isRequired,
    };
    

export default Profile;