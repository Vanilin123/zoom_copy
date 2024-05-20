import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const LayoutHome = ({children}:Readonly<{
	children: React.ReactNode;
}>) => {
	return (
	<main className="relative">
		<Navbar/>
		
		
		<div className='flex'>
			<Sidebar/>
			<section className='flex flex-1 flex-col min-h-screen px-6 pt-28 pb-6 max-md:pb-14 sm:px-14'>
				<div className='w-full'>
					{children}
				</div>
			</section>
		</div>
	</main>
	)
}
export default LayoutHome
