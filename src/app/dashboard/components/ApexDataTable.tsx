'use client';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export interface DataTableConfig {
    field: string;
    header: string;
    dataType?: string;
}

export interface InvestmentTableProps {
    data: Array<{ [key: string]: string | number | boolean }>;
    dataTableConfig: DataTableConfig[];
}

export default function ApexDataTable({ data, dataTableConfig }: InvestmentTableProps) {
    const [investmentData, setInvestmentData] = useState(data);

    useEffect(() => {
        setInvestmentData(data);
    }, [data]);

    return (
        <DataTable
            value={investmentData}
            stripedRows
        >
            {dataTableConfig.map((config, index) => (
                <Column key={index} field={config.field} header={config.header} />
            ))}
        </DataTable>
    );

}
