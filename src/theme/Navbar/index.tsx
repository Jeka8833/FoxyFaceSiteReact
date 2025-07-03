import React, {type ReactNode} from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import {useLocation} from '@docusaurus/router';

export default function Navbar(): ReactNode {
    const {pathname} = useLocation();

    if (pathname === '/') {
        return null;
    }

    return (
        <NavbarLayout>
            <NavbarContent/>
        </NavbarLayout>
    );
}