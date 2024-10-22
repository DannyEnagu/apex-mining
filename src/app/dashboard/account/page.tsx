'use client';
import { useState } from "react";
import DashboardButton from "../components/ui/Button";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import ChangePasswordForm from "../components/forms/ChangePasswordForm";
import ProfileEditForm from "../components/forms/ProfileEditForm";


export default function Page() {
    const [showPasswordDialog, setShowPasswordDialog] = useState(false);
    const [showProfileDialog, setShowProfileDialog] = useState(false);

    const profileData = [
        {
            label: 'Full Name',
            value: 'John Doe'
        },
        {
            label: 'Email',
            value: 'johndoe@gmail.com'
        },
        {
            label: 'Phone Number',
            value: '+1234567890'
        },
        {
            label: 'Address',
            value: '123 Main Street, New York, NY 10001'
        },
        {
            label: 'Country',
            value: 'United States'
        },
        {
            label: 'State',
            value: 'New York'
        },
        {
            label: 'City',
            value: 'New York City'
        },
        {
            label: 'Zip Code',
            value: '10001'
        },
    ];

    const otherData = [
        {
            label: 'Referral Link',
            value: 'https://example.com/ref/123456',
            isLink: true
        },
        {
            label: 'Referral Count',
            value: '5'
        },
        {
            label: 'Referral Earnings',
            value: '$100.00'
        },
    ];

    const handleLinkCopy = (link: string) => {
        navigator.clipboard.writeText(link);
    }

    return (
        <div>
            <header className="flex items-center justify-between mb-5">
                <h1 className="mb-5 font-bold text-lg">
                    My Account Information
                </h1>
                <div className="flex items-center gap-2">
                    <DashboardButton
                        label="Edit Profile"
                        onClick={() => setShowProfileDialog(true)}
                    />
                    <DashboardButton
                        label="Change Password"
                        onClick={() => setShowPasswordDialog(true)}
                    />
                </div>
            </header>
            <div className="w-[95%] mx-auto text-[#A0A0A0]">
                <section>
                    <h2 className="font-bold text-lg mb-2 mt-5">
                        Profile Information
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {profileData.map((data) => (
                            <div key={data.label} className="flex flex-col gap-1">
                                <label className="font-semibold text-sm">
                                    {data.label}
                                </label>
                                <p className="text-sm">
                                    {data.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="font-bold text-lg mb-2 mt-12">
                        Other Information
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {otherData.map((data) => (
                            <div key={data.label} className="flex flex-col gap-1">
                                <label className="font-semibold text-sm">
                                    {data.label}
                                </label>
                                <p className="text-sm">
                                    {data.value}
                                    {data.isLink && (<DashboardButton label="Copy" className="ml-4 !py-1 !px-3" onClick={() => handleLinkCopy(data.value)} />)}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <Button 
                        label="Logout"
                        icon="pi pi-sign-out"
                        className="mt-10"
                        severity="danger"
                        raised
                    />
                </section>
            </div>
            <Dialog
                header="Edit Profile"
                visible={showProfileDialog}
                style={{ width: '500px' }}
                onHide={() => {if (!showProfileDialog) return; setShowProfileDialog(false); }}
            >
                <ProfileEditForm />
            </Dialog>
            <Dialog
                header="Change Password"
                visible={showPasswordDialog}
                style={{ width: '500px' }}
                onHide={() => {if (!showPasswordDialog) return; setShowPasswordDialog(false); }}
            >
                <ChangePasswordForm />
            </Dialog>
        </div>
    );
}