import React, { Fragment } from 'react'

export default function HeaderTitle({ title }: { title: string }) {
  return (
    <Fragment>
      <div className='flex flex-col'>
        <h1 className='text-lg font-bold text-white lg:text-2xl w-fit'>
          {title}
          <hr />
        </h1>
      </div>
    </Fragment>
  )
}
