import React, {Component} from 'react'
import axios from 'axios'
import {Item} from '../components/Item'
import { TitleLine } from '../components/TitleLine'
import './css/items.scss'

export class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
            items: [],
            pages: []
        };
        this.pageCount = null;
        this.pages = [];
        this.sortItems = ::this.sortItems;
        this.prevPage = ::this.prevPage;
        this.nextPage = ::this.nextPage;
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/${this.props.category}`)
            .then(response => {
                this.pageCount === null ? this.pageCount = Math.ceil(response.data.length/3) : null;
                this.setState({items: response.data.length === 0 ? null : response.data});
            })
            .catch(
                error => console.log(error)
            )
    }


    nextPage(){
        this.state.currentPage === this.pageCount ? null : this.setState({currentPage: this.state.currentPage + 1});
    }

    prevPage(){
        this.state.currentPage === 1 ? null : this.setState({currentPage: this.state.currentPage - 1});
    }

    sortItems(){
        switch (this.props.sortType) {
            case 'price': {
                return this.state.items.sort((a, b) => {
                    return a.price.replace(/\$/g, '').replace(/,/g, '.') - b.price.replace(/\$/g, '').replace(/,/g, '.');
                });
            }
            case 'name': {
                return this.state.items.sort((a, b) => {
                    if (a.type.toLowerCase() > b.type.toLowerCase()) {
                        return 1;
                    } else if (a.type.toLowerCase() < b.type.toLowerCase()) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            }
            default: {
                return this.state.items;
            }
        }
    }

    render(){
        const nodes = this.sortItems().map(item => {
            return (
                    <Item key={item.id} category={this.props.category} id={item.id} size={item.size} colours={item.colours} image={item.image} type={item.type} price={item.price}/>
            )
        });
        const items = [];
        for (let i = 0; i < nodes.length; i += 3) {
            items.push(nodes.slice(i, i + 3));
        }
        return (
            <div className={`items-line ${this.props.isReversed}`}>
                <TitleLine name={this.props.category} />
                <div className="items-line__navigation">
                    <div className="items-line__navigation__counter">{`${this.state.currentPage} / ${this.pageCount}`}</div>
                    <div className="items-line__navigation__arrows">
                        <div className="items-line__navigation__arrows__arrow left" onClick={this.prevPage}/>
                        <div className="items-line__navigation__arrows__arrow right" onClick={this.nextPage}/>
                    </div>
                </div>
                <div className="items-line__carousel">
                    {items[this.state.currentPage-1]}
                </div>
            </div>
        )
    }
}