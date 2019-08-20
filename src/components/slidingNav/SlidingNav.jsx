import React from 'react';
import './SlidingNav.css';
import MenuButton from "./MenuButton";
import Nav from "./Nav";

class SlidingNav extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    toggleMenu = () => {
        this.setState({visible: !this.state.visible});
    }

    handleClick = (e) => {
        this.toggleMenu();

        e.stopPropagation();
    }


    render() {
        console.log("Rendering SlidingNav");
        return (
            <div>
                <div>
                    <MenuButton onClick={this.handleClick.bind(this)}/>
                    <Nav onClick={this.handleClick.bind(this)} menuVisibility={this.state.visible}/>
                    <p>Can you spot the item that doesn't belong?</p>
                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Sit</li>
                        <li>Bumblebees</li>
                        <li>Aenean</li>
                        <li>Consectetur</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SlidingNav;