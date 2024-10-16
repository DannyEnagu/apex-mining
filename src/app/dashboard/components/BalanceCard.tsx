import Image from "next/image";
import { Card } from "primereact/card";

interface CardProps {
    title: string;
    balance: number;
    imgSrc: string;
    bgColor?: string;
    imgBgColor?: string;
    balanceBotPadding?: boolean
}

const cardPassThrough = {
    body: {
        className: "!p-0",
    },
    content: {
        className: "!p-0",
    },
}

export default function BalanceCard({
    title,
    balance = 0,
    imgSrc,
    bgColor,
    imgBgColor,
    balanceBotPadding,
}: CardProps) {
    return (
        <Card className={`relative p-4`} pt={cardPassThrough} style={{backgroundColor: `${bgColor}`}}>
            <h3 className="relative">
                <span className="font-semibold">{title} Balance</span>
                <div className={`absolute top-0 right-0 flex items-center justify-center p-2 rounded-full`} style={{backgroundColor: `${imgBgColor}`}}>
                    <Image
                        src={imgSrc}
                        alt={`${title} icon`}
                        width={10}
                        height={10}
                        className="w-5 h-5"
                    />
                </div>
            </h3>
            <p className={`text-xl font-bold ${balanceBotPadding ? 'pb-6' : ''}`}>${balance}</p>
            <span className="absolute bottom-0 left-2 text-[#A0A0A0] text-xs">Invest Now</span>
        </Card>
    )
}