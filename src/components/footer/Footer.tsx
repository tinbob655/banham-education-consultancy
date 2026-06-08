import React from 'react';
import Logo from "../Logo.tsx";
import './footer.scss';

export default function Footer(): React.ReactElement {

    return (
        <footer>
            <div className="sectionDivider" />
            <div className="footerInner">
                <Logo noBG />
                <div className="footerText">
                    <p>All rights reserved Banham Education Consultancy ®</p>
                    <p>
                        Website created by Tinbob655.{' '}
                        <a href="https://tinbob655.github.io/tinbob655/" target="_blank" rel="noreferrer">
                            Want one for your business?
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}