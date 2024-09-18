import Image from "next/image";
import ClipText from "../ClipText";
import servicesImg from "@/app/assets/images/hero.jpg"
import { Card } from "primereact/card";

export default function Services() {
    return (
        <div className="containerWidth mx-auto py-32">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                <div className="flex flex-col justify-center text-center md:text-left">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold mb-8">
                            <ClipText>
                                Our Services
                            </ClipText>
                        </h2>
                        <p className="text-[#A0A0A0] text-sm leading-6 md:w-[70%]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, at. Excepturi quae totam consectetur magnam numquam odio repellat quidem nemo.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:w-[85%]">
                        <Card title="Hedge Fund Solutions" className="card-glassmorphism border-l-4 border-[#CFFF24] !rounded-s-none !rounded-e-xl mt-6" pt={{title:{ className: 'text-[#CFFF24] font-medium' }}}>
                            <p className="text-[#A0A0A0] font-medium text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                        </Card>
                        <p className="border border-gray-800 p-8 rounded-2xl text-4xl">
                            Ventures
                        </p>
                        <p className="border border-gray-800 p-8 rounded-2xl text-4xl">
                            Capital Markets
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image
                        src={servicesImg}
                        width={450}
                        height={450}
                        className="object-cover rounded-3xl"
                        alt="hero"
                    />
                </div>
            </div>
        </div>
    );
}