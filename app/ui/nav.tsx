'use client'

import Link from "next/link";
import clsx from "clsx";
// import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Home',
        href: '/',
        className: 'text-sm'
    },
    {
        name: 'About',
        href: '/about',
        className: 'text-sm'
    },
    {
        name: 'Contact',
        href: '/contact',
        className: 'text-sm'
    },
    {
        name: 'ENROL',
        href: '/enrol',
        class: 'font-black px-6 py-3 bg-blue text-[#fff] text-xl rounded-lg'
    },
]

const nav = () => {
    // const pathname = usePathname();
    return ( 
        <div className="flex space-x-[50px] max-w-[60%] text-grey">
            {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex items-center ${link.class}`,
              // {
              //   'font-bold text-blue': pathname === link.href,
              // },
            )}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
        </div>
     );
}
 
export default nav;