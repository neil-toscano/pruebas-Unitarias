import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

export const CounterApp=({value})=>{
    
    const [counter,setCounter]=useState(value);

    const handleAdd = () => {
       // setCounter(counter+1);
        setCounter((c)=>c+1);
    }

    const handleSubstract = () => { 
        setCounter((c)=>c-1);
    }
    
    const handleReset = () => {
        setCounter(value);
    }

    return(
        <Fragment>
            <h1> Counter App </h1>
            <h2> { value } </h2>
            <h3> { counter } </h3>
            <button onClick={ () => { handleAdd() }} > +1 </button>
            <button onClick={ ()=>{ handleSubstract() } }> -1 </button>
            <button onClick={ ()=>{ handleReset() } }> reset </button>
        </Fragment>
    )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}