import React from 'react';
import Button from './button';

const Contact = () => {

  const contacts = [
    {title: "GitHub", icon: ['fab', 'github'], url: "https://github.com/jordanmor"},
    {title: "LinkedIn", icon: ['fab', 'linkedin'], url: "https://www.linkedin.com/in/jordanmor/"},
    {title: "Twitter", icon: ['fab', 'twitter'], url: "https://twitter.com/imjordanmor"},
    {title: "Email", icon: "envelope", url: "mailto:hi@jordanmor.com"}
  ];

  return (
    <div className="page">
      <main className="contact-wrapper">
        <div className="contact">
          <h1>Contact</h1>
          <ul>
            {contacts.map( (contact, index) => (
              <Button 
                key={index}
                title={contact.title} 
                icon={contact.icon}
                url={contact.url}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
   );
}
 
export default Contact;