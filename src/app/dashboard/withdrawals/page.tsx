import ApexDataTable from "../components/ApexDataTable";
import { withdrawalHistoryTableConfig } from "@/utils/data-table-config/withdrawalsTableConfig";
import WithdrawalForm from "../components/forms/WithdrawalForm";

export default function Page() {
    const withdrawalData = [
        {
            date: '2021-09-01',
            withdrawalMethod: 'Bitcoin',
            amount: 0.002,
            from: 'Bitcoin Wallet',
            status: 'Active',
        },
        {
            date: '2021-09-01',
            withdrawalMethod: 'Ethereum',
            amount: 0.002,
            from: 'Ethereum Wallet',
            status: 'Active',
        },
        {
            date: '2021-09-01',
            withdrawalMethod: 'Bitcoin',
            amount: 0.002,
            from: 'Bitcoin Wallet',
            status: 'Active',
        },
        {
            date: '2021-09-01',
            withdrawalMethod: 'Ethereum',
            amount: 0.002,
            from: 'Ethereum Wallet',
            status: 'Active',
        }
    ];
    return (
        <div>
            <header className="flex items-center justify-between mb-5">
                <h1 className="mb-0 font-bold text-lg">
                    Withdrawal History
                </h1>
                <WithdrawalForm />
            </header>
            <ApexDataTable
                data={withdrawalData}
                dataTableConfig={withdrawalHistoryTableConfig}
            />
        </div>
    );
}