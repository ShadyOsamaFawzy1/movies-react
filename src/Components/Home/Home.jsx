import React, { Component } from 'react';
import { CategoryHome } from '../CategoryHome/CategoryHome';
import { MovieCard } from '../MovieCard/MovieCard';
import Styles from './Home.module.css';
import img1 from '../../images/movie1.jpg';
import img2 from '../../images/movie2.jpg';
import img3 from '../../images/movie3.jpg';
import img4 from '../../images/movie4.jpg';
import img5 from '../../images/movie5.jpg';
import img6 from '../../images/movie6.jpg';
import img7 from '../../images/movie7.jpg';
import img8 from '../../images/movie8.jpg';
import img9 from '../../images/movie9.jpg';
import img10 from '../../images/movie10.jpg';
import tv1 from '../../images/tv1.jpg';
import tv2 from '../../images/tv2.jpg';
import tv3 from '../../images/tv3.jpg';
import tv4 from '../../images/tv4.jpg';
import tv5 from '../../images/tv5.jpg';
import tv6 from '../../images/tv6.jpg';
import tv7 from '../../images/tv7.jpg';
import tv8 from '../../images/tv8.jpg';
import tv9 from '../../images/tv9.jpg';
import tv10 from '../../images/tv10.jpg';


export class Home extends Component {
    render() {
        return (
            <>
                <div className={`${Styles.home}  pt-5`}>
                    <div className={`container`} style={{ maxWidth: '90%' }}>
                        <div className="row">

                            <CategoryHome f1="Trending" f2="Movies" f3="to Watch now" f4="most watched movies by days" />

                            <MovieCard image={img1} title='Collateral Beauty' rate='8.8' />
                            <MovieCard image={img2} title='Requiem for a dream' rate='8.7' />
                            <MovieCard image={img3} title='Lord of war' rate='8.6' />
                            <MovieCard image={img4} title='Vivarium' rate='9.1' />
                            <MovieCard image={img5} title='The little things' rate='7.5' />
                            <MovieCard image={img6} title='The Banker' rate='7.3' />
                            <MovieCard image={img7} title='13 Hours the secret soliders of bengazi' rate='9.2' />
                            <MovieCard image={img8} title='The Highwaymen' rate='6.8' />
                            <MovieCard image={img9} title='Bridge of spies' rate='5.9' />
                            <MovieCard image={img10} title='Lord of the Rings' rate='9.0' />


                            <CategoryHome f1="Trending" f2="TV" f3="to Watch now" f4="most watched TV by days" />

                            <MovieCard image={tv1} title='Game Of Thrones' rate='8.8' />
                            <MovieCard image={tv2} title='Vikings' rate='8.7' />
                            <MovieCard image={tv3} title='Black Clover' rate='8.6' />
                            <MovieCard image={tv4} title='VivaBleachrium' rate='9.1' />
                            <MovieCard image={tv5} title='And Then There Were None' rate='7.5' />
                            <MovieCard image={tv6} title='You' rate='7.3' />
                            <MovieCard image={tv7} title='13 Reason Why' rate='9.2' />
                            <MovieCard image={tv8} title='The Walking Dead' rate='6.8' />
                            <MovieCard image={tv9} title='Dark' rate='5.9' />
                            <MovieCard image={tv10} title='Peaky Blinders' rate='9.0' />



                        </div>
                    </div>

                </div>
            </>
        )
    }
}
