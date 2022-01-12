import Header from './Header';
import React, { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';
function Protected(props) {
    let Cmp = props.Cmp
    const history = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href="/login";

        }
    }, [])
    return (
        <div>
            <Cmp />


        </div>

    )

}
export default Protected