'use client'
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import MenuIcon from "@/public/svg/MenuIcon";
import Image from "next/image";
import Link from "next/link";
import ColoredImageCard from "../card/ColoredImageCard";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const menuRef = useRef(null);
    const menuContentRef = useRef(null);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";

            gsap.fromTo(menuRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });

            gsap.fromTo("#navbar_image", { fill: "none" }, { fill: "blue", duration: 2 });

            gsap.fromTo(
                menuContentRef.current.children,
                { opacity: 0 },
                { opacity: 1, duration: 2, delay: 0.5 }
            );
        } else {
            gsap.to(menuRef.current, { opacity: 0, duration: 1 });
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const navbarItems = [
        { title: "Seasons", to: "/seasons" },
        { title: "Projects", to: "/projects" },
        { title: "About", to: "/about" },
        { title: "Contact", to: "/contact" },
    ];

    if (!isMounted) return null;

    return (
        <>
            <nav className="hidden lg:flex justify-center items-center absolute top-0 w-full z-50 py-4">
                <ul className="flex items-center gap-10 lg:gap-20 relative">
                    {navbarItems.slice(0, navbarItems.length / 2).map((item, index) => (
                        <li key={index} className="text-2xl font-bold text-primary hover:text-secondary transition-all duration-200">
                            <Link href={item.to}>{item.title}</Link>
                        </li>
                    ))}

                    <li className="mx-6 lg:mx-10">
                        <Link href="/">
                            <Image src="/MaabarLogo.png" alt="Logo" width={80} height={80} className="w-16 h-16 lg:w-32 lg:h-20" />
                        </Link>
                    </li>

                    {navbarItems.slice(navbarItems.length / 2).map((item, index) => (
                        <li key={index + 2} className="text-2xl font-bold text-primary hover:text-secondary transition-all duration-200">
                            <Link href={item.to}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav className="block lg:hidden absolute top-0 w-full z-50 py-4 px-8">
                <div className="flex justify-between items-center z-20 relative">
                    <Link href="/">
                        <Image src="/MaabarLogo.png" alt="Logo" width={80} height={80} className="w-28 h-16" />
                    </Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <MenuIcon className="size-8" />
                    </button>
                </div>

                {isMenuOpen && (
                    <div
                        ref={menuRef}
                        className="absolute top-0 left-0 bg-black text-white w-screen h-screen flex flex-col items-start justify-center opacity-0"
                    >
                        <div ref={menuContentRef} className="relative mt-20 flex flex-col py-12 pb-0 px-8 gap-10 w-full h-full text-lg font-semibold">
                            {navbarItems.map((item, index) => (
                                <Link href={item.to} key={index} className="hover:text-secondary transition-all duration-200">
                                    {item.title}
                                </Link>
                            ))}
                            <div className="flex gap-2">
                                <i>EN</i> | <i className="text-secondary">AR</i>
                            </div>

                            <Image width={80} height={80} alt="navbar_photo" src={'/NavbarPhoto.png'} className="absolute w-full left-0 bottom-0 flex justify-center " />

                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
