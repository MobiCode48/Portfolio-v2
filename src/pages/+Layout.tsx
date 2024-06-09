import Sidebar from '../components/common/Sidebar';
import '../styles/tailwind.css'
import type React from "react";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 w-full min-h-screen p-6'>
          {children}
        </div>
      </div>
    </body >
  );
}


