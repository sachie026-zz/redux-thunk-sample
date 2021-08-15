import React from 'react';
import { connect } from 'react-redux'
import { incAction } from '../actions/counterAction';

const mapStateToProps = (state) => ({
    counter: state.count,
});

const mapDispatchToProps = dispatch => ({
    increment: (value) => dispatch(incAction(value)),
});

const Home = (props) => {
    
    return (
        <>
        Counter : {props.counter}
        <button onClick={() => props.increment(props.counter + 1)}>Increment</button>
        </>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);