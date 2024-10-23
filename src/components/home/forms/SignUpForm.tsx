'use client'
import { FormEvent, useState } from "react";
import { InputText } from "primereact/inputtext";
import ApexButton from "@/components/ui/ApexButton";
import { Password } from "primereact/password";
import Link from "next/link";

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        PasswordConfirm: "",
    });

    
    const handleSignUp = (e: FormEvent) => {
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
        <form onSubmit={handleSignUp} className="space-y-3">
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
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="password">
                    Password
                </label>
                <Password
                    inputId="password"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    className="!block"
                    inputClassName="!w-full"
                    toggleMask
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="password2">
                    Confirm Password
                </label>
                <Password
                    inputId="password2"
                    value={formData.PasswordConfirm}
                    name="PasswordConfirm"
                    onChange={handleChange}
                    className="!block"
                    inputClassName="!w-full"
                    toggleMask
                />
            </div>
            <div>
                <ApexButton
                    type="submit"
                    label="Sign Me Up"
                    className="w-full !mt-3 !mb-1"
                />
            <small className="text-[#A0A0A0]">
                    Already have an account? <Link href="/auth/login" className="text-blue-500">
                        Login
                    </Link>
                </small>
            </div>
        </form>
    )
}