import Button from "./ui/Button";
import { Card } from "primereact/card";

export interface InvestCardProps {
    percentage: number;
    maxDeposit: number;
    minDeposit: number;
    name: string;
    onButtonClick: (name: string) => void;
}

const cardPassThrough = {
    body: {
        className: "!p-0",
    },
    content: {
        className: "!p-0",
    },
}

export default function Plan({percentage, maxDeposit, minDeposit, name, onButtonClick}: InvestCardProps) {

    return (
        <Card className="!bg-transparent" pt={cardPassThrough}>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center gap-1">
                    <i className="pi pi-star-fill" style={{ color: '#CFFF24' }}></i>
                    <i className="pi pi-star-fill" style={{ color: '#CFFF24' }}></i>
                    <i className="pi pi-star-fill" style={{ color: '#CFFF24' }}></i>
                </div>
                <h3 className="font-bold text-sm mb-3">
                    {name}
                </h3>
                <p className="font-bold text-sm">Increase - {percentage}% </p>
                <p className="text-[#A0A0A0] text-xs">
                    Minimum Deposit <i className="pi pi-dollar"></i>
                    <span className="font-bold">{minDeposit}</span>
                </p>
                <p className="text-[#A0A0A0] text-xs">
                    Maximum Deposit <i className="pi pi-dollar"></i><span className="font-bold">{maxDeposit}</span>
                </p>
                <Button
                    label="Select a plan"
                    className="!mt-2"
                    onClick={() => onButtonClick(name)}
                />
            </div>
        </Card>
    );
}