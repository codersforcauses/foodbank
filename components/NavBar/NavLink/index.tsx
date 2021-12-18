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
        className='px-4 py-1 font-serif text-xl text-white hover:opacity-75'
      >
        {page}
      </a>
    </Link>
  )
}

export default NavLink
