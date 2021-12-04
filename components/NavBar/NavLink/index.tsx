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
        className='-m-3 p-3 flex items-start font-serif text-xl rounded-lg text-white hover:opacity-75'
      >
        {page}
      </a>
    </Link>
  )
}

export default NavLink
