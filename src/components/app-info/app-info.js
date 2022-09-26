import './app-info.css';

const AppInfo = ({employers, increase}) => {
    return (
        <div className="app-info">
            <h1>Учот робітників в канторі </h1>
            <h2>Общее число співробітників: {employers}</h2>
            <h2>Премию получать: {increase}</h2>
        </div>
    );
} 

export default AppInfo;