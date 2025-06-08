export type NavLink = {
  id: number
  url: string
  link: string
  sublink: boolean
  submenu?: {
    id: number
    link: string
    url: string
  }[]
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    url: '#',
    sublink: false,
    link: 'Home',
  },
  {
    id: 2,
    url: '#',
    sublink: false,
    link: 'About',
  },
  {
    id: 3,
    url: '#',
    sublink: false,
    link: 'Destination',
  },
  {
    id: 4,
    url: '#',
    sublink: false,
    link: 'Blog',
  },
  {
    id: 5,
    url: '#',
    sublink: false,
    link: 'Dashboard',
  },
  {
    id: 6,
    url: '#',
    sublink: false,
    link: 'Contact',
  },
]
