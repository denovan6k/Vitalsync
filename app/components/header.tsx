import React from 'react'
import Drawer from './drawer'

const Header = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-end lg:hidden'>
        <Drawer/>
      </div>
    <div className='flex justify-between '>
    <ul className='flex flex-col gap-4 text-black'>
     <li className='text-3xl'>
     Health Overview
     </li>
     <li className='text-[#6A6969]'>
     August 12, 2021
     </li>
    </ul>
    <ul className='flex gap-4'>
      
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clipPath="url(#clip0_867_3835)">
    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875V15.875Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_867_3835">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clipPath="url(#clip0_867_3839)">
    <path d="M5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM12 2C16.97 2 21 6.043 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21V21Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_867_3839">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>

    </ul>
    </div>
    </div>
  )
}

export default Header