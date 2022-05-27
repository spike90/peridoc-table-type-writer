import './App.css';
import data from './data';
import React from 'react';
import PrTile from "./PrTile";

const MAX_CHAR = 16;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', tiles: []};
    }

    onChange = event => {
        if (event.target.value.length <= MAX_CHAR) {
            this.setState({value: event.target.value, tiles: this.calculate(event.target.value.split(' '), 0)});
        }
    };

    calculate = (obj, minElementIndex) => {
        if (obj.filter(item => typeof item === 'string').length === 0) {
            return obj;
        }

        let best = [...obj];
        data.forEach((element, elementIndex) => {
            if (elementIndex >= minElementIndex) {
                obj.forEach((item, index) => {
                    if (typeof item === 'string') {
                        let {abr, id} = element;
                        abr = abr.toLowerCase();
                        if (item.toLowerCase().indexOf(abr) > -1) {
                            let newArr = item.toLowerCase().replace(abr, '#$!' + id + '!#$').split('#$').map(item => {
                                if (item === '!' + id + '!') {
                                    return id - 1;
                                }

                                return item
                            }).filter(item => item !== '');

                            let newObj = [...obj];
                            newObj.splice(index, 1, ...newArr);
                            let probe = this.calculate([...newObj], elementIndex);
                            if (this.compare(best, probe)) {
                                best = probe;
                            }
                        }
                    }
                });
            }
        });

        return best;
    };

    compare = (oldObj, newObj) => {
        return oldObj.filter(item => typeof item === 'string').join('').length > newObj.filter(item => typeof item === 'string').join('').length
    };

    render() {
        return (
            <div className="App">
                <div className="display-word">
                    {this.state.tiles.map(item => {
                        if (typeof item === 'number') {
                            return <PrTile obj={data[item]}/>
                        }
                        return <div className="normal-text">{item}</div>
                    })}
                </div>
                <p>
                    Start typing (max {MAX_CHAR} character allowed):
                </p>
                <input type="text" value={this.state.value} onChange={this.onChange}/>
            </div>
        );
    }
}

export default App;
