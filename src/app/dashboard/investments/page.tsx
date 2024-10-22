import ApexDataTable from "../components/ApexDataTable";
import { investmentTableConfig } from "@/utils/data-table-config/investmentsTableConfig";

export default function Page() {
    const investmentData = [
        {
            paymentMethod: 'Bitcoin',
            earnings: 0.002,
            totalProfit: 0.002,
            startDate: '2021-09-01',
            endDate: '2021-09-30',
            daysLeft: 10,
            amountInvested: 0.002,
            status: 'Active',
        },
        {
            paymentMethod: 'Ethereum',
            earnings: 0.002,
            totalProfit: 0.002,
            startDate: '2021-09-01',
            endDate: '2021-09-30',
            daysLeft: 10,
            amountInvested: 0.002,
            status: 'Active',
        },
        {
            paymentMethod: 'Bitcoin',
            earnings: 0.002,
            totalProfit: 0.002,
            startDate: '2021-09-01',
            endDate: '2021-09-30',
            daysLeft: 10,
            amountInvested: 0.002,
            status: 'Active',
        },
        {
            paymentMethod: 'Ethereum',
            earnings: 0.002,
            totalProfit: 0.002,
            startDate: '2021-09-01',
            endDate: '2021-09-30',
            daysLeft: 10,
            amountInvested: 0.002,
            status: 'Active',
        },
    ];
    return (
        <div>
            <h1 className="mb-5 font-bold text-lg">
                My Investments
            </h1>
            <ApexDataTable
                data={investmentData}
                dataTableConfig={investmentTableConfig}
            />
        </div>
    );
}