import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-10 px-4 border-t border-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-white font-bold text-xl tracking-wider">
              LENS<span className="text-amber-500">CRAFT</span>
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Creating visual stories that captivate and inspire.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#hero" className="text-gray-400 hover:text-amber-500 text-sm uppercase transition-colors duration-300">
              Home
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-amber-500 text-sm uppercase transition-colors duration-300">
              Portfolio
            </a>
            <a href="#about" className="text-gray-400 hover:text-amber-500 text-sm uppercase transition-colors duration-300">
              About
            </a>
            <a href="#services" className="text-gray-400 hover:text-amber-500 text-sm uppercase transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="text-gray-400 hover:text-amber-500 text-sm uppercase transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Kuldeep Gawande. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="https://www.facebook.com/share/1By4vV2iws/?mibextid=wwXIfr" rel="noopener noreferrer" target="_blank" className="text-gray-500 hover:text-amber-500 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/_cooldeep__/profilecard/?igsh=MWJ5MHRpYzdjc3cy"  rel="noopener noreferrer" target="_blank"  className="text-gray-500 hover:text-amber-500 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://x.com/kuldeep17186314?s=21&t=SZR9oycoYtR8PgKX_D8z1w"  rel="noopener noreferrer" target="_blank"  className="text-gray-500 hover:text-amber-500 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            {/* <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
              <span className="sr-only">Vimeo</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6082-3.2679 4.2699-6.0258 6.4046-8.2898 6.4046-1.409 0-2.578-1.2837-3.5198-3.8537-.6548-2.323-1.3096-4.6452-1.9637-6.9686-.7258-2.5682-1.5028-3.8543-2.3318-3.8543-.1794 0-.8283.3829-1.9623 1.1458l-1.1766-1.4956c1.2268-1.0877 2.4428-2.1743 3.6558-3.2618C5.6198.7115 6.9298.0922 7.9798.0392c2.0489-.1939 3.3088 1.1804 3.7798 4.1222.5208 3.2218.8829 5.2249 1.0899 6.0097.6029 2.6633 1.2652 3.9937 1.9847 3.9937.5599 0 1.4088-.8705 2.5489-2.6106 1.1379-1.7392 1.7449-3.0649 1.8228-3.9721.1629-1.4995-.4349-2.2513-1.7898-2.2513-.6408 0-1.2977.1463-1.9747.4368 1.3099-4.3177 3.8198-6.4143 7.5287-6.2893 2.7468.0893 4.0418 1.845 3.8788 5.2698z" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;