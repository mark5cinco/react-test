import React from 'react';

const {connect} = require("react-redux");

function mapStateToProps(state) {
    return {...state.counter}
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCount: () => dispatch({type: "increase"}),
        decreaseCount: () => dispatch({type: "decrease"}),
    }
}

const Counter  = ({count, decreaseCount, increaseCount}) => {
    return (
        <div className="container">
            <button className="buttons"
                    onClick={decreaseCount}>-
            </button>
            <span>{count}</span>
            <button className="buttons"
                    onClick={increaseCount}>+
            </button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);