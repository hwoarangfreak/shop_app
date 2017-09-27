import React, {Component} from 'react'
import { TitleLine } from '../components/TitleLine'
import { ColorBox } from '../components/ColorBox'
import { Link } from 'react-router-dom'
import './css/innerpage.scss'

export class InnerPage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log('innerpage ',this.props);
        return (
            <div className="inner-page">
                <div className="inner-page__to-main">
                    <Link to="/"><span className="inner-page__to-main__arrow"></span>BACK TO CATALOG</Link>
                </div>
                <div className="inner-page__wrapper">
                    <TitleLine name={this.props.location.state.type}/>
                    <div className="inner-page__wrapper__box">
                        <div className="inner-page__wrapper__box__left">
                            <img src={this.props.location.state.image}/>
                        </div>
                        <div className="inner-page__wrapper__box__right">
                            <div className="inner-page__wrapper__box__right__props">
                                <div>{this.props.location.state.price}</div>
                                <ColorBox colours={this.props.location.state.colours} />
                                <div>{this.props.location.state.size.join(', ')}</div>
                            </div>
                            <div className="inner-page__wrapper__box__right__title">
                                <div>PRICE</div>
                                <div>COLORS</div>
                                <div>SIZES</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}