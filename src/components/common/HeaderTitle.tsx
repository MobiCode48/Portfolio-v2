import React, { Fragment } from 'react'

export default function HeaderTitle({ title }: { title: string }) {
  return (
    <Fragment>
      <div className='flex flex-col'>
        <h1 className='text-2xl font-bold text-white w-fit'>
          {title}
          <hr />
        </h1>
      </div>
    </Fragment>
  )
}
