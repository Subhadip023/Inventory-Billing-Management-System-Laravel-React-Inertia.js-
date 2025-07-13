import CollapsibleDiv from '@/Components/Dashboard/CollabsableDiv';
import CollabsableSubLink from '@/Components/Dashboard/CollabsableSubLink';
import DashboardLink from '@/Components/Dashboard/DashboardLink';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
function DashboardLayout({ heading, children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <section>
            <Head title={heading || "Dashboard"} />

            <section className="w-screen h-screen flex overflow-hidden">
                {/* Sidebar */}
                <section className={`${isSidebarOpen ? 'w-1/6' : 'w-0'} bg-primary h-screen duration-200`}>
                    <section className="text-4xl pb-3 text-center text-accent font-bold mt-2">
                        <Link href={route('dashboard')}>AppName</Link>
                    </section>

                    {/* Scrollable content section */}
                    <section className="h-[95vh] overflow-y-auto flex flex-col w-full py-2 text-light scrollbar-thin scrollbar-thumb-light scrollbar-track-sidebar pt-10 hover:text-accent  ">
                        <CollapsibleDiv title='Products' isActive={route().current('product.index')}>
                            {/* <DashboardLink name='Products' href={route('product.index')} active={route().current('product.index')} /> */}
                           <CollabsableSubLink name='All products' href={route('product.index')} active={route().current('product.index')} />

                        </CollapsibleDiv>


                    </section>
                </section>

                {/* Main content */}
                <main
                    className={`${isSidebarOpen ? 'w-5/6' : 'w-full'
                        } bg-light text-dark
           h-screen duration-200 `}
                >
                    <nav className="w-full flex navbar bg-color-3 h-[6.5vh] items-center border-b-2 border-primary">
                        <div className="w-[5%] h-full flex items-center">
                            <svg
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                fill="currentColor"
                                className="hover:text-accent duration-250 bi bi-list"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                                />
                            </svg>

                        </div>

                    </nav>
                    <div className='p-5 h-[93.5vh] overflow-y-auto'>
                        {children}
                    </div>
                </main>
            </section>
        </section>)
}

export default DashboardLayout