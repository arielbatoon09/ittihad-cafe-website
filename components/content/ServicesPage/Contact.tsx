import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  return (
    <section className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>
              <p className="text-sm text-zinc-400 mb-6">
                Ready to join the high-speed gaming elite community? Drop by for a visit, book a slot, or get in touch with questions about our membership options and event dates.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-zinc-800">
              <img 
                src="/api/placeholder/550/250" 
                alt="Location Map" 
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <button 
              className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 rounded-md flex items-center gap-2 transition-colors"
            >
              <span>Get Directions</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-2">First Name</label>
                <input 
                  id="firstName"
                  placeholder="Enter First Name"
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm mb-2">Last Name</label>
                <input 
                  id="lastName"
                  placeholder="Enter Last Name"
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">Email</label>
              <input 
                id="email"
                type="email"
                placeholder="Enter Email"
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2">Phone</label>
              <input 
                id="phone"
                placeholder="Enter Phone Number"
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm mb-2">Select Service</label>
              <div className="relative">
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-700"
                >
                  <option value="" disabled>Placeholder</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="booking">Book Gaming Session</option>
                  <option value="event">Event Hosting</option>
                  <option value="support">Technical Support</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">Message</label>
              <textarea 
                id="message"
                placeholder="Enter your message here..."
                rows={4}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700 resize-none min-h-[120px]"
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center justify-between  w-full">
              <div className="relative flex items-center">
                
                <input 
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 rounded border-zinc-600 text-yellow-500 focus:ring-yellow-500 bg-transparent"
                />
              </div>
            
             <label htmlFor="terms" className="text-xs text-zinc-400">
                I agree with Terms of Use and Privacy Policy
              </label>
              <Button className="px-8 bg-gradient-to-r from-brand-500 to-brand-900 text-white">
            Send Your Message
              </Button> 
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}