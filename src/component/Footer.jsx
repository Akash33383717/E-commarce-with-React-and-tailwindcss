import React from 'react';
import img from '../assets/Nest(1).png'
import img1 from '../assets/Container(1).png'
import img2 from '../assets/img(1).png'
import img3 from '../assets/img.png'
const MapPinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-7.5-7.5 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72v4.71a2 2 0 0 1-.5 1.25l-2.43 2.43a18 18 0 0 0 7.35 7.35l2.44-2.43a2 2 0 0 1 1.25-.5h4.71a2 2 0 0 1 1.72 2v3z" />
  </svg>
);

const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.8 1.8 0 0 1-2.06 0L2 7" />
  </svg>
);

const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ShoppingBagIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" x2="21" y1="6" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);


// Mock data for the footer links
const footerLinks = {
  company: [
    "About Us",
    "Delivery Information",
    "Privacy Policy",
    "Terms & Conditions",
    "Contact Us",
    "Support Center",
    "Careers"
  ],
  account: [
    "Sign In",
    "View Cart",
    "My Wishlist",
    "Track My Order",
    "Help Ticket",
    "Shipping Details",
    "Compare Products"
  ],
  corporate: [
    "Become a Vendor",
    "Affiliate Program",
    "Farm Business",
    "Farm Careers",
    "Our Suppliers",
    "Accessibility",
    "Promotions"
  ],
  popular: [
    "Milk & Flavoured Milk",
    "Butter and Margarine",
    "Eggs Substitutes",
    "Marmalades",
    "Sour Cream and Dips",
    "Tea & Kombucha",
    "Cheese"
  ]
};

// Component for rendering a column of links
const LinkColumn = ({ title, links }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-green-500 inline-block pb-1">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-gray-600 hover:text-green-500 transition duration-150 text-sm"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Main Footer Component
const App = () => {
  // Placeholder URL for the Nest logo (200x50, green/yellow)
  const logoUrl = "https://placehold.co/200x50/34D399/FFFFFF?text=Nest+Mart+&+\nGrocery";
  
  // Placeholder URLs for App Store buttons
 
  const appStoreUrl = "https://placehold.co/150x45/000000/FFFFFF?text=App+Store";
  
  // Placeholder URL for Payment Gateway icons
  const paymentIconsUrl = "https://placehold.co/200x30/FFFFFF/0071C2?text=Visa+Mastercard+Amex";

  const ContactItem = ({ Icon, text, link, isLink = false }) => (
    <div className="flex items-start space-x-3">
      {/* Use the Icon component and apply Tailwind classes directly */}
      <Icon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
      <p className="text-gray-600 text-sm">
        {isLink ? (
          <a href={link} className="hover:text-green-600">
            {text}
          </a>
        ) : (
          text
        )}
      </p>
    </div>
  );

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-7">
          
  
          <div className="lg:col-span-2 space-y-6">
            <div>
                <img src={img} alt="" />
            </div>
            
            <p className="text-gray-600 text-sm max-w-xs">
              Awesome grocery store website template for a great shopping experience.
            </p>

            <div className="space-y-4 pt-2">
              <ContactItem
                Icon={MapPinIcon} 
                text="Address 5171 W Campbell Ave undefined Kent, Utah 57127 United States"
              />
              <ContactItem
                Icon={PhoneIcon} 
                text="Call Us : (+91) 540-025-124553"
                link="tel:+91540025124553"
                isLink={true}
              />
              <ContactItem
                Icon={MailIcon} 
                text="Email: sale@nest.com"
                link="mailto:sale@nest.com"
                isLink={true}
              />
              <ContactItem
                Icon={ClockIcon} 
                text="Hours 10:00 - 18:00, Mon - Sat"
              />
            </div>
          </div>

    
          <LinkColumn title="Company" links={footerLinks.company} />
          <LinkColumn title="Account" links={footerLinks.account} />
          <LinkColumn title="Corporate" links={footerLinks.corporate} />
          <LinkColumn title="Popular" links={footerLinks.popular} />

     
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-green-500 inline-block pb-1">Install App</h3>
            <p className="text-gray-600 text-sm">From App Store or Google Play</p>
            
            <div className="flex gap-1">
              <a href="#" aria-label="Download on Google Play">
                <img
                  src={img3}
                  className='rounded'

                />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <img
                  src={img2}
                  className='rounded'

                />
              </a>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-semibold text-gray-900">Secured Payment Gateways</h3>
        
              <img
                src={img1}
                alt="Secured Payment Gateways: Visa, Mastercard, American Express"
                className="w-full max-w-[200px]"
                onError={(e) => { e.target.onerror = null; e.target.src = "Payment Icons"; e.target.className = "text-gray-500 text-sm"; }}
              />
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nest Mart & Grocery. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default App;