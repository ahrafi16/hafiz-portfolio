import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
        }} className="sticky top-0 z-50 backdrop-blur-sm border-none inset-0">
            <ul className="flex h-24 items-center justify-between">
                <li>
                    <Link href="/" className="hover:text-blue-300 transition-colors">
                        Home
                    </Link>
                </li>
                <div className="flex gap-8">
                    <li>
                        <Link href="/about" className="hover:text-blue-300 transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/project" className="hover:text-blue-300 transition-colors">
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume" className="hover:text-blue-300 transition-colors">
                            Resume
                        </Link>
                    </li>
                </div>
            </ul>
        </div>

    );
};

export default page;