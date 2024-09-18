import { Card } from "primereact/card";
import ClipText from "../ClipText";

const cardPassThrough = {
    title: {
        className: "text-2xl font-medium text-[#898989] !mb-0",
    },
    subTitle: {
        className: "text-2xl font-semibold !text-white",
    },
}

export default function Investors() {
    return (
        <div className="containerWidth mx-auto py-32">
            <h2 className="text-4xl text-center font-bold">
                <ClipText>
                    Crypto ETPs <br /> European Investors
                </ClipText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <Card
                    title="ApexInvest"
                    subTitle="Physical ETPs" 
                    className="card-glassmorphism !rounded-xl"
                    pt={cardPassThrough}
                >
                    <p className="text-[#A0A0A0] font-medium text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                    {/* Image here */}
                </Card>
                <Card
                    title="ApexInvest"
                    subTitle="XBT Provider" 
                    pt={cardPassThrough}
                    className="card-glassmorphism !rounded-xl"
                >
                    <p className="text-[#A0A0A0] text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                    {/* Image here */}
                </Card>
                <Card
                title="ApexInvest"
                subTitle="Valkyrie Funds"
                className="!bg-[#CFFF24] text-[#A0A0A0] !rounded-xl"
                pt={{...cardPassThrough,
                    subTitle: {
                        className: "text-2xl font-semibold !text-gray-800",
                    }              
                }}
                >
                    <p className="text-gray-800 text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                    {/* Image here */}
                </Card>
            </div>
        </div>
    );
}