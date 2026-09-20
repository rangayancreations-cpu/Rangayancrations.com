import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  FileCheck2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [subject, setSubject] = useState('GeM Tender & BOQ Support');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Rangayan Creations Team,\n` +
      `My Name: ${name || 'Prospective Partner'}\n` +
      `Organization: ${department || 'N/A'}\n` +
      `Subject: ${subject}\n` +
      `Message: ${message || 'I would like to discuss enterprise IT equipment and quotation.'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-white border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-800 mb-2 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-orange-600" />
            <span>Lucknow Headquarters & Engineering Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Our Engineering Team
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Reach out for enterprise pricing, GeM bid assistance, technical Bill of Materials validation, or on-site deployment across Uttar Pradesh and India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info & Office Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <span>Rangayan Creations Private Limited</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      Registered Office & Staging Hub
                    </div>
                    <div className="text-slate-900 font-semibold mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      Technical Sales & Helpdesk
                    </div>
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-slate-900 font-extrabold text-sm hover:text-orange-600 transition-colors block mt-0.5"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <div className="text-[11px] text-slate-500">Direct phone call & WhatsApp support</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      Email Inquiries & Tender Documents
                    </div>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-900 font-bold hover:text-orange-600 transition-colors block mt-0.5 font-mono text-xs"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <a 
                      href={`mailto:${COMPANY_INFO.altEmail}`}
                      className="text-slate-500 hover:text-orange-600 transition-colors block font-mono text-xs"
                    >
                      {COMPANY_INFO.altEmail}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      Business & Warehouse Operating Hours
                    </div>
                    <div className="text-slate-900 font-medium mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </div>
                    <div className="text-[11px] text-slate-500">Emergency SLA support available 24x7</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Action Button */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Rangayan%20Creations%2C%20I%20am%20reaching%20out%20via%20rangayancreations.com%20to%20inquire%20about%20hardware%20procurement.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 63077 77824)</span>
                </a>
              </div>
            </div>

            {/* GeM Compliance Badge Box */}
            <div className="bg-orange-50/70 border border-orange-200 rounded-xl p-4 flex items-center gap-3 text-xs text-slate-700 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <span className="text-slate-900 font-bold block">GeM Registered & Bid-Verified</span>
                <span className="text-slate-600">Authorized for direct government purchases and custom tender BOQ fulfillment.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900 mb-1">
              Send an Official Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your contact and project details. Our network engineers will respond with technical parameters and pricing.
            </p>

            {sent ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2">Message Sent Successfully</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out to Rangayan Creations. A technical consultant from our Gomti Nagar office has received your inquiry and will contact you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Procurement Officer / Authorised Signatory"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      Organization / Department *
                    </label>
                    <input
                      type="text"
                      required
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      placeholder="e.g. UP State University / PWD / Corp"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Nature of Inquiry / Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-orange-500"
                  >
                    <option value="GeM Tender & BOQ Support">GeM Tender & BOQ Support (Tender Validation)</option>
                    <option value="Bulk Hardware Procurement (Switches/Routers/Servers)">Bulk Hardware Procurement (Switches / Routers / Servers)</option>
                    <option value="Turnkey Educational Lab / Smart Classroom Setup">Turnkey Educational Lab / Smart Classroom Setup</option>
                    <option value="Campus Structured Cabling & Fiber Laying">Campus Structured Cabling & Fiber Laying</option>
                    <option value="Annual Maintenance Contract (AMC / FMS)">Annual Maintenance Contract (AMC / FMS)</option>
                    <option value="General Technical Consultation">General Technical Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Project Requirements / Hardware List *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify part numbers, target quantities, timeline, delivery district, and any OEM brand preferences..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all shadow-md shadow-orange-600/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Official Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-5 rounded-xl text-xs transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
