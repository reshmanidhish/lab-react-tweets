import React from 'react';
import ProfileImage from './ProfileImage'; // Import the ProfileImage component
import User from './User';
import Timestamp from './Timestamp';

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
       <ProfileImage image={props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            <span className="handle">@{props.tweet.user.handle}</span>
          </span> */}

          <User user={props.tweet.user}/>
<Timestamp timestamp={props.tweet.timestamp}/>
         
        </div>

        <p className="message">
          {props.tweet.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
