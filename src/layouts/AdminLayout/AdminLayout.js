import React from 'react'
import { SideMenu } from "../../components/Admin"; // This components need to be self closed
import './AdminLayout.scss';

export function AdminLayout(props) {
    const { children } = props;

  return (
    <div className='admin-layout'>      

        <div className='admin-layaout__main-content'>
          <SideMenu> 
            { children } 
          </SideMenu>            

        </div>
        
    </div>
  )
}
