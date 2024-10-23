import Image from "next/image";
import { Button } from "primereact/button";

export default function Header() {
    return (
        <header className="flex items-center justify-between py-4 px-6">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                    {/* <img src="/logo.svg" alt="Logo" className="w-8 h-8" /> */}
                    <Button
                        icon='pi pi-bars'
                        text
                        className="!text-white !p-0 text-2xl"
                        // style={{ fontSize: '1.7rem' }}
                    />

                    <h1 className="text-lg font-semibold">Admin Dashboard</h1>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                    <Image
                        src="/avatar.svg"
                        width={32}
                        height={32}
                        alt="Admin Avatar"
                        className="w-8 h-8"
                    />
                    <span>Admin</span>
                </div>
            </div>
        </header>
    );
}