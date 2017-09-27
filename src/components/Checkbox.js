import React, {Component} from 'react'
import './css/checkbox.scss'

export class Checkbox extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="checkbox">
                <input type="checkbox" name="category" id={this.props.label} checked={this.props.checked} onChange={this.props.onChange}/>
                <label htmlFor={this.props.label}></label>
                <span>{this.props.label.toUpperCase()}</span>
            </div>
        )
    }
}