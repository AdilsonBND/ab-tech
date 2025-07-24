'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface AboutButtonProps {
    href: string;
    title: string;
    avatarUrl: string;
}

export default function AboutButton({ href, title, avatarUrl }: AboutButtonProps) {
    return (
        <Link
            href={href}
            className="group inline-flex items-center border border-white/10 hover:border-white/10 hover:bg-white/5 rounded-full bg-transparent px-4 py-0.5 transition-all duration-300"
        >
            <Image
                src={avatarUrl}
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full -ml-3 mr-3 border border-white/10 hover:border-white/20"
            />
            <span className="text-white text-xs font-bold">{title}</span>
            <ChevronRightIcon
                className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 ml-2 -mr-1 group-hover:mr-0 group-hover:translate-x-1 transition-all duration-300"
            />
        </Link>
    );
}