import { Fragment } from "react"
import PropTypes from 'prop-types';

const saludo=()=>{
    return "hola buenas, tardes";
}

export const FirstApp=({title, subtitle, name})=>{
   
    const newMessage='Neil';

    return (
        <Fragment>
            <h1> { newMessage } </h1>
            <h2>{ saludo() }</h2>
            <h3 data-testid='test-title'>
                {title}
            </h3>
            <h5>{ subtitle }</h5>
            <h5>{ subtitle }</h5>
            <h4>{ name }</h4>
        </Fragment>
    );

}

FirstApp.propTypes={
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string,
}

FirstApp.defaultProps={
    title: "no hay titulo",
    subtitle: 34,
    name: "Neil",
}