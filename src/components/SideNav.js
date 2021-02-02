import React from 'react';
import { SideNavWrapper, CompanyName, SideNavOptions, SideNavOption } from '../styles/sideNav';

const SideNav = () => {
    return (
        <SideNavWrapper>
            <CompanyName>
                UpKeep 
            </CompanyName>
            <SideNavOptions>
                <SideNavOption to="/">Home</SideNavOption>
                <SideNavOption to="/workOrders">Work Orders</SideNavOption>
            </SideNavOptions>
        </SideNavWrapper>
    );
};

export default SideNav;