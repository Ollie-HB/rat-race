import React, { Fragment } from 'react';

function Square(props){
    return (
        <Fragment>
            <div className="square">
                {props.number}
            </div>
        </Fragment>
    )
}

export default Square;