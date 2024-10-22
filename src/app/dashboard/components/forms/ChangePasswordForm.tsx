'use client'
import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import { InputText } from "primereact/inputtext";

export default function ChangePasswordForm() {
    
    const [formData, setFormData] = useState({
        currentPwd: "",
        newPwd: "",
    });

    
    const handleSave = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <form onSubmit={handleSave} className="space-y-3">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="currentPassword">
                            Current Password
                        </label>
                        <InputText
                            value={formData.currentPwd}
                            name="currentPwd"
                            onChange={handleChange}
                            id="currentPassword"
                            className="!w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="newPassword">
                            New Password
                        </label>
                        <InputText
                            value={formData.newPwd}
                            name="newPwd"
                            onChange={handleChange}
                            id="newPassword"
                            className="!w-full"
                        />
                    </div>
                    <div className="">
                        <Button
                            type="submit"
                            label="Save"
                            className="w-full !mt-3"
                        />
                    </div>
        </form>
    )
}