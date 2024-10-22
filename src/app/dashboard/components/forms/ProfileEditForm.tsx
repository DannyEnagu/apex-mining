'use client'
import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import { InputText } from "primereact/inputtext";

export default function EditProfileForm() {
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
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
                <label htmlFor="firstName">
                    First Name
                </label>
                <InputText
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleChange}
                    id="firstName"
                    className="!w-full"
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lastName">
                    Last Name
                </label>
                <InputText
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleChange}
                    id="lastName"
                    className="!w-full"
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="username">
                    Username
                </label>
                <InputText
                    value={formData.userName}
                    name="userName"
                    onChange={handleChange}
                    id="username"
                    className="!w-full"
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email">
                    Email
                </label>
                <InputText
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    id="email"
                    className="!w-full"
                />
            </div>
            <div>
                <Button
                    type="submit"
                    label="Save"
                    className="w-full !mt-3"
                />
            </div>
        </form>
    )
}