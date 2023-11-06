/* import { Link, NavLink } from "@remix-run/react"

const pages = [
    { name: "Twitchin In The Kitchen", href: '/store/twitchin' },
    { name: 'Developer Collection', href: '/store/developer' },
    { name: 'Community Collection', href: '/store/community' },
]

export default function CollectionMenu() {
    return (
        <nav className="flex items-center justify-center p-2 md:p-4 lg:p-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
                {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                        <svg
                            className="h-5 w-5 flex-shrink-0 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                        <Link to={page.href} className="ml-4 text-sm font-medium">
                            <NavLink 
                                to={page.href}
                                className={({ isActive }) => (isActive ? 'text-logopink' : 'text-indigo-500 hover:text-logopink')}
                                >{page.name}
                            </NavLink>
                        </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
} */