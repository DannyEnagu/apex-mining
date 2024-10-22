import ApexDataTable from "../components/ApexDataTable";
import { depositHistoryTableConfig } from "@/utils/data-table-config/depositsTableConfig";

export default function Page() {
    const depositData = [
        {
            date: '2021-09-01',
            paymentMethod: 'Bitcoin',
            amount: 0.002,
            status: 'Active',
        },
        {
            date: '2021-09-01',
            paymentMethod: 'Ethereum',
            amount: 0.002,
            status: 'Active',
        },
        {
            date: '2021-09-01',
            paymentMethod: 'Bitcoin',
            amount: 0.002,
            status: 'Active',
        },
        {
            date: '2021-09-01',
            paymentMethod: 'Ethereum',
            amount: 0.002,
            status: 'Active',
        },
    ];
    return (
        <div>
            <h1 className="mb-5 font-bold text-lg">
                Deposit History
            </h1>
            <ApexDataTable
                data={depositData}
                dataTableConfig={depositHistoryTableConfig}
            />
        </div>
    );
}