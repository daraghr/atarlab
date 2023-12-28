import Link from "next/link";

const links = [
    {
        name: 'Home',
        href: '/',
        class: 'text-sm'
    },
    {
        name: 'About',
        href: '/about',
        class: 'text-sm'
    },
    {
        name: 'Contact',
        href: '/contact',
        class: 'text-sm'
    },
    {
        name: 'ENROL',
        href: '/enrol',
        class: 'font-black px-6 py-3 bg-blue text-[#fff] text-xl rounded-lg'
    },
]

const nav = () => {
    return ( 
        <div className="flex space-x-[50px] max-w-[60%] text-grey">
            {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              `flex items-center ${link.class}`
            }
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
        </div>
     );
}
 
export default nav;