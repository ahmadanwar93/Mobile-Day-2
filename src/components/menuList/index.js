import React from 'react';
import classes from './menu.module.css';

class MenuList extends React.Component{
    
    constructor(props){        
        super(props);
        this.state = {
            titleText: "Menu 1",
        };
    }
    render(){
        return(
            <div className= {classes.menu_holder}>
                {/* <div className={classes.menu_icon}></div> */}
                {this.props.icon !== undefined && (
                    <img className={classes.menu_icon} src={this.props.icon} alt=""/>
                )}
                <p>{this.props.title}</p>
                
            </div>
        )
    }
}

export default MenuList;