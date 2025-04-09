
import { Mail, Phone, Linkedin, MapPin, Github } from 'lucide-react';

const contactInfo = [
  { 
    label: "Email", 
    value: "tanmay.offcial@gmail.com", 
    icon: <Mail className="text-portfolio-primary" size={20} /> 
  },
  { 
    label: "Phone", 
    value: "+91 6394830737", 
    icon: <Phone className="text-portfolio-primary" size={20} /> 
  },
  { 
    label: "LinkedIn", 
    value: "linkedin.com/in/tanmay-jaiswal28", 
    icon: <Linkedin className="text-portfolio-primary" size={20} /> 
  },
  { 
    label: "Location", 
    value: "Kanpur, India", 
    icon: <MapPin className="text-portfolio-primary" size={20} /> 
  },
  { 
    label: "GitHub", 
    value: "github.com/TanmayJaiswal28", 
    icon: <Github className="text-portfolio-primary" size={20} /> 
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Contact</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto animate-fade-in">
          <p className="text-portfolio-gray mb-8">
            Feel free to reach out to me for any opportunities or collaborations.
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-2 bg-portfolio-primary/10 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-portfolio-dark">{item.label}</p>
                  <p className="text-portfolio-gray">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
