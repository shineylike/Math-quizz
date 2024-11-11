import React, { useState } from 'react';
import './Drop-down-menu.css';

function DropdownMenu({ label, items }) {
    return (
        <div className="dropdown">
            <button className="dropdown-button">
                {label}
            </button>
            <ul className="dropdown-menu">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DropdownMenu;