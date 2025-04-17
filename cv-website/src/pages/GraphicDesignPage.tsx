import { Graphic } from '../models/Graphic'
import ImageCarousel from '../components/ImageCarousel';
import BusinessOne from '../assets/business_1.png';
import BusinessTwo from '../assets/business_2.png';
import BusinessThree from '../assets/business_3.png';
import BusinessFour from '../assets/business_4.png';
import GamingLogoOne from '../assets/gaming_1.png';
import GamingLogoTwo from '../assets/gaming_2.png';
import GamingLogoThree from '../assets/gaming_3.png';
import GamingLogoFour from '../assets/gaming_4.png';
import ContactForm from '../components/ContactForm';


import '../css/GraphicDesignPage.css'

function GraphicDesignPage() {

  const gamingItems = [
    new Graphic("Gaming 1", GamingLogoOne),
    new Graphic("Gaming 2", GamingLogoTwo),
    new Graphic("Gaming 3", GamingLogoThree),
    new Graphic("Gaming 4", GamingLogoFour),
  ];

  const businessItems = [
    new Graphic("Business 1", BusinessOne),
    new Graphic("Business 2", BusinessTwo),
    new Graphic("Business 3", BusinessThree),
    new Graphic("Business 4", BusinessFour),
  ]

  return (
    // We are trying to build more than 1 carousel. Do one for t shirts and one for logos.
    // I think most graphic design showcases are kind of bloated. I want to keep mine simple and compact.
    <div className="h-full fixed overflow-auto top-0 inset-x-0 text-center bg-zinc-900">
      <header className='linkpage-header-text text-slate-200 mt-2 mb-4'>RABTees</header>
      <h5 className='text-sm text-slate-200 mt-2 mb-4'>You want it? We make it!</h5>
      <ImageCarousel graphics={gamingItems}/>
      <h5 className='text-sm text-slate-200 mt-8 mb-1'>Hi, I’m a creative graphic designer with 5 years of experience bringing bold ideas to life through visual storytelling.</h5>
      <h5 className='text-sm text-slate-200 mt-1 mb-1'>I specialize in creating eye-catching designs that blend function with aesthetics, whether it’s branding, digital media, or print.</h5>
      <h5 className='text-sm text-slate-200 mt-2 mb-2'>I’ve worked on a variety of projects—from crafting logos for startups to designing social media campaigns that engage and inspire.</h5>
      <h5 className='text-sm text-slate-200 mt-1 mb-1'>Let’s create something amazing together!</h5>
      <ImageCarousel graphics={businessItems}/>
      {/* Place contact form inside appropriately sized div first */}
      <div className='mt-8 text-slate-400 graphic-design-page-form-container'>
        <ContactForm/>
      </div>
    </div>
  )
}

export default GraphicDesignPage