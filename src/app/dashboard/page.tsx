import BalanceCard from "./components/BalanceCard";

export default function page() {
    return (
        <div>
            <section className="grid grid-cols-2 gap-4">
                <BalanceCard
                    title="Bitcoin"
                    balance={1000.00}
                    imgSrc="/bitcoin.png"
                    bgColor="#236C07"
                    imgBgColor="#FFAC2C"
                />
                <BalanceCard
                    title="Ethereum"
                    balance={2000.00}
                    imgSrc="/ethereum.png"
                    bgColor="#040845"
                    imgBgColor="#677EEC"
                />
            </section>
            <section className="grid grid-cols-3 gap-4 my-4">
                <BalanceCard
                    title="Tron"
                    balance={0.50}
                    imgSrc="/bitcoin.png"
                    bgColor="#840C0C"
                    imgBgColor="#FFB440"
                />
                <BalanceCard
                    title="Doge"
                    balance={20.00}
                    imgSrc="/ethereum.png"
                    bgColor="#5C4C4F"
                    imgBgColor="#C4A739"
                />
                <BalanceCard
                    title="Bitcoin Cash"
                    balance={70.00}
                    imgSrc="/ethereum.png"
                    bgColor="#055B67"
                    imgBgColor="#F0BB0A"
                />
                <BalanceCard
                    title="USDT TRC20"
                    balance={500.00}
                    imgSrc="/ethereum.png"
                    bgColor="#1A3505"
                    imgBgColor="#4FA388"
                />
                <BalanceCard
                    title="BNB"
                    balance={20.00}
                    imgSrc="/ethereum.png"
                    bgColor="#514719"
                    imgBgColor="#E8B000"
                />
                <BalanceCard
                    title="Litecoin"
                    balance={0.00}
                    imgSrc="/ethereum.png"
                    bgColor="#330314"
                    imgBgColor="#345895"
                />
            </section>
            <section className="grid grid-cols-2 gap-4">
                <BalanceCard
                    title="USDT ERC20"
                    balance={300.00}
                    imgSrc="/bitcoin.png"
                    bgColor="#2C0211"
                    imgBgColor="#3E8071"
                />
                <BalanceCard
                    title="Binance USD"
                    balance={100.00}
                    imgSrc="/ethereum.png"
                    bgColor="#136350"
                    imgBgColor="#B78806"
                />
            </section>
        </div>
    )
}