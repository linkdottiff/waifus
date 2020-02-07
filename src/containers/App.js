import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {waifus} from '../waifus';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            waifus: waifus,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const {waifus, searchfield} = this.state;
        const filteredWaifus = waifus.filter(waifu =>{
            return waifu.series.toLowerCase().includes(searchfield.toLowerCase()) || waifu.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f1">Waifus</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList waifus={filteredWaifus}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;

