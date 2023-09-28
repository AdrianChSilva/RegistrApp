import { useRef } from 'react';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';

export default function Menu() {
    const menu = useRef(null);
    const items: MenuItem[] = [
        {
            label: 'Add Student',
            icon: 'pi pi-fw pi-user-plus',
        },
        {
            label: 'Add Course',
            icon: 'pi pi-fw pi-file-edit',
        },
        {
            separator: true
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
            <Button label="Settings" icon="pi pi-cog" onClick={(e) => menu.current.toggle(e)} />
        </div>
    )
}