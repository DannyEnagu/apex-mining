import Image from "next/image";
import ApexLinkButton from "../ui/ApexLinkButton";
import visionImg from "@/app/assets/images/hero.jpg"
import ClipText from "../ClipText";

export default function Vision() {
    return (
        <div className="containerWidth mx-auto py-32">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-8">
                        <ClipText>
                            What is Apex Mining Vision?
                        </ClipText>
                    </h2>
                    <p className="text-lg text-[#A0A0A0] w-[90%]">
                        To be the leading investment platform in Africa, providing
                        innovative investment solutions to the African populace.
                        To provide innovative investment solutions to the African populace
                        through technology and financial inclusion.
                    </p>
                    <div className="mt-8">
                        <ApexLinkButton
                            href="#"
                            label="Investors Relations"
                            iconClass="text-gray-800 border-transparent bg-white"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image
                        src={visionImg}
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