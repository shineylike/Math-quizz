import React, {useState} from 'react';
import './Header.css';
import DropDownMenu from "../Drop-down Menu/Drop-down-menu";
import Grade1 from "../Drop-down Menu/menuItems/Grade1";
import Grade2 from "../Drop-down Menu/menuItems/Grade2";
import Grade3 from "../Drop-down Menu/menuItems/Grade3";
import Grade4 from "../Drop-down Menu/menuItems/Grade4";


function Header() {
    return (
        <header className="header">
            <h1>Math Quiz Master</h1>
            <nav>
                <a href="/">Home</a>
                <DropDownMenu label='Grade 1' items={Grade1}/>
                <DropDownMenu label='Grade 2' items={Grade2} />
                <DropDownMenu label='Grade 3' items={Grade3} />
                <DropDownMenu label='Grade 4' items={Grade4} />
                <a href="/signup">Sign Up</a>
                <a href="/about">About</a>
            </nav>
        </header>
    );
}

export default Header;