import './employers-list-items.css';

const EmployersListItems = (props) => {  
  
        const {name, solary, onDelete, onToggleProp, increase, rise} = props;


        let classNames = 'list-group-item d-flex justify-content-between';
        
        if(increase)  classNames += ' increase';
        if(rise)  classNames += ' like';

        return (
            <li className={classNames}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={solary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProp}
                    data-toggle="increase">
                        
                    <i className="fas fa-cookie"></i>
                </button>
        
                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployersListItems;