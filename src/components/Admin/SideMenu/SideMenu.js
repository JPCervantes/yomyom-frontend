import React from 'react';
import {Menu, Icon} from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

import './SideMenu.scss';

export function SideMenu(props) {
    const { children } = props;
    const { pathname } = useLocation();

  return (
    <div className='side-menu-admin'>
        <MenuLeft pathname={pathname} />
        <div className='content'>{children}</div>
    </div>
  )
}

function MenuLeft (props) {
    const { pathname } = props;

    return (
        <Menu fixed='left' borderless className='side' vertical>
            <h1 className='side-menu-admin__title' >YOMYOM</h1>

            <Menu.Item as={Link} to={'/admin/menu'} active={pathname === "/admin/menu"} >
                <Icon name="browser" /> Menu
            </Menu.Item>

            <Menu.Item as={Link} to={'/admin/categories'} active={pathname === "/admin/categories"} >
                <Icon name="folder" /> Categorias
            </Menu.Item>

            <Menu.Item as={Link} to={'/admin/plates'} active={pathname === "/admin/plates"} >
                <Icon name="utensils" /> Platillos
            </Menu.Item>



        </Menu>
    )
}