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
        className='flex items-start -m-3 p-3 rounded-lg hover:opacity-75 focus:outline-none focus:ring focus:ring-teal/50'
      >
        {page}
      </a>
    </Link>
  )
}

export default NavLink
