import React from 'react';
import { Api } from './Api-call';

export function Refresh(props) {

    return (
        <div>
            <button onClick={()=> Api(props.setData)} >Refresh Photo</button>
        </div>
    )
}