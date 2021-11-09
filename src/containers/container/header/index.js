import React from 'react';
import './header.css';
class Header extends React.Component{
    render(){
        return (
            <div className='headerContainer'>
                <form>                    
                        <input type="text" id="searchMovie" name="searchMovie" placeholder="Search your movie here"/>
                        {/* <input type='submit' id='submit'></input> */}
                </form>
                {/* <button className="submitButton">Search</button> */}
                <div className='profileHolder'>                    
                    <p>Ahmad Fikri</p>
                    <div className='profilePhoto'></div>
                </div>
            </div>
        );
    }
}

export default Header;