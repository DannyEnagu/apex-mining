'use client';
import React, { useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Divider } from "primereact/divider";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';

export default function Page() {
    const [showModal, setShowModal] = React.useState(false);
    const [activeModal, setActiveModal] = React.useState<string>('');
    const [loading, setLoading] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState<any>(null);
    const [address, setAddress] = React.useState('');

    const toast = useRef<Toast>(null);

    const showToast = (severity: any, message: string, summary: string) => {
        toast.current?.show({ severity: severity, summary: summary, detail: message, });
    };

    const tableData = [
        { currency: 'btc', address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', balance: '0.00000000', status: 'active', action: 'edit' },
        { currency: 'btc', address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', balance: '0.00000000', status: 'inactive', action: 'edit' },
    ]

    const openModal = (rowData: any) => {
        setShowModal(true);
        setSelectedRow(rowData);
    }

    const handleSave = () => {
        console.log('Save', address);
        setShowModal(false);
        showToast('success', 'Address updated successfully', 'Success');
    }

    const handleCheckboxChange = (e: CheckboxChangeEvent, rowData: any) => {
        if (e.checked && rowData.status !== 'active') {
            showToast('success', 'Currency activated', 'Success');
        } else if (!e.checked && rowData.status !== 'inactive') {
            showToast('success', 'Currency deactivated', 'Success');
        }

        rowData.status = e.checked ? 'active' : 'inactive';
        console.log('Switch', rowData);
        setSelectedRow({ ...rowData });
    }

    const renderAction = (rowData: any) => {
        return (
            <div>
                <Button
                    label='Edit address'
                    iconPos='right'
                    icon='pi pi-pencil'
                    className=''
                    onClick={() => openModal(rowData)} aria-controls="popup_menu_left"
                    aria-haspopup
                />
            </div>
        );
    };

    const renderStatus = (rowData: any) => {
        return (
            <div className="flex items-center justify-center gap-1">
                <Checkbox
                    checked={rowData.status === 'active'}
                    onChange={(e) => handleCheckboxChange(e, rowData)}
                />
                <span className={`${rowData.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                    {rowData.status}
                </span>
            </div>
        );
    };

    return (
        <div>
            <h1>All Currencies</h1>
            <Divider className="my-4" />
            <DataTable
                value={tableData}
                stripedRows
                emptyMessage="No customers found."
                paginator
                rows={10}
                rowsPerPageOptions={[10, 20, 40, 50]}
                loading={loading}
                size='small'
            >
                <Column field="currency" header="Currency" />
                <Column field="address" header="Address" />
                <Column field="balance" header="Balance" />
                <Column field="status" header="Status" body={renderStatus} />
                <Column field="action" header="Action" body={renderAction} />
            </DataTable>

            <Dialog
                header={`Edit Address for ${selectedRow?.currency}`}
                visible={showModal}
                style={{ width: '500px' }}
                onHide={() => {if (!showModal) return; setShowModal(false); }}
            >
                <InputText value={selectedRow?.address} onChange={(e) => setAddress(e.target.value)} className='!w-full' />
                <div className='mt-4 flex items-center justify-end gap-2'>
                    <Button label='Cancel' severity="secondary" onClick={() => {if (!showModal) return; setShowModal(false)}} />
                    <Button
                        label='Save'
                        onClick={() => handleSave()}
                    />
                </div>
            </Dialog>
            <Toast ref={toast} position="top-right" />
        </div>
    );
}