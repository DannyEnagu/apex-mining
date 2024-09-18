import { Card } from "primereact/card";
import ClipText from "../ClipText";
import Button from "../ui/Button";

export default function Blogs() {
    return (
        <div className="containerWidth mx-auto py-32">
            <h2 className="text-4xl text-center font-bold">
                <ClipText>
                    Our view of the new <br /> Financial World
                </ClipText>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <Card
                    className="!bg-transparent"
                >
                    <article className="space-y-5">
                        <div className="card-glassmorphism rounded-xl border border-[rgba(255,_255,_255,_0.3)] p-3">
                            <div className="h-[200px] !bg-[#CFFF24] rounded-xl">
                                {/* Image here */}
                            </div>
                        </div>
                        <h3 className="text-[#A0A0A0] font-medium text-sm leading-6 flex items-center justify-between">
                            <span className="uppercase">14th aug 2024</span>
                            <span>John Smith</span>
                        </h3>
                        <h4 className="text-3xl font-light text-white">
                            The Investment Case for Ethereum
                        </h4>
                    </article>
                </Card>
                <Card
                    className="!bg-transparent"
                >
                    <article className="space-y-5">
                        <div className="card-glassmorphism rounded-xl border border-[rgba(255,_255,_255,_0.3)] p-3">
                            <div className="h-[200px] !bg-[#B2BADA] rounded-xl">
                                {/* Image here */}
                            </div>
                        </div>
                        <h3 className="text-[#A0A0A0] font-medium text-sm leading-6 flex items-center justify-between">
                            <span className="uppercase">14th aug 2024</span>
                            <span>Sarah Smith</span>
                        </h3>
                        <h4 className="text-3xl font-light text-white">
                            Digital Assets Fund Flows - August 2nd 2024
                        </h4>
                    </article>
                </Card>
                <Card
                    className="!bg-transparent"
                >
                    <article className="space-y-5">
                        <div className="card-glassmorphism rounded-xl border border-[rgba(255,_255,_255,_0.3)] p-3">
                            <div className="h-[200px] !bg-[#FE4C24] rounded-xl">
                                {/* Image here */}
                            </div>
                        </div>
                        <h3 className="text-[#A0A0A0] font-medium text-sm leading-6 flex items-center justify-between">
                            <span className="uppercase">14th aug 2024</span>
                            <span>John Doe</span>
                        </h3>
                        <h4 className="text-3xl font-light text-white">
                            Market Update - August 2nd 2024
                        </h4>
                    </article>
                </Card>
            </div>
            <div className="flex justify-center mt-12">
                <Button
                    label="Load More"
                    iconClass="text-gray-800 border-transparent bg-white"
                />
            </div>
        </div>
    );
}