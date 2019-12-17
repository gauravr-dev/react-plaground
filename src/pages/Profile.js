import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    username: state.location.payload.username,
    user: state.user
  }
}

function Profile({ username, user }) {
  return (
    <div>
      <h2>{username}'s profile</h2>
      <img src={user.avatar} style={{ width: '5rem', height: '5rem'}} alt="profile avatar" />
      <p>This page gains profile information from the location in the URL. The profile has a username. In routes/index, there is a :username, which provides the username `{username}` to the location object in the redux store.</p>
      
    </div>
  )
}

export default connect(mapStateToProps)(Profile);