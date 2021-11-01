import React from 'react';
import PropTypes from 'prop-types'
import {imgFriends, liFriends, divFriends, online, offline, containerFriends} from './friends.module.css';
const Friends = (props) => {
    
    return (
        
        <div className={containerFriends}>
            <ul className="ulFriends">
                {props.friends.map((key) =>
                    <li className={liFriends}>      
                        <div className={divFriends}>     
                            <img src={key.avatar} alt="friends" width="48" className={imgFriends}/>
                            <p className={key.isOnline ? online : offline}>{key.name}</p>
                        </div>   
                    </li>
                )}
            </ul>
        </div>
    );
}
Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired
}
export default Friends;