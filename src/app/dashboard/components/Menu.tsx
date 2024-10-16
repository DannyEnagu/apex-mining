'use client';
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Menu() {
    const [activeMenuItem, setActiveMenuItem] = useState<{ name: string; url: string; icon: string } | undefined>(undefined
    );
    const pathname = usePathname();

    const menuItems = useMemo(() => [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'pi pi-home'
        },
        {
            name: 'Invest',
            url: '/dashboard/invest',
            icon: 'pi pi-dollar'
        },
        {
            name: 'Investments',
            url: '/dashboard/investments',
            icon: 'pi pi-chart-bar'
        },
        {
            name: 'Deposits History',
            url: '/dashboard/deposits',
            icon: 'pi pi-calendar'
        },
        {
            name: 'Withdrawals',
            url: '/dashboard/withdrawals',
            icon: 'pi pi-money-bill'
        },
        {
            name: 'Withdrawal History',
            url: '/dashboard/withdrawals-history',
            icon: 'pi pi-list'
        },
        {
            name: 'Referrals',
            url: '/dashboard/referrals',
            icon: 'pi pi-users'
        },
        {
            name: 'Account',
            url: '/dashboard/account',
            icon: 'pi pi-user'
        },
        {
            name: 'Logout',
            url: '/dashboard/logout',
            icon: 'pi pi-sign-out'
        }
    ], []);

    useEffect(() => {
        const menuItem = menuItems.find((item) => pathname.startsWith(item.url));
        setActiveMenuItem(menuItem);
    }, [pathname, menuItems]);

    return (
        <nav className="w-full py-6 px-4">
            <span>Logo</span>
            <ul className="flex flex-col gap-5 mt-20">
                {menuItems.map((item) => (
                    <li key={item.url}>
                        <Link href={item.url} className={clsx("flex items-center text-[#A0A0A0] gap-6 text-sm",
                            activeMenuItem?.url === item.url ? 'text-white' : ''
                        )}>
                            <i className={item.icon} style={{ fontSize: '1.5rem' }}></i>
                            <span>{item.name}</span>
                            <i className="pi pi-angle-right" style={{ fontSize: '1.5rem', marginLeft: 'auto' }}></i>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}