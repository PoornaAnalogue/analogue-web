import Footer from "../../../Components/Footer";
import GetAQuoteForm from "../../../Components/GetAQuoteForm";
import Navbar from "../../../Components/Navbar";
import Image from 'next/image';

export default function Contact(){
    return (
        <div>
            <Navbar />
            <div className="flex justify-center relative">
            <div className="mt-5">
            <Image src="/AbstractDesign.png" alt="Abstract deisgn" width={600} height={600} />
            </div>
            <div className="2xl:absolute 2xl:top-25 lg:absolute lg:top-22 sm:absolute sm:top-10">
                <h1 className="text-4xl bg-white text-violet-950 font-bold">Contact Us</h1>
                <p className="bg-white leading-loose text-sm text-center mt-3">Contact Us</p>
            </div>
        </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-8 p-35 mt-[-5rem]">
                {/* Cell */}
                {[
                    { icon: "/contact/call.png", title: "Business Enquiries", text: "+91 89190 88163 " },
                    { icon: "/contact/mail.png", title: "Email Address", text: "info@analogueitsolutions.com" },
                    { icon: "/contact/distance.png", title: "Our Address", text: "1-98/4/64, Jaya Vijaya Plaza, Vittal Rao Nagar, Mindspace, Madhapur, Hyderabad-500081." },
                    { icon: "/contact/call.png", title: "Career Enquiries", text: "+91 9182421323" },
                    { icon: "/contact/mail.png", title: "Send Email", text: "hr@analogueitsolutions.com" },
                    { icon: "/contact/business_center.png", text: "Apply & Explore Careers" },
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 border text-[#071637] border-blue-400 border-2 rounded-xl ">
                    {/* Icon */}
                    <div className="flex-shrink-0 px-4">
                        <Image
                        src={item.icon}
                        alt={item.text}
                        width={40}
                        height={40}
                        className="object-contain"
                        />
                    </div>

                    {/* Text */}
                    <div className="py-3">
                        <h3 className=" underline decoration-gray-400 underline-offset-2 decoration-1 mb-1">
                        {item.title}
                        </h3>
                        <p className=" text-[#071637] leading-loose mt-3">{item.text}</p>
                    </div>
                    </div>
                ))}
                </div>

                {/* middle box */}
                <div className="p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 rounded-lg">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-blue-200 rounded-2xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-15 overflow-hidden">
    {/* Image - Top-left on all screens */}
    <Image
      src="/contact/Contact-Abstract-Design.png"
      alt="Left-Design"
      width={120}
      height={100}
      className="mt-[-4rem] xs:mt-[-5rem] sm:mt-[-6rem] md:mt-[-8rem] lg:mt-[-10rem] ml-[-2rem] xs:ml-[-2.5rem] sm:ml-[-3rem] md:ml-[-3.8rem] w-24 xs:w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48"
    />
    {/* Heading and Text */}
    <div className="mt-4 md:mt-0 md:ml-4 lg:ml-6 xl:ml-8 flex-1">
      <h1 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl leading-relaxed">
        Are you ready to bring your vision to life with cutting-edge web and app development?
      </h1>
      <p className="text-xs xs:text-sm sm:text-sm md:text-base text-gray-600 mt-2 xs:mt-3 sm:mt-4">
        Visit us at Analogue IT Solutions and let us help you with a customized quotation for your needs.
      </p>
    </div>
    {/* Button - Right side, single line */}
    <button className="mt-4 md:mt-0 bg-blue-700 rounded text-white px-3 xs:px-4 sm:px-5 md:px-6 py-2 text-xs xs:text-sm sm:text-sm md:text-base whitespace-nowrap">
      Contact Us
    </button>
  </div>
</div>

                <GetAQuoteForm />

            <Footer />
        </div>
    )
}