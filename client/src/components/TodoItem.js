import './TodoItem.css'

const TodoItem = ({name,type,amountSaved,amountNeeded}) => {
    return (
        <div className="item">
            <p className="itemName">{name}</p>
            <p className="itemType">{"Type of Payment: " + type}</p>
            <p className="amountSaved">{"Money Saved For This Goal: " + amountSaved}</p>
            <p className="amountNeeded">{"Payment Total: " + amountNeeded}</p>
            <button className="button">Add Money To This Goal</button>
        </div>
    );
}

export default TodoItem;