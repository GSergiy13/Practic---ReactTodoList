import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import Navigation from '../navigation/navigation';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.props = props;

        this.state = {
            data: [
                {
                    name: 'John S',
                    solary: 800,
                    increase: true,
                    rise: true,
                    id: 1
                },
                {
                    name: 'John re',
                    solary: 2800,
                    increase:false,
                    rise: true,
                    id: 2
                },
                {
                    name: '122 sgsg',
                    solary: 1800,
                    increase: false,
                    rise: false,
                    id: 3
                }
            ],
            term: '',
            filter: 'all'
        }

        this.maxId = 4;
    }


    addItem = (name, solary) => {
        const newObj = {
            name: name,
            solary: solary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newObj];

            return {
                data: newArr
            } 
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
    
                return item;
            })
        }))
    }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    
    //             return item;
    //         })
    //     }))
    // }

    deleteItem = (id) => {
        this.setState(({data}) => {
          return {
            data: data.filter(item => item.id !== id)
          }
        })
    }

    serchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        }); 
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    tabsFilter(data, filter) {
        switch (filter) {
            case 'rise' :
                return data.filter(item =>  item.rise);
            case 'moreSolary1000' :
                return data.filter(item => item.solary > 1000);
            default: 
                return data
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state
        const employers = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase === true).length;

        const visibleData = this.tabsFilter(this.serchEmp(data, term), filter);
     
        return  (
            <div className="app">
                <Navigation/>
                <AppInfo employers={employers} increase={increase}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployersList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployersAddForm onAdd={this.addItem}/>
                
            </div>
        )
    }
}

export default App;