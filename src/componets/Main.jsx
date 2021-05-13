import React from 'react';
import { Link } from 'react-router-dom';

function Main(props) {
    return (
        <div>
            <h1>Main page</h1>
            <Link to='/search'>
                <button>Search</button>
            </Link>
            {/* <Link to='contact'>
                <button>Contact</button>
            </Link> */}

        </div>
    );
}

export default Main;