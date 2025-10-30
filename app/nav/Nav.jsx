'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Page = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const pathename = usePathname();


    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isDrawerOpen]);

    return (
        <>
            <div
                style={{
                    maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
                }}
                className="sticky px-10 md:px-50  top-0 z-50 backdrop-blur-sm  border-none inset-0"
            >
                <ul className="flex h-24 items-center justify-between px-4 md:px-0">
                    <li>
                        <Link href="/" className="hover:text-[#a6e3a1] font-bold text-xl flex items-center transition-colors">
                            ~{pathename}
                        </Link>
                    </li>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8">
                        <li>
                            <Link href="/about" className="hover:text-[#a6e3a1] transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/project" className="hover:text-[#a6e3a1] transition-colors">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <a href="/resume.pdf?view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#a6e3a1] transition-colors">
                                Resume
                            </a>
                        </li>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleDrawer}
                        className="md:hidden text-3xl hover:text-[#a6e3a1] transition-colors z-50 cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <IoMdMenu />
                    </button>
                </ul>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeDrawer}
            />

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#1e1e2e] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Close Button */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={closeDrawer}
                            className="text-3xl hover:text-[#a6e3a1] transition-colors cursor-pointer"
                            aria-label="Close menu"
                        >
                            <IoMdClose />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-6 px-8 mt-8">
                        <Link
                            href="/about"
                            onClick={closeDrawer}
                            className="text-xl hover:text-[#a6e3a1] transition-colors py-3 border-b border-gray-700"
                        >
                            About
                        </Link>
                        <Link
                            href="/project"
                            onClick={closeDrawer}
                            className="text-xl hover:text-[#a6e3a1] transition-colors py-3 border-b border-gray-700"
                        >
                            Project
                        </Link>
                        <a
                            href="/resume.pdf?view"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeDrawer}
                            className="text-xl hover:text-[#a6e3a1] transition-colors py-3 border-b border-gray-700"
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Page;