import { DataTableConfig } from "@/app/dashboard/components/ApexDataTable";


export const investmentTableConfig: DataTableConfig[] = [
    {
        header: 'Payment Method',
        field: 'paymentMethod',
        dataType: 'text',
    },
    {
        header: 'Earnings',
        field: 'earnings',
        dataType: 'amount',
    },
    {
        header: 'Total Profit',
        field: 'totalProfit',
        dataType: 'amount',
    },
    {
        header: 'Activation Date',
        field: 'startDate',
        dataType: 'date',
    },
    {
        header: 'End Date',
        field: 'endDate',
        dataType: 'date',
    },
    {
        header: 'Days Left',
        field: 'daysLeft',
        dataType: 'text',
    },
    {
        header: 'Amount Invested',
        field: 'amountInvested',
        dataType: 'amount',
    },
    {
        header: 'Status',
        field: 'status',
        dataType: 'text',
    },

];