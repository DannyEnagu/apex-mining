'use client';
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Divider } from "primereact/divider";
import { Dialog } from 'primereact/dialog';
import { MenuItem } from 'primereact/menuitem';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { SplitButton } from 'primereact/splitbutton';
import { Button } from 'primereact/button';

export default function Page() {
    const [showModal, setShowModal] = React.useState(false);
    const [activeModal, setActiveModal] = React.useState<string>('');
    const [loading, setLoading] = React.useState(false);
    const [filterValue, setFilterValue] = React.useState('');
    const [selectedRow, setSelectedRow] = React.useState<any>(null);

    const tableData = [
        { email: 'test@gmail.com', paymentMethod: 'cash', date: '11-11-2024', amount: '3000', status: 'Pending', action: 'edit' },
        { email: 'test@gmail.com', paymentMethod: 'cash', date: '11-11-2024', amount: '3000', status: 'Approved', action: 'edit' },
    ]

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


    const openMenu = (rowData: any) => {
        setSelectedRow(rowData);
    }

    const renderAction = (rowData: any) => {
        return (
            <div>
                <SplitButton
                    label='Edit'
                    icon='pi pi-pencil'
                    model={menuItems}
                    onClick={() => openMenu(rowData)}
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
            <h1>All Transactions</h1>
            <div className="mt-4 inline-flex items-center gap-0 border border-[#60a5fa] rounded-md">
                <Button label="Deposit" className={`!rounded-none`} />
                <Button label="Withdrawal" className={`!rounded-none !bg-transparent`} />
            </div>
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
                <Column field="paymentMethod" header="Payment Method" />
                <Column field="date" header="Date" />
                <Column field="amount" header="Amount" />
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