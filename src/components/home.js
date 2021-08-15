import React from 'react';
import { connect } from 'react-redux'
import { incAction } from '../actions/counterAction';
import { getCountState } from '../actions/countSelector';

const mapStateToProps = (state) => ({
    counter: state.count,
    isBig: getCountState(state)
});

const mapDispatchToProps = dispatch => ({
    increment: (value) => dispatch(incAction(value)),
});

const Home = (props) => {
    
    return (
        <>
        Counter : {props.counter}
        Bigger than 3 : { props.isBig ? 'yes' : 'no'}
        <button onClick={() => props.increment(props.counter + 1)}>Increment</button>
        </>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);