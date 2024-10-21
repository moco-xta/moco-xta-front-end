import { navLists } from '../../../constants'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <img
          src={imgConstants.JAVASCRIPT_MASTERY.APPLE_SVG}
          alt='Apple'
          width={14}
          height={18}
        />

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div
              key={nav}
              className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'
            >
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img
            src={imgConstants.JAVASCRIPT_MASTERY.BAG_SVG}
            alt='search'
            width={18}
            height={18}
          />
          <img
            src={imgConstants.JAVASCRIPT_MASTERY.SEARCH_SVG}
            alt='bag'
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
