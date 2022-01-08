import Link from 'next/link'

export interface NavLinkProps {
  page: string
  route: string
}

const NavLink = ({ page, route, ...props }: NavLinkProps) => {
  return (
    <Link href={route}>
      <a
        {...props}
        className='-m-3 p-3 flex items-start font-serif text-xl rounded-lg text-white hover:opacity-75 focus:outline-none focus:ring focus:ring-teal focus:ring-opacity-50 rounded'
      >
        {page}
      </a>
    </Link>
  )
}

export default NavLink
