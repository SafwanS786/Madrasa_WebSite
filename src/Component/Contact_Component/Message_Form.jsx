// import React from "react";

// export default function Message_Form() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
//               Send Us a Message
//             </h1>
//             <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
//               Fill out the form below and we'll get back to you within 4 hours
//               during business hours.
//             </p>
//             <div className="text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 relative overflow-hidden bg-white shadow-xl mt-20">
//               <div className="p-12 [&:last-child]:pb-6"></div>
//               <form className="bg-white shadow-xl rounded-xl  p-12 space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium ">
//                       First Name*
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter Your Name"
//                       className="w-full bg-[#f3f3f5] text-muted-foreground rounded-lg p-4 outline-none"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { ArrowRight, Send } from "lucide-react";

export default function Message_Form() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              Send Us a Message
            </h1>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 4 hours
              during business hours.
            </p>
          </div>

          {/* Form Card */}
          <form className="bg-white shadow-xl rounded-xl border border-gray-200 p-12 space-y-6">
            {/* First + Last Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name *</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full bg-[#f3f3f5] rounded-lg p-4 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name *</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full bg-[#f3f3f5] rounded-lg p-4 outline-none"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address *</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#f3f3f5] rounded-lg p-4 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-[#f3f3f5] rounded-lg p-4 outline-none"
                />
              </div>
            </div>

            {/* Institution + Role */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Institution Name</label>
                <input
                  type="text"
                  placeholder="Enter your madrasa/school name"
                  className="w-full bg-[#f3f3f5] rounded-lg p-4 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Role</label>
                <select className="w-full bg-[#f3f3f5] rounded-lg p-4 outline-none">
                  <option>Select your role</option>
                  <option>Administrator</option>
                  <option>Teacher</option>
                  <option>Parent</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <select className="w-full bg-[#f3f3f5]  rounded-lg p-4 outline-none">
                <option className="">Schedule a Demo</option>
                <option>Pricing Questions</option>
                <option>Feature Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Message *</label>
              <textarea
                rows={4}
                placeholder="Tell us more about how we can help you..."
                className="w-full bg-[#f3f3f5] rounded-lg p-4 outline-none"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-[#333]">
                I'd like to receive updates about new features and educational
                resources
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 px-6 py-4 text-lg  text-white font-medium rounded-lg bg-gradient-to-r from-[#126F77] to-[#EB6319] hover:opacity-90 transition"
            >
              <Send size={18} />
              Send Message
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
