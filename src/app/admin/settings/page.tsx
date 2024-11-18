import { Divider } from "primereact/divider";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function Page() {
    return (
        <div className="bg-white py-4">
            <h1 className="px-4">
                System Settings
            </h1>
            <Divider className="my-4" />
            <form className="space-y-4 w-3/4 px-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="refComm">
                        Referral Commission(%)
                    </label>
                    <InputText
                        id="refComm"
                        placeholder="Referral Commission"
                    />
                </div>
                <div className="flex items-center justify-end gap-4">
                    <Button label="Save" />
                </div>
            </form>
        </div>
    );
}