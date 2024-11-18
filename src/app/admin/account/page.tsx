import { Divider } from "primereact/divider";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function Page() {
    return (
        <div className="bg-white py-4">
            <h1 className="px-4">
                Admin Account
            </h1>
            <Divider className="my-4" />
            <form className="space-y-4 w-3/4 px-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">
                        Email
                    </label>
                    <InputText
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullName">
                        Full Name
                    </label>
                    <InputText
                        id="fullName"
                        placeholder="Full Name"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="oldPassword">
                        Old Password
                    </label>
                    <InputText
                        id="oldPassword"
                        placeholder="Old Password"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="newPassword">
                        New Password
                    </label>
                    <InputText
                        id="newPassword"
                        placeholder="New Password"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <InputText
                        id="confirmPassword"
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="flex items-center justify-end gap-4">
                    <Button label="Save" />
                </div>
            </form>
        </div>
    );
}