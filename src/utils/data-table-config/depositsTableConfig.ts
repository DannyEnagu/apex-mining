import { DataTableConfig } from "@/app/dashboard/components/ApexDataTable";

export const depositHistoryTableConfig: DataTableConfig[] = [
    {
        header: 'Date',
        field: 'date',
        dataType: 'text',
    },
    {
        header: 'Payment Method',
        field: 'paymentMethod',
        dataType: 'text',
    },
    {
        header: 'Amount',
        field: 'amount',
        dataType: 'amount',
    },
    {
        header: 'Status',
        field: 'status',
        dataType: 'text',
    },
];