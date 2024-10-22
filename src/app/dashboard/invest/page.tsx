'use client';
import { FormEvent, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import Plan, { InvestCardProps } from "../components/Plan";
import Button from "../components/ui/Button";
import { currencies } from "@/utils/constants";

type SelectedPlan = Pick<InvestCardProps, 'name' | 'percentage' | 'maxDeposit' | 'minDeposit'> | undefined;

export default function Page() {
    const [visible, setVisible] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<SelectedPlan>({
        name: "",
        percentage: 0,
        maxDeposit: 0,
        minDeposit: 0,
    });

    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [amount, setAmount] = useState(0);
    const [isValidAmount, setIsValidAmount] = useState(true);
    const [isValidCurrency, setIsValidCurrency] = useState(true);

    const investmentPlans = [
        {
            name: "Basic",
            percentage: 10,
            maxDeposit: 1000,
            minDeposit: 100,
        },
        {
            name: "Standard",
            percentage: 15,
            maxDeposit: 2000,
            minDeposit: 500,
        },
        {
            name: "Premium",
            percentage: 20,
            maxDeposit: 5000,
            minDeposit: 1000,
        },
    ];

    const handleButtonClick = (name: string) => {
        setSelectedPlan(investmentPlans.find((plan) => plan.name === name));
        setVisible(true);
        console.log(name, 'clicked');
    }

    const validateForm = () => {
        if ((selectedPlan && amount < selectedPlan.minDeposit) || (selectedPlan && amount > selectedPlan.maxDeposit) || amount <= 0) {
            setIsValidAmount(false);
            return false;
        }

        if (!selectedCurrency) {
            setIsValidCurrency(false);
            return false;
        }
    }

    const handleProceed = (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        console.log('Proceeding with payment');
    };

    return (
        <div>
            <h1 className="mb-5 font-bold text-lg">Investment Plans</h1>
            <div className="flex items-center justify-between">
                {investmentPlans.map((plan) => (
                    <Plan
                        key={plan.name}
                        name={plan.name}
                        percentage={plan.percentage}
                        maxDeposit={plan.maxDeposit}
                        minDeposit={plan.minDeposit}
                        onButtonClick={(name) =>handleButtonClick(name)}
                    />
                ))}
            </div>
            <Dialog
                header={`Make payment for ${selectedPlan?.name} plan`}
                visible={visible}
                style={{ width: '350px' }}
                onHide={() => {if (!visible) return; setVisible(false); }}
            >
                <form onSubmit={handleProceed} className="space-y-3">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="currency">
                            Select Currency
                        </label>
                        <Dropdown
                            value={selectedCurrency}
                            onChange={(e) => setSelectedCurrency(e.value)}
                            options={currencies}
                            optionLabel="name" 
                            placeholder="Select a currency" className="!w-full"
                            checkmark={true}
                            highlightOnSelect={false}
                        />
                        {!isValidCurrency && (
                            <small id="currency-help" className="text-red-500">
                                Please select a currency
                            </small>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="amount">Amount</label>
                        <InputNumber
                            invalid={amount <= 0}
                            value={amount}
                            onValueChange={(e) => setAmount(e.value as number)}
                            id="amount"
                            inputClassName="!w-full"
                            aria-describedby="amount-help"
                        />
                        {!isValidAmount && (
                            <small id="amount-help" className="text-red-500">
                                Amount should be between {selectedPlan?.minDeposit} and {selectedPlan?.maxDeposit}
                            </small>
                        )}
                    </div>
                    <div>
                        <Button
                            type="submit"
                            label="Proceed"
                            className="w-full !mt-2"
                        />
                    </div>
                </form>
            </Dialog>
        </div>
    );
}