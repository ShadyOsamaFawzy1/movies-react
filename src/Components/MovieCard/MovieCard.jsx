import React, { Component } from 'react';
import Styles from './MovieCard.module.css';

export class MovieCard extends Component {
    render() {
        return (
            <div  className="col-md-2">

                <div className={`${Styles.bg} card h-100 position-relative border-0`}>
                    <img src={this.props.image} height="250" className="card-img-top" alt="movie card" />
                    <div className="card-body p-0">
                        <p className="card-title pt-1">{this.props.title}</p>
                    </div>
                    <span className={`${Styles.badge_position} badge badge-primary position-absolute`}>{this.props.rate}</span>
                </div>

            </div>
        )
    }
}