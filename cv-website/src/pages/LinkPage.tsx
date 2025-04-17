import '../css/LinkPage.css'
import { Link } from 'react-router-dom';

// NOTE: Make sure you attach namespaces to your custom CSS sheets and classes. Classes that share the same
// name across React components will collide with each other
function LinkPage(){

    return <div className="h-full text-5xl fixed top-0 inset-x-0 text-center bg-zinc-900">
        <header className='linkpage-header-text text-slate-200 mt-2 mb-2'>Richard Bassin</header>
        {/* the below text works as h3 but not as p. Weird! */}
        <h3 className='text-slate-200 mt-2 mb-12 text-sm'>These are my links!</h3>
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute home-formatting-div"></div>
        <ul> 
        {/* The links will go in  here */}
            <li className='linkpage-list-link'>
                <div className="linkpage-link-container">
                    <Link to="/" className="linkpage-link-button">My Homepage</Link>
                </div>
            </li>
            <li className='linkpage-list-link'>
                <div className="linkpage-link-container">
                    <Link to="/graphics" className="linkpage-link-button">RABTees</Link>
                </div>
            </li>
        </ul>
    </div>
}

export default LinkPage