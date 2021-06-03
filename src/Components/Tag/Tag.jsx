import React, { Component } from 'react'

export class Tag extends Component {
    render() {
        return (
            <span className={`badge bg-primary m-2`} style={{fontSize:'1.2em'}}>
               {this.props.tag_name} 
            </span>
        )
    }
}