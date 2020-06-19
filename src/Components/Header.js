import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <Link to='/pizza'>
            <div>Header</div>
        </Link>
    )
}

export default Header;