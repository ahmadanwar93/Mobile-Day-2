import React from 'react';
import './nav.css';
import MenuSection from '../../components/menuSection';
import icon1 from "../../assets/images/icon_1.png";
import icon2 from "../../assets/images/icon_2.png";
import icon3 from "../../assets/images/icon_3.png";
import icon4 from "../../assets/images/icon_4.png";
// import icon5 from "../../assets/images/icon_5.png";
// import icon6 from "../../assets/images/icon_6.png";
// import icon7 from "../../assets/images/icon_7.png";


import MenuList from '../../components/menuList';




class Nav extends React.Component{
    render(){
        return(
            <nav>
                <div className="logoSection">
                    <h1><i class="fas fa-anchor"></i></h1>
                    <h1>Quflix</h1>
                </div>

                <MenuSection>
                    <MenuList icon= {icon1} title="New Releases" />
                    <MenuList icon= {icon2} title="Most Popular" />
                    <MenuList icon= {icon3} title="Recommended"/>
                    <MenuList icon= {icon4} title="Top Chart"/>
                </MenuSection>

                
                <MenuSection sectionTitle="My Collection">
                    <MenuList title="Bookmarks" />
                    <MenuList title="History"/>
                    <MenuList title="Subscriptions"/>
                </MenuSection>

                
            </nav>
        )
    }
}

export default Nav;