import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/hamburgers.css';
import '../styles/Navigation.css'
import Hamburger from 'react-hamburgers';

class Nav extends React.Component {
    state = {
        active: false,
        isMobile: window.innerWidth < 1200
    }
    handleClickMenu = () => {
        this.setState({
            active: !this.state.active,

        })
    }
    //mounting/demounting mobile menu
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 1200
            });
        }, false);
    }
    render() {
        return (
            <>
                {this.state.isMobile ? <nav className="mobile">
                    <Hamburger
                        active={this.state.active}
                        type="slider"
                        onClick={this.handleClickMenu}
                    ></Hamburger>
                    <div className={`menu-container ${this.state.active && 'active'}`}>
                        <ul className="menu-list">
                            <NavLink to="/weatherchannel" exact className="menu-list-item" onClick={this.handleClickMenu}>Aktualna Pogoda</NavLink>
                            <NavLink to="/daysweather" className="menu-list-item" onClick={this.handleClickMenu}>Pogoda na 5 dni</NavLink>

                        </ul>
                    </div>
                </nav> : null}
                {this.state.isMobile ? null : <nav className="desktop">
                    <ul className="menu-list">
                        <NavLink to="/" exact className="menu-list-item">Aktualna Pogoda</NavLink>
                        <NavLink to="/daysweather" className="menu-list-item">Pogoda na 5 dni</NavLink>

                    </ul>
                </nav>}
            </>
        )
    }
}
export default Nav;