import React, {Component, Fragment} from 'react';
import logo from "../logo.svg";
import TodoList from "./todo/TodoList";
import {Route} from "react-router-dom";
import SlidingNav from "./slidingNav/SlidingNav";
import Counter from "./counter/Counter";

class App extends Component {

    render() {
        const appStyle = {
            "App": {
                "textAlign": "center"
            },
            "App_logo": {
                "animation": "App-logo-spin infinite 20s linear",
                "height": "40vmin",
                "pointerEvents": "none"
            },
            "App_header": {
                "backgroundColor": "#282c34",
                "minHeight": "100vh",
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
                "justifyContent": "center",
                "fontSize": "calc(10px + 2vmin)",
                "color": "white"
            },
            "App_link": {
                "color": "#61dafb"
            }
        };

        return (
            <Fragment>
                <Route path="/todo/" component={TodoList}/>
                <Route path="/slidingnav/" component={SlidingNav}/>
                <Route path="/counter/" component={Counter}/>
                <div style={appStyle.App}>
                    <header style={appStyle.App_header}>
                        <img src={logo} style={appStyle.App_logo} alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            style={appStyle.App_link}
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </Fragment>
        );
    }

}

export default App;