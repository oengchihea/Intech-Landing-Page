import React from 'react';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              "Empowering smarter workplaces with innovative solutions – InTech."
            </h3>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('products');
                  }}
                  className="hover:underline"
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">
              Green Access 1, 2 And 3, Thnov Village, Chahouk Commune, Phnom Srouch District, Kampong Speu Province, Cambodia
            </p>
            <p className="mb-4">012 345 678</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://www.gstatic.com/images/icons/material/system/2x/send_white_24dp.png" alt="Telegram" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://www.gstatic.com/images/icons/material/system/2x/photo_camera_white_24dp.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://www.gstatic.com/images/icons/material/system/2x/facebook_white_24dp.png" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
