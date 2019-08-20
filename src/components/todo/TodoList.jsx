import React, {Component, Fragment} from 'react';
import TodoListItem from "./TodoListItem";
import MenuButton from "../slidingNav/MenuButton";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            task: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClick = key => {
        const filteredItems = this.state.items.filter(item => item.id !== key);

        this.setState({
            items: filteredItems
        });
    };

    addItem = e => {
        e.preventDefault();

        let {items, task} = this.state;

        items.unshift({
            text: task,
            id: Date.now()
        });

        this.setState({
            items: items,
            task: ''
        });
    };


    render() {
        const {items} = this.state;
        const todoItems = items.map(item => <TodoListItem key={item.id} {...item} onClick={this.handleClick}/>);

        return (
            <Fragment>
                <MenuButton onClick={this.handleClick.bind(this)}/>
                <form onSubmit={this.addItem}>
                    <input onChange={this.handleChange} name="task" value={this.state.task}/>
                    <button type="submit">+</button>
                </form>

                <ul>
                    {todoItems}
                </ul>
            </Fragment>
        );
    }


}

export default TodoList;