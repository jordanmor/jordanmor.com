import React from 'react';
import Card from './card';

const Contact = () => {

  const contacts = [
    {title: "Twitter", icon: ['fab', 'twitter'], url: "https://twitter.com/imjordanmor"},
    {title: "LinkedIn", icon: ['fab', 'linkedin'], url: "https://www.linkedin.com/in/jordanmor/"},
    {title: "GitHub", icon: ['fab', 'github'], url: "https://github.com/jordanmor"},
    {title: "Email", icon: "envelope", url: "mailto:hi@jordanmor.com"}
  ];

  return (
    <div className="page">
      <main className="contact-wrapper">
        <div className="contact">
          <h1>Contact Me</h1>
          <ul>
            {contacts.map( (contact, index) => (
              <Card 
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