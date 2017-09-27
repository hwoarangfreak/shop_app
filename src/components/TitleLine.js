import React, { Component } from 'react'
import './css/titleline.scss'

export class TitleLine extends Component {
    render() {
        return (
            <div className="title">
                <div className="title__category">{this.props.name.toUpperCase()}</div>
                <div className="title__line"></div>
            </div>
        )
    }
}