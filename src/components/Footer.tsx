import { InputText } from "primereact/inputtext";
import ClipText from "./ClipText";
import Button from "./ui/Button";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="pt-32">
            <div className="containerWidth mx-auto">
                <div className="space-y-16">
                    <h2 className="text-4xl text-center font-bold">
                        <ClipText>
                            Let&apos;s Connect with <br /> ApexInvest
                        </ClipText>
                    </h2>
                    <form className="flex items-center justify-center">
                        <div className="card-glassmorphism flex items-center mt-4 rounded-full">
                            <InputText
                                type="email"
                                placeholder="Enter your email"
                                className="!bg-transparent flex-1 !rounded-s-full !py-1 !border-0"
                            />
                            <Button
                                type="submit"
                                label="Submit"
                                iconClass="text-gray-800 border-transparent bg-white"
                            />
                        </div>
                    </form>
                    <div className="flex flex-col md:flex-row-reverse justify-between gap-8 !mb-16">
                        <div>
                            <ul className="text-[#A0A0A0] text-xs leading-6 uppercase grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-4">
                                <li>
                                    <Link href="/" className="block">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="/" className="block">Risk Policy</Link>
                                </li>
                                <li>
                                    <Link href="/" className="block">Disclaimer</Link>
                                </li>
                                <li>
                                    <Link href="/" className="block">Careers</Link>
                                </li>
                                <li>
                                    <Link href="/" className="block">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="/" className="block">Cookie Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Link href="/" className="text-2xl font-medium !mb-4 block">
                                Logo
                            </Link>
                            <p className="text-[#A0A0A0] text-xs leading-6">
                                1234 Street Name, City Name, United States
                            </p>
                        </div>
                    </div>                
                </div>
            </div>
            <div className="border-t border-gray-800 py-4">
                <div className="containerWidth md:flex items-center justify-between mx-auto">
                    <p className="text-[#A0A0A0] text-xs">
                        &copy; 2024 ApexInvest. All rights reserved.
                    </p>
                    <ul className="flex items-center mt-4 text-[#A0A0A0] space-x-4 text-sm">
                        <li>
                            <Link
                                href="https://web.facebook.com/"
                                className="hover:text-[#3B5998]"
                                aria-label="facebook"
                             >
                                <i className="pi pi-facebook"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://twitter.com/"
                                className="hover:text-[#1DA1F2]"
                                aria-label="twitter"
                             >
                                <i className="pi pi-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.instagram.com/"
                                className="hover:text-[#C13584]"
                                aria-label="instagram"
                             >
                                <i className="pi pi-instagram"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.linkedin.com/"
                                className="hover:text-[#0077B5]"
                                aria-label="linkedin"
                             >
                                <i className="pi pi-linkedin"></i>
                            </Link>
                        </li>
                        <li className="text-lg">
                            <Link
                                href="https://www.linkedin.com/"
                                className="hover:text-[#FF0000]"
                                aria-label="youtube"
                             >
                                <i className="pi pi-youtube"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}