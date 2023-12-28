import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Logo from '../ui/logo';

const footer = () => {
    return ( 
        <div className='w-full flex flex-row text-black bg-lightblue px-6 py-10'>
            <div className='self-start flex-1'>
                <h2 className='font-bold mb-3'>Links</h2>
                <div className='flex flex-col space-y-2 text-[#474747]'>
                    <a className="hover:text-black hover:font-medium" href="/about">About</a>
                    <a className="hover:text-black hover:font-medium" href="/contact">Contact</a>
                    <a className="hover:text-black hover:font-medium" href="/terms-and-conditions">Terms and Conditions</a>
                    <a className="hover:text-black hover:font-medium" href="/privacy-policy">Privacy Policy</a>
                </div>
            </div>
            <div className='flex-1 flex items-center'>
                <div className='mx-auto'>
                    <Logo className="w-[180px] h-min"/>
                    <p className='text-xs'>By Students, For Students</p>
                </div>
                
            </div>
            <div className='flex-1 text-right'>
                <h2 className='font-bold mb-2'>Contact</h2>
                <div className='flex flex-col space-y-2 text-[#474747]'>
                    <a className="hover:text-black hover:font-medium" href="mailto:contact@atarlabs.com.au">contact@atarlabs.com.au</a>
                    <a className="hover:text-black hover:font-medium" href="tel:+61400000000">+61 400 000 000</a>
                    <div className='flex flex-row justify-end space-x-2 '>
                        <a href="javascript:void(0)"><FontAwesomeIcon className="w-6 h-6" icon={faInstagram} style={{color: "#ffffff",}} /></a>
                        <a href="javascript:void(0)"><FontAwesomeIcon className="w-6 h-6" icon={faFacebook} style={{color: "#ffffff",}} /></a>
                        <a href="javascript:void(0)"><FontAwesomeIcon className="w-6 h-6" icon={faTiktok} style={{color: "#ffffff",}} /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default footer;