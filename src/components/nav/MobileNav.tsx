'use client';

import Link from 'next/link';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { Transition } from '@headlessui/react'
import clsx from "clsx";

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const toggleMobileMenu = () => {
        setOpen(!open);
    }
    return (
        <nav className="md:hidden">
            <div className="flex items-center justify-between px-6 mt-5">
                <Link href="/">
                    <span>Logo</span>
                </Link>
                <Button
                    icon="pi pi-bars"
                    rounded
                    className={clsx("",
                        open ? '!hidden !bg-transparent' : 'block !bg-[#CFFF24] !border-[#CFFF24]')}
                    aria-label='Open'
                    onClick={toggleMobileMenu}
                />
            </div>
            <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
            >
                <div className={clsx("fixed top-0 left-0 h-screen w-screen overflow-hidden z-20",
                    open ? 'block' : 'hidden'
                )}>
                    <div className="absolute inset-4 z-20 yellow-glassmorphism"></div>
                    <div className="relative z-20 p-8 h-full">
                        <div className="absolute top-4 right-4">
                            <Button
                                icon="pi pi-times"
                                size="large"
                                rounded
                                text
                                className="!text-[#CFFF24]"
                                aria-label='Close'
                                onClick={toggleMobileMenu}
                            />
                        </div>
                        <ul className="h-full pt-20 pb-4 flex flex-col items-center gap-20 text-3xl !text-[#CFFF24] font-bold">
                            <li>
                                <Link href="/">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <span>Contact</span>
                                </Link>
                            </li>
                            <li className="mt-auto font-normal text-base">
                                <Link href="/contact" className="rounded-full px-12 py-3 border border-[#CFFF24]">
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </nav>
    );
}