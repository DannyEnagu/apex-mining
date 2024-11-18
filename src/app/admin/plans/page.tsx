'use client';
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import React from "react";

export default function Page() {
    const [showDialog, setShowDialog] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [selectedPlan, setSelectedPlan] = React.useState<any>(null);

    const plans = [
        {
            packageName: 'Starter Package',
            dailyPercentageIncrease: '1.5%',
            activationBonus: '1%',
            packageDuration: '30',
            packagePriceMin: '100',
            packagePriceMax: '500',
            packageDescription: 'This is a basic package',
        },
        {
            packageName: 'Silver Package',
            dailyPercentageIncrease: '2.5%',
            activationBonus: '2%',
            packageDuration: '60',
            packagePriceMin: '500',
            packagePriceMax: '1000',
            packageDescription: 'This is a standard package',
        },
        {
            packageName: 'Advanced Package',
            dailyPercentageIncrease: '3.5%',
            activationBonus: '3%',
            packageDuration: '90',
            packagePriceMin: '1000',
            packagePriceMax: '5000',
            packageDescription: 'This is a premium package',
        },
        {
            packageName: 'Extreme Package',
            dailyPercentageIncrease: '3.5%',
            activationBonus: '3%',
            packageDuration: '90',
            packagePriceMin: '1000',
            packagePriceMax: '5000',
            packageDescription: 'This is a premium package',
        },
        {
            packageName: '24Hour Package',
            dailyPercentageIncrease: '3.5%',
            activationBonus: '3%',
            packageDuration: '90',
            packagePriceMin: '1000',
            packagePriceMax: '5000',
            packageDescription: 'This is a premium package',
        }
    ];
    const openUpdateModal = (plan: any) => {
        setSelectedPlan(plan);
        setShowModal(true);
    };

    const openDeleteDialog = (plan: any) => {
        setSelectedPlan(plan);
        setShowDialog(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submitted');
    };
    return (<div>
            <h1 className="flex items-center justify-between">
                <span>Investment Plans</span>
                <Button label="Add new Plan" onClick={() => setShowModal(true)}/>
            </h1>
            <Divider className="my-4" />
            <div className="grid grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div key={index} className="flex flex-col gap-2 bg-white rounded items-center py-4">
                        <h3 className="mb-4">
                            <strong>{plan.packageName}</strong>
                        </h3>
                        <div className="flex flex-col gap-2">
                            <strong>
                                Increase {` - `}
                                {plan.dailyPercentageIncrease}
                            </strong>
                            <span>
                                Minimum deposit {` - `}
                                {plan.packagePriceMin}
                            </span>
                            <span>
                                Maximum deposit {` - `}
                                {plan.packagePriceMax}
                            </span>
                            <span>
                                Duration {` - `}
                                {plan.packageDuration} days
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button label="Update" onClick={() => openUpdateModal(plan)}/>
                            <Button label="Delete" className="!bg-red-500 text-white" onClick={() => openDeleteDialog(plan)}/>
                        </div>
                    </div>
                ))}
            </div>
            <Dialog
                header="Edit User Details"
                visible={showModal}
                style={{ width: '50vw' }}
                onHide={() => {if (!showModal) return; setShowModal(false); }}
            >
                <form onSubmit={handleSubmit}className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="packageName">
                            Package Name
                        </label>
                        <InputText
                            id="packageName"
                            placeholder="Package Name"
                            // className="w-full"
                        />
                    </div>
                    {/* Daily Percentage Increases*/}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="dailyPercentageIncrease">
                            Daily Percentage Increase
                        </label>
                        <InputText
                            id="dailyPercentageIncrease"
                            placeholder="Daily Percentage Increase"
                        />
                    </div>
                    {/* Activation Bonus */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="activationBonus">
                            Activation Bonus
                        </label>
                        <InputText
                            id="activationBonus"
                            placeholder="Activation Bonus"
                        />
                    </div>
                    {/* Package Duration (Days) */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="packageDuration">
                            Package Duration (Days)
                        </label>
                        <InputText
                            id="packageDuration"
                            placeholder="Package Duration (Days)"
                        />
                    </div>
                    {/* Package Price 'FROM' */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="packagePriceMin">
                            Minimum Deposit Amount
                        </label>
                        <InputText
                            id="packagePriceMin"
                            placeholder="Minimum Deposit Amount"
                        />
                    </div>
                    {/* Package Price 'TO' */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="packagePriceMax">
                            Maximum Deposit Amount
                        </label>
                        <InputText
                            id="packagePriceMax"
                            placeholder="Maximum Deposit Amount"
                        />
                    </div>
                    {/* Package Description */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="packageDescription">
                            Package Description
                        </label>
                        <InputText
                            id="packageDescription"
                            placeholder="Package Description"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button severity="secondary" label="Cancel" className="btn btn-primary" onClick={() => setShowModal(false)}/>
                        <Button type="submit" label="Save" className="btn btn-secondary"/>
                    </div>
                </form>
            </Dialog>
            <ConfirmDialog
                header='Confirm Delete'
                acceptClassName="bg-red-500 text-white"
                visible={showDialog}
                onHide={() => setShowDialog(false)}
                message="Are you sure you want to proceed? You cannot undo this action." 
                icon="pi pi-exclamation-triangle"
                accept={() => console.log('accept')}
                reject={() => console.log('reject')}
            />
    </div>);
}