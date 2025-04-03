import '../css/HomePage.css'

function HomePage() {
    return <div className="home">
        <div className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute home-formatting-div'></div>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 columnar-formatting">
            <div className='lg:flex lg:justify-between lg:gap-4'>
                {/* 2 columnar divs go in here */}
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>Some text goes in here!</h1>
                        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>More text goes in here!</h2>
                        <p className='mt-4 max-w-xs leading-normal'>This is a bio! Does it work as intended?</p>
                        <nav className='nav hidden lg:block'>
                            <ul className='mt-16 w-max'>
                                <li>
                                    <a className='group flex items-center py-3 active'>
                                        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'>

                                        </span>
                                        <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                                            About
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className='group flex items-center py-3'>
                                        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'>

                                        </span>
                                        <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                                            Experience
                                        </span>
                                    </a>    
                                </li>
                                <li>
                                    <a className='group flex items-center py-3'>
                                        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'>

                                        </span>
                                        <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                                            Contact
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ul className='ml-1 mt-8 flex items-center'>

                    </ul>
                </header>
                <main id='content' className='pt-24 lg:w-[52%] lg:py-24'>

                </main>
            </div>
        </div>
    </div>
}

export default HomePage