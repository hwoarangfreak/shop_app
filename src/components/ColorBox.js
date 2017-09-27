import React, {Component} from 'react'
import './css/colours.scss'

export class ColorBox extends Component {
    render(){
        return (
            <div className="colours">
                {this.props.colours.map(color => {
                    return (
                        <div className="color" style={{backgroundColor: `${color}`}} key={color}/>
                    )
                })}
            </div>
        )
    }
}