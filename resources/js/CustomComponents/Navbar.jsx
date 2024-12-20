import { navbarLinks } from "@/Constants/StaticData";
import { useEffect, useRef, useState } from "react";

import { Menu, X } from "lucide-react";
import { usePage } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import { checkIfRoleIsAdmin } from "@/Libs/utils";

const Navbar = () => {
    const { auth } = usePage().props;

    const sidebarRef = useRef();
    const navbarRef = useRef();

    const [toggleIcon, setToggleIcon] = useState(true);
    
    let adminRole = checkIfRoleIsAdmin(auth.roles);

    const toggleSidebar = () => {
        sidebarRef.current.classList.toggle("active");
        setToggleIcon((prev) => !prev);
    };

    useEffect(() => {
        window.onscroll = function () {
            scrollFucntion();
        };

        const scrollFucntion = () => {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                navbarRef.current.classList.add("shadow-xl");
              
            } else {
                navbarRef.current.classList.remove("shadow-xl");
            }
        };
    }, []);

    return (
        <div
            ref={navbarRef}
            className="w-full fixed bg-black  left-1/2 -translate-x-1/2  z-[100000] transition-all"
        >
            <div className="w-full  flex-between px-10 h-[80px]">
                <div className="-ml-5 cursor-pointer px-5" onClick={() => window.location.href = '/'}>
                    <img
                        className="h-auto w-[150px]"
                        src="/assets/logo.png"
                        alt="logo"
                    />
                </div>
                <ul className="hidden lg:flex gap-3 items-center">
                    {navbarLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                className={`${
                                    window.location.pathname === link.path
                                        ? "text-white"
                                        : ""
                                } hover:text-white transition-all cursor-pointer font-bold`}
                                href={link.path}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {adminRole && (
                        <li>
                            <a
                                className="hover:text-white transition-all font-bold cursor-pointer"
                                href="/admin"
                            >
                                Админ
                            </a>
                        </li>
                    )}
                </ul>

                <div className="flex items-center gap-3">
                    {auth.user ? (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md bg-[var(--mainDarkLightColor)] text-white focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {auth.user.name}

                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Профил
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Изход
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <a className="text-white hidden lg:flex" href="/login">
                            <button className="fill-red-button">Вход</button>
                        </a>
                    )}
                    <Menu
                        className="flex lg:hidden text-red-600 cursor-pointer"
                        size={30}
                        onClick={toggleSidebar}
                    />
                </div>
            </div>

            <div className="sidebar" ref={sidebarRef}>
                <X
                    className="absolute right-5 top-5 flex lg:hidden text-[#dc2626] cursor-pointer"
                    size={30}
                    onClick={toggleSidebar}
                />
                <img
                    src="/assets/logo.png"
                    className="h-auto w-[150px]"
                    alt="logo"
                />
                <ul className="flex-col-3 flex-center">
                    {navbarLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                className={`${
                                    window.location.pathname === link.path
                                        ? "text-white text-underline"
                                        : ""
                                } hover:text-white transition-all font-bold text-xl cursor-pointer`}
                                href={link.path}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {adminRole && (
                        <li>
                            <a
                                className="hover:text-white font-bold text-xl transition-all cursor-pointer"
                                href="/admin"
                            >
                                Админ
                            </a>
                        </li>
                    )}
                </ul>
                {auth.user ? (
                    ""
                ) : (
                    <a className="text-white mx-auto" href="/login">
                        <button className="fill-red-button w-[200px]">Вход</button>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Navbar;
