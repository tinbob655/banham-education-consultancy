import React, {useState} from 'react';
import {useLocation} from "react-router";
import Logo from "../Logo.tsx";
import './header.scss';
import TransitionLink from "../TransitionLink.tsx";

const pageInfo: [string, string][] = [
    ['', 'Home'],
    ['history', 'History'],
    ['general', 'General'],
    ['tutoring', 'Tutoring'],
    ['students', 'Students'],
    ['resources', 'Resources'],
    ['about', 'About'],
]

export default function Header(): React.ReactElement {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    //finds the active route based on our location
    function isActive(path: string): boolean {
        if (path === '') return location.pathname === '/';
        return location.pathname.startsWith(`/${path}`);
    }

    return (
        <React.Fragment>
            <header>
                <div className="headerInner">

                    {/*clicking the logo takes us home*/}
                    <TransitionLink to={"/"} className={"logoWrapper"} onClick={() => setMenuOpen(false)} >
                        <Logo icon/>
                    </TransitionLink>

                    {/*used for desktop navigation*/}
                    <nav aria-label="Main navigation">
                        {pageInfo.map(([path, title]):React.ReactElement => (
                            <TransitionLink
                                key={path}
                                to={`/${path}`}
                                className={`navLink${isActive(path) ? ' active' : ''}`}
                            >
                                {title}
                            </TransitionLink>
                        ))}
                    </nav>

                    {/*the hamburger button is visible on mobile devices*/}
                    <button
                        className={`hamburger${menuOpen ? ' open' : ''}`}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/*dropdown also only shown on mobile*/}
            {menuOpen && (
                <div className={"mobileMenu"} aria-hidden={!menuOpen}>
                    {pageInfo.map(([path, title]) => (
                        <TransitionLink
                            key={path}
                            to={`/${path}`}
                            className={`mobileNavLink${isActive(path) ? ' active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {title}
                        </TransitionLink>
                    ))}
                </div>
            )}
        </React.Fragment>
    )
}