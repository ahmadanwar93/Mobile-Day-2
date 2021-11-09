// import { render } from '@testing-library/react';
import React from 'react';
import './menuSection.css';

class MenuSection extends React.Component{
   
    render(){
        return(
            <div className="menuSection">
                <h4>{this.props.sectionTitle}</h4>
                {this.props.children}
            </div>
        )
    }
}

export default MenuSection;