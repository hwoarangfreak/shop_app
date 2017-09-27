import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from '../components/Dropdown'
import { ColorBox } from '../components/ColorBox'
import './css/item.scss'

export class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentSize: this.props.size
        };
        this.changeSize = ::this.changeSize;
    }

    changeSize(size) {
        this.setState({currentSize: this.props.size[this.props.size.indexOf(size)]});
    }

    render(){
        return (
            <div className="item">
                    <div className="item__box">
                        <div className="first-line">
                            {
                                this.props.size.length === 1 ?
                                    <div className="first-line__size">{this.props.size[0]}</div> :
                                    <Dropdown onChoose={this.changeSize} list={this.props.size} default="size"/>
                            }
                            <ColorBox colours={this.props.colours} />
                        </div>
                        <Link to={{
                            pathname: `${this.props.category}/${this.props.id}`,
                            state: {
                                id: this.props.id,
                                image: this.props.image,
                                price: this.props.price,
                                size: this.props.size,
                                colours: this.props.colours,
                                type: this.props.type}}}>
                        <div className="second-line">
                            <img src={this.props.image}/>
                        </div>
                        <div className="third-line">
                            <span className="third-line__name">{this.props.type.toUpperCase()}</span>
                            <span className="third-line__price">{this.props.price}</span>
                        </div>
                        </Link>
                    </div>
            </div>
        )
    }
}