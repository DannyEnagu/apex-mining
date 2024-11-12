'use client';
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column, ColumnBodyOptions } from 'primereact/column';
import { Divider } from "primereact/divider";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

export default function Page() {
    const [showModal, setShowModal] = React.useState(false);
    const [activeModal, setActiveModal] = React.useState<string>('');
    const [loading, setLoading] = React.useState(false);
    const [filterValue, setFilterValue] = React.useState('');

    const tableData = [
        { email: 'test@gmail.com', type: 'btc', paymentMethod: 'cash', totalPlanProfit: '5000', activationDate: '11-11-2024', endDate: '11-11-2025', daysLeft: '150', amountInvested: '3000', status: 'active', action: 'edit' },
        { email: 'test@gmail.com', type: 'btc', paymentMethod: 'cash', totalPlanProfit: '5000', activationDate: '11-11-2024', endDate: '11-11-2025', daysLeft: '150', amountInvested: '3000', status: 'active', action: 'edit' },
    ]

    const menuRef = React.useRef<Menu>(null);
    const menuItems: MenuItem[] = [
        { label: 'Edit User', icon: 'pi pi-pencil', command: () => {
            setShowModal(true);
            setActiveModal('edit');
        } },
        { label: 'Credit User', icon: 'pi pi-dollar', command: () => {
            setShowModal(true);
            setActiveModal('credit');
        } },
        { label: 'Delete User', icon: 'pi pi-trash', command: () => {
            setShowModal(true);
            setActiveModal('delete');
        } },
    ];


    const openMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!menuRef.current) return;
        menuRef.current.toggle(event);
    }

    const renderAction = (rowData: any, options: ColumnBodyOptions) => {
        console.log(rowData, options, 'action');
        return (
            <div>
                <Button
                    label='Edit'
                    iconPos='right'
                    icon='pi pi-pencil'
                    className=''
                    onClick={(event) => openMenu(event)} aria-controls="popup_menu_left"
                    aria-haspopup
                />
                <Menu
                    model={menuItems}
                    popup
                    ref={menuRef}
                    id="popup_menu_right"
                    popupAlignment="right"
                />
            </div>
        );
    }

    const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-end">
                <IconField className="px-2 rounded border border-[#60a5fa] has-[:focus]:outline has-[:focus]:outline-[#60a5fa]" iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={filterValue} onChange={onFilterChange} placeholder="Start Typing..." className='!outline-none !border-none !shadow-none' />
                </IconField>
            </div>
        );
    };
    
    const header = renderHeader();

    return (
        <div>
            <h1>All Users</h1>
            <Divider className="my-4" />
            <DataTable
                value={tableData}
                stripedRows
                header={header}
                emptyMessage="No customers found."
                paginator
                rows={10}
                rowsPerPageOptions={[10, 20, 40, 50]}
                loading={loading}
                size='small'
            >
                <Column field="email" header="Email" />
                <Column field="type" header="Type" />
                <Column field="paymentMethod" header="Payment Method" />
                <Column field="totalPlanProfit" header="Total Plan Profit" />
                <Column field="activationDate" header="Activation Date" />
                <Column field="endDate" header="End Date" />
                <Column field="daysLeft" header="Days Left" />
                <Column field="amountInvested" header="Amount Invested" />
                <Column field="status" header="Status" />
                <Column field="action" header="Action" body={renderAction} />
            </DataTable>

            {activeModal !== 'delete'
            ?   <Dialog
                    header="Edit User Details"
                    visible={showModal}
                    style={{ width: '50vw' }}
                    onHide={() => {if (!showModal) return; setShowModal(false); }}
                >
                    Dialog content
                </Dialog>
            :   <ConfirmDialog
                    header='Confirm Delete'
                    acceptClassName="bg-red-500 text-white"
                    visible={showModal}
                    onHide={() => setShowModal(false)}
                    message="Are you sure you want to proceed? You cannot undo this action." 
                    icon="pi pi-exclamation-triangle"
                    accept={() => console.log('accept')}
                    reject={() => console.log('reject')}
                />
            }
        </div>
    );
}