import Image from "next/image";
import Button from "@/components/ui/Button";
import heroImg from "@/app/assets/images/hero.jpg"
import { Chip } from "primereact/chip";
import ClipText from "./ClipText";

export default function Hero() {
    return (
        <section className="hero containerWidth mx-auto flex items-between gap-4">
            <div className="flex flex-col items-center md:items-start justify-center gap-12 flex-1">
                <Chip label="100% Transparent" className="!bg-transparent border border-[#D9D8D8] !rounded-full text-sm !text-[#D9D8D8]" />
                <h1 className="text-5xl text-center md:text-left">
                    <ClipText>
                        <span className="font-bold">
                            Investment
                        </span> <br />
                        <span className="font-medium">
                            for The Future !
                        </span>
                    </ClipText>
                </h1>
                
                <p className="text-[#A0A0A0] text-center md:text-left w-[85%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, temporibus?
                
                </p>
                <div className="space-x-5">
                    <Button
                        label="Get Started"
                        iconClass="text-gray-800 border-transparent bg-white"
                    />
                    <Button
                        label="Our Story"
                        iconClass="!text-[#CFFF24] border-[#A0A0A0]"
                        outlined
                    />
                </div>
            </div>
            <div className="hidden md:flex items-center justify-end flex-1">
                <Image
                    src={heroImg}
                    width={450}
                    height={450}
                    className="object-cover rounded-3xl"
                    alt="hero"
                />
            </div>
        </section>
    );
}