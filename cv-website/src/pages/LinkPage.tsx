import '../css/LinkPage.css'

// NOTE: Make sure you attach namespaces to your custom CSS sheets and classes. Classes that share the same
// name across React components will collide with each other
function LinkPage(){

    return <div className="h-full text-5xl fixed top-0 inset-x-0 text-center bg-zinc-900">
        <header className='linkpage-header-text text-slate-200 mb-12'>The Header!</header>
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute home-formatting-div"></div>
        <ul> 
        {/* The links will go in  here */}
            <li className='linkpage-page-link'>
                <a>A link</a>
            </li>
            <li className='linkpage-page-link'>
                <a>Another link</a>
            </li>
        </ul>
    </div>
}

export default LinkPage