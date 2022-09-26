import EmployersListItems from '../employers-list-items/employers-list-items';
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp}) => {
    let element = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItems 
            key={id}  
            {...itemProps}
            onDelete={() => onDelete(id)} 
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        );
    });

    return (
        <ul className="app-list list-group">
           {element}
        </ul>
    );
}

export default EmployersList;


    

