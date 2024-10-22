'use client'

import { FormEvent, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import Button from "../ui/Button";
import { InputText } from "primereact/inputtext";
import { currencies } from "@/utils/constants";

export default function WithdrawalForm() {
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        currency: null,
        amount: 0,
        walletAddress: "",
    });
    const withdrawableCurrencies = [
        ...currencies,
        { name: "Referral Bonus", code: "refBonus" },
    ];
    const validateForm = () => {
        if (!formData.currency) return false
        return true;
    };
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const handleProceed = (e: FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        console.log('Proceeding with payment');
    };
    return (
        <div>
            <Button
                label="Withdraw"
                className=""
                onClick={() => setVisible(true)}
            />
            <Dialog
                header="Withdraw"
                visible={visible}
                style={{ width: '350px' }}
                onHide={() => {if (!visible) return; setVisible(false); }}
            >
                <form onSubmit={handleProceed} className="space-y-3">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="amount">Amount</label>
                        <InputNumber
                            invalid={formData.amount <= 0}
                            value={formData.amount}
                            name="amount"
                            onValueChange={handleChange}
                            id="amount"
                            inputClassName="!w-full"
                            aria-describedby="amount-help"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="wallet">Wallet Address</label>
                        <InputText
                            value={formData.walletAddress}
                            name="walletAddress"
                            onChange={handleChange}
                            id="wallet"
                            className="!w-full"
                            aria-describedby="wallet-help"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="currency">
                            Select Currency
                        </label>
                        <Dropdown
                            value={formData.currency}
                            name="currency"
                            onChange={handleChange}
                            options={withdrawableCurrencies}
                            optionLabel="name" 
                            placeholder="Select a currency" className="!w-full"
                            checkmark={true}
                            highlightOnSelect={false}
                        />
                        {/* {!formData.currency && (
                            <small id="currency-help" className="text-red-500">
                                Please select a currency
                            </small>
                        )} */}
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            type="submit"
                            label="Proceed"
                            className="!mt-3"
                        />
                    </div>
                </form>
            </Dialog>
        </div>
    );
}