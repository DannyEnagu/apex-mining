'use client'
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
// import { useRouter } from 'next/navigation';


const menuPassThrough = {
    root: {
        className: '!w-full',
    },
    header: {
        className: '!border-0 !bg-transparent',
    },
    menucontent: '!border-0 !bg-transparent',
    headeraction: 'p-2 !text-[#A0A0A0]',
    action: {
        className: 'py-2 !text-[#A0A0A0]',
    },
}

export default function Menu() {
    // const router = useRouter();
    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            url: '/admin'
        },
        {
            label: 'User Management',
            items: [
                {
                    label: 'All users',
                    icon: 'pi pi-users',
                    url: '/admin/users'
                },
            ]
        },
        {
            label: 'Currency Management',
            items: [
                {
                    label: 'All currencies',
                    icon: 'pi pi-dollar',
                    url: '/admin/currencies'
                },
            ]
        },
        {
            label: 'Management Investment',
            icon: 'pi pi-chart-bar',
            url: '/admin/investments',
            // command: () => {
            //     router.push('/admin/investments');
            // }
        },
        {
            label: 'Transactions',
            icon: 'pi pi-sync',
            url: '/admin/transactions'
        },
        {
            label: 'Manage Plans',
            items: [
                {
                    label: 'All currencies',
                    icon: 'pi pi-briefcase',
                    url: '/admin/plans'
                },
            ]
        },
        {
            label: 'Emails',
            items: [
                {
                    label: 'Send To User',
                    icon: 'pi pi-envelope',
                    url: '/admin/send-email'
                },
                {
                    label: 'Send To All Users',
                    icon: 'pi pi-envelope',
                    url: '/admin/send-email'
                },
            ]
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            url: '/admin/settings'
        },
        {
            label: 'Account',
            icon: 'pi pi-user',
            url: '/admin/account'
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
                console.log('Perform Logout')
            }
        },
    ];

    return (
        <div className="w-full flex flex-col gap-20 py-4 px-2">
            <span className='self-center'>Logo</span>
            <PanelMenu model={items} pt={menuPassThrough} />
        </div>
    )
}