import Link from "next/link";

export default function Page() {
    const dashboardOptions = [
        {
            label: 'Total Investors',
            value: '5',
            icon: 'pi pi-users',
            url: '/admin/users'
        },
        {
            label: 'Total Investments',
            value: '0',
            icon: 'pi pi-briefcase',
            url: '/admin/investments'
        },
        {
            label: 'Total Withdrawals',
            value: '10',
            icon: 'pi pi-arrow-up-right',
            url: '/admin/transactions/?type=withdraws'
        },
        {
            label: 'Total Deposits',
            value: '20',
            icon: 'pi pi-arrow-down-left',
            url: '/admin/transactions/?type=deposits'
        },
        {
            label: 'Total Withdrawal Request',
            value: '50',
            icon: 'pi pi-sync',
            url: '/admin/investments'
        },
    ];

    const items = dashboardOptions.map((item, i) => {
        return <li key={i} className="relative bg-white rounded-lg p-4">
            <h5 className="mb-2">
                {item.label}
            </h5>
            <p>
                {item.value}
            </p>
            <Link href={item.url} className="bg-[#DDEEFE] text-[#3FA0DB] w-[30px] h-[30px] flex items-center justify-center rounded-full absolute right-4 top-4">
                <i className={`${item.icon}`} />
            </Link>
        </li>
    })

    return (
        <div>
            <div className="">
                <ul className="grid grid-cols-2 gap-6">
                    {items}
                </ul>
            </div>
        </div>
    );
}