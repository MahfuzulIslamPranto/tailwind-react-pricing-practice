import React, { use } from 'react';
import Navbaruse from './Navbaruse';

const Navbar = ({ navbarFetch }) => {
    const navbarPromise = use(navbarFetch);
    return (
        <nav className='flex justify-between items-center m-2'>
            <h1>Logo</h1>
            <div className='flex gap-4'>
                {
                    navbarPromise.map(navbar => <Navbaruse navbar={navbar}></Navbaruse>)
                }
            </div>
            <button className='btn'>Login</button>
        </nav>
    );
};

export default Navbar;