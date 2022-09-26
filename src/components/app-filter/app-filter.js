import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Всі сотрудніки'},
        {name: 'rise', label: 'На повишенія'},
        {name: 'moreSolary1000', label: 'ЗП більше 100$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button
            className={'btn ' + clazz}
            type="buttton"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })
 
    return (
        <div className="btn-group">
           {buttons}
        </div>
    );
}

export default AppFilter;