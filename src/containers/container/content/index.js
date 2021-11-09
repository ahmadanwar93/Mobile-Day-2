import React from 'react';
import Profile from '../../../components/profile';
import imgmov1 from '../../../assets/images/movie_1.jpg';
import imgmov2 from '../../../assets/images/movie_2.jpg';
import imgmov3 from '../../../assets/images/movie_3.jpg';
import imgmov4 from '../../../assets/images/movie_4.jpg';
import imgmov5 from '../../../assets/images/movie_5.jpg';
import imgmov6 from '../../../assets/images/movie_6.jpg';


const DATA = [
    {
        title: 'Movie 1',
        genre: 'Action',
        rating: 8.5,
        imgLink: imgmov1 
    },
    {
        title: 'Movie 2',
        genre: 'Thriller',
        rating: 9.0,
        imgLink: imgmov2 
    },
    {
        title: 'Movie 3',
        genre: 'History Documentary',
        rating: 10.0,
        imgLink: imgmov3 
    },
    {
        title: 'Movie 4',
        genre: 'Non fiction',
        rating: 8.0,
        imgLink: imgmov4
    },
    {
        title: 'Movie 5',
        genre: 'Fiction',
        rating: 10.0,
        imgLink: imgmov5
    },
    {
        title: 'Movie 6',
        genre: 'Crime',
        rating: 8.5,
        imgLink: imgmov6
    },
    
];

class Content extends React.Component{
    render(){
        return (
            <div style={{display:'flex', flexWrap:'wrap', overflow:'scroll', justifyContent:'center', backgroundColor:'purple'}}>
                {/* <Profile /> */}
                {DATA.map(list => <Profile title={list.title} genre={list.genre} rating={list.rating} imgLink={list.imgLink}/>)}
            </div>
        );
    }
}

export default Content;