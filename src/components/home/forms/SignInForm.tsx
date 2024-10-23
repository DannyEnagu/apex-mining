'use client'
import Link from "next/link";
import { FormEvent, useState } from "react";
import { InputText } from "primereact/inputtext";
import ApexButton from "@/components/ui/ApexButton";
import { Password } from "primereact/password";

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    
    const handleSignIn = (e: FormEvent) => {
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
        <form onSubmit={handleSignIn} className="space-y-3">
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
            <div>
                <ApexButton
                    type="submit"
                    label="Sign Me In"
                    className="w-full !mt-3 !mb-1"
                />
                <small className="text-[#A0A0A0]">
                    Don&apos;t have an account? <Link href="/auth/register" className="text-blue-500">Sign Up</Link>
                </small>
            </div>
        </form>
    )
}