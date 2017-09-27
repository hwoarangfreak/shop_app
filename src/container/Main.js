import React, {Component} from 'react'
import './css/main.scss'
import { Dropdown } from '../components/Dropdown'
import { Items } from '../components/Items'
import { Checkbox } from '../components/Checkbox'

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [{'men': true},{'women': true},{'children': false}],
            sortType: 'price'
        };
        this.list = ['price', 'name'];
        this.checkboxChange = ::this.checkboxChange;
        this.showAll = ::this.showAll;
        this.handleChange = ::this.handleChange;
        this.getItems = ::this.getItems;
        this.getCheckbox = ::this.getCheckbox;
    }

    handleChange(item) {
        this.setState({sortType: item});
    }

    checkboxChange(a, b, c) {
        let tempArr = this.state.checked;
        tempArr[c] = {[a]: !b};
        this.setState({checked: tempArr});
    }

    showAll() {
        let tempArr = [];
        for (let i = 0; i < this.state.checked.length; i++) {
            for (let j in this.state.checked[i]) {
                tempArr.push({[j]: true});
            }
        }
        this.setState({checked: tempArr});
    }

    getItems() {
        let isReversed = false;
        return this.state.checked.map((item) => {
            for (let i in item) {
                if (item[i]) {
                    isReversed = !isReversed;
                    return (
                        <Items key={i} isReversed={isReversed ? '' : 'reverse'} category={i} sortType={this.state.sortType}/>
                    )
                }
            }
        })
    }

    getCheckbox() {
        return this.state.checked.map((category, index) => {
            for (let i in category) {
                return (
                    <Checkbox label={i} checked={category[i]} key={i} onChange={this.checkboxChange.bind(this, i, category[i], index)}/>
                )
            }
        })
    }

    render() {
        console.log('main ', this.props);
        return (
            <div className="app">
                <header>
                    <div className="checkbox-container">
                        {
                            this.getCheckbox()
                        }
                    </div>
                    <button onClick={this.showAll}>SEE ALL PRODUCTS</button>
                </header>
                <div className="wrapper">
                    <div className="sort">
                        <div className="sort__title">SORT BY</div>
                        <Dropdown onChoose={this.handleChange} list={this.list} default={this.list[0]}/>
                    </div>
                    {
                        this.getItems()
                    }
                </div>
            </div>
        )
    }
}