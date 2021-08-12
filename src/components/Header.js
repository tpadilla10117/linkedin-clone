import React from 'react';
import './Header.styles.css';

function Header() {
    return (
        <div>
            <h1>Header</h1>

            <div className="header__left">
                <img src="" alt="" />

                <div className="header__search">

                    {/* SearchIcon From MAterial UI */}

                    <input type="text" />

                </div>


            </div>

            <div className="header__right">

            </div>

        </div>
    );
};

export default Header;