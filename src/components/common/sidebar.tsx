import type React from 'react'
import avatar from '../../assets/myAvatar.svg'
import { type LucideProps, Briefcase, ShoppingCart, Mail, Home } from 'lucide-react'
import { usePageContext } from 'vike-react/usePageContext'
import { clsx } from 'clsx'


// TODO : add sidebar for mobile devices 
export default function Sidebar() {

  type linkProps = {
    name: string
    href: string
    reactIcon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
  }

  const links: linkProps[] = [
    {
      name: 'Home',
      href: '/',
      reactIcon: Home
    },

    {
      name: 'My Projects',
      href: '/projects',
      reactIcon: Briefcase
    },
    {
      name: 'My Services',
      href: '/services',
      reactIcon: ShoppingCart
    },
    {
      name: 'Contact me',
      href: '/contact',
      reactIcon: Mail
    },

  ]

  const pageContext = usePageContext()

  const { urlPathname } = pageContext

  const isActiveUrl = (href: string): boolean => {
    return href === "/" ? urlPathname === href : urlPathname.startsWith(href)
  }


  return (
    <div className='hidden lg:block flex-col border-r-2 border-r-gray-900/10 p-4 w-auto min-h-screen bg-[#1c1c1c]'>
      <div className='mt-12'>
        <div className='flex flex-col gap-y-8'>
          <div className='flex space-x-4'>
            <img src={avatar} height={50} width={50} alt='avatar' className='object-cover border-2 border-white rounded-full' />
            <div className='flex flex-col gap-y-2'>
              <p className='text-sm text-center text-white'>
                Emmanuel Ezeagwula
              </p>
              <p className='text-sm text-gray-500'>
                Software Developer
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            {
              links.map((link: linkProps) => (
                <div key={link.name}>
                  <div className='flex flex-col'>
                    <div className={clsx('flex text-zinc-400 hover:text-white cursor-pointer p-2 rounded-md space-x-2 ', {
                      'bg-[#2b2b2b]': isActiveUrl(link.href)
                    })
                    }>
                      {<link.reactIcon size={20} />}
                      <a href={link.href}><span>{link.name}</span></a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}

