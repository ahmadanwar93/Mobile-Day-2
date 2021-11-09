import React from 'react';
import classes from './profile.module.css';
// import icon1 from "../../assets/images/icon_1.png";


class Profile extends React.Component{
    render(){
        return(
            <div className = {classes.profile_holder}>
                <div className = {classes.profile_upper}>
                    <img src={this.props.imgLink} alt=''></img>
                    <div className={classes.movie_rating}>                        
                        <p>{this.props.rating}</p>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div className = {classes.profile_lower}>                    
                    <div className={classes.lowerText}>
                        <h5>{this.props.title}</h5>
                        <p>{this.props.genre}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;