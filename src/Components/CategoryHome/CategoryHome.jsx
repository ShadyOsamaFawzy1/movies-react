import React, { Component } from 'react';
import Styles from './CategoryHome.module.css';


export class CategoryHome extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div>
                    <hr className={`${Styles.hr_25}`} align="left" />
                    <p className='font-weight-bolder'>{this.props.f1}</p>
                    <p className='font-weight-bolder'>{this.props.f2}</p>
                    <p className='font-weight-bolder'>{this.props.f1}</p>
                    <p className={`${Styles.shadow}`}>{this.props.f4}</p>
                    <hr className={`${Styles.hr_100}`} />
                </div>
            </div>
        )
    }
}
