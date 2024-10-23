import { Button } from "primereact/button";

export default function Header() {
    return (
        <header className="mb-20">
            <div className="flex items-center gap-6">
                <Button
                    icon='pi pi-bars'
                    text
                    className="!text-white !p-0 text-2xl"
                    // style={{ fontSize: '1.7rem' }}
                />
                <span className="font-bold text-xl">Dashboard</span>
            </div>
        </header>
    )
};