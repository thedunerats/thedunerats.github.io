import '../css/HomePage.css'

function HomePage() {
    return <div className="home">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div className='lg:flex lg:justify-between lg:gap-4'>
                {/* 2 columnar divs go in here */}
                <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                    <h1>Some text goes in here!</h1>
                    <h2>More text goes in here!</h2>
                    <p>This is a bio! Does it work as intended?</p>
                </header>
                <main id='content' className='pt-24 lg:w-[52%] lg:py-24'>

                </main>
            </div>
        </div>
    </div>
}

export default HomePage