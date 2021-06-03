import React, { Component } from 'react'
import { Tag } from '../Tag/Tag'
import Styles from './SingleMovie.module.css'
import tv10 from '../../images/tv10.jpg';

export class SingleMovie extends Component {
    render() {
        return (
            <div className={`container pt-5`} style={{ maxWidth: '90%' }}>
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <img src={tv10} alt="Movie Image" className={`w-100`} />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <p className={`fw-bold display-4`}>Movie Title</p>
                            <p className={`${Styles.sub_title}`}>Movie Slogan</p>
                            <Tag tag_name="crime" />
                            <Tag tag_name="drama" />
                            <Tag tag_name="thriller" />
                            <p className={`fw-bold mt-3`}>Vote : 9.8</p>
                            <p className={`fw-bold`}>Vote Count : 20</p>
                            <p className={`fw-bold`}>Popularity : 12.1</p>
                            <p className={`fw-bold`}>Release Date : Today</p>
                            <p className={`${Styles.sub_title}`}> This is movie descraption.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
/**
 * <div className="row">
                    <div className="col-md-4">
                        <div>
                            <img src={this.props.image} alt="Movie Image" className={`w-100`} />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <p className={`font-weight-bolder`}>{this.props.title}</p>
                            <p className={`${Styles.sub_title}`}>{this.props.slogan}</p>
                            <Tag tagname="crime"/>
                            <Tag tagname="drama"/>
                            <Tag tagname="thriller"/>
                            <p className={`font-weight-bolder`}>Vote : {this.props.vote}</p>
                            <p className={`font-weight-bolder`}>Vote Count : {this.props.vote_count}</p>
                            <p className={`font-weight-bolder`}>Popularity : {this.props.popularity}</p>
                            <p className={`font-weight-bolder`}>Release Date : {this.props.release_date}</p>
                            <p className={`${Styles.sub_title}`}> {this.props.description}</p>
                        </div>
                    </div>
                </div>
 */