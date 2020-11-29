import React from 'react';
import './SideBarOption.css';

function SideBarOption({ title, Icon }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (<h4 className="sidebarOption__title">{title}</h4>) : (<p>{title}</p>) }
        </div>
    )
}

export default SideBarOption;