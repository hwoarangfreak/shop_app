import React, { Component } from 'react'
import './css/dropdown.scss'

export class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listVisible: false,
            selected: this.props.default
        };
        this.show = ::this.show;
        this.hide = ::this.hide;
        this.select = ::this.select;
    }

    show(){
        this.setState({listVisible: true});
        document.addEventListener('click', this.hide);
    }
    hide(){
        this.setState({listVisible: false});
        document.removeEventListener('click', this.hide);
    }
    select(item){
        this.props.onChoose(item);
        this.setState({selected: item, listVisible: false});
    }
    renderItems() {
        let items = [];
        for (let i = 0; i < this.props.list.length; i++) {
            let item = this.props.list[i];
            item !== this.state.selected ? items.push(<div className="dropdown__list__box__item" onClick={this.select.bind(this, item)} key={item}>
                <span>{item.toUpperCase()}</span>
            </div>) : null;
        }
        return items;
    }
    render() {
        return (
            <div className={`dropdown${this.state.listVisible ? ' show' : ''}`}>
                <div className={`dropdown__container${this.state.listVisible ? ' clicked': ''}`} onClick={this.show}>
                    <span className="dropdown__container__selected">{this.state.selected.toUpperCase()}</span>
                    <span className={`dropdown__container__arrow ${this.state.listVisible ? 'down' : 'up'}`}/>
                </div>
                <div className="dropdown__list">
                    <div className="dropdown__list__box">
                        {this.renderItems()}
                    </div>
                </div>
            </div>
        )
    }
}