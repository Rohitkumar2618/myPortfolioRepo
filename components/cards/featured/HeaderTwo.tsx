import React, { FC } from 'react'


interface HeaderProps {
    title:string;
    tag:string;
}


const HeaderTwo:FC<HeaderProps> = ({title,tag}) => {
  return (
    <div className='flex flex-none flex-nowrap relative p-6 gap-4 w-full items-center justify-between h-16  border border-border rounded-3xl'>
{/* title */}
        <div >
            <p className='text-xl font-medium leading-6 text-primary-foreground'>{title}</p>
        </div>

        {/* tag */}
        <div >
            <p className='text-lg font-medium leading-6 text-primary-foreground'>{tag}</p>
        </div>

    </div>
  )
}

export default HeaderTwo
