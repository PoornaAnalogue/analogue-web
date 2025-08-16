import Footer from "../../../Components/Footer";
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
                <div className="p-20 rounded-lg">
                <div className=" flex justify-around items-center bg-blue-200 rounded-2xl p-15 overflow-hidden">
                    <Image src="/contact/Contact-Abstract-Design.png" alt="Left-Design" width={180} height={150} className="mt-[-10rem] ml-[-3.8rem]"/>
                    <div>
                    <h1 className="text-3xl leading-relaxed">Are you ready to bring your vision to life with cutting-edge web and app development?</h1>
                    <p className=" text-gray-600 mt-4">Visit us at Analogue IT Solutions and let us help you with a customized quotation for your needs.</p>
                    </div>
                <button className="bg-blue-700 rounded text-white p-3 text-sm">Contact Us</button>
                </div> 
                </div>

                <div className="relative flex flex-col items-center justify-start h-[50rem] rounded-lg">
                {/* Small centered background image */}
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0">
                    <Image
                    src="/contact/Form-background.png"
                    alt="Form Background"
                    width={500} // smaller width
                    height={500}
                    className="object-contain"
                    />
                </div>

                {/* Big Background Text - moved closer to form */}
                <div className="relative z-10 flex justify-center items-end mb-[-3rem] pointer-events-none">
                    <h1 className="text-[12rem] text-gray-400 leading-none mr-4">
                    Let&apos;s
                    </h1>
                    <h1 className="text-[12rem] text-blue-300 leading-none">
                    Discuss
                    </h1>
                </div>

                {/* Glassmorphic Form */}
                <div className="relative z-20 w-[80%] max-w-5xl p-10 rounded-3xl border border-white/30 backdrop-blur-2xl shadow-lg bg-gradient-to-br from-white/30 via-white/10 to-transparent">
                    {/* Form Header */}
                    <h2 className="text-lg text-blue-500 mb-1">
                    Let Us Elevate Your Projects With Our Skills
                    </h2>
                    <p className="text-xs text-gray-700 mb-6">
                    Get a Quote from a Top Mobile App Development Company
                    </p>

                    {/* Form Fields */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Your Name*"
                        className="bg-transparent border-b border-gray-400 focus:outline-none text-gray-800 text-xs py-2"
                    />
                    <input
                        type="email"
                        placeholder="Your Email*"
                        className="bg-transparent border-b border-gray-400 focus:outline-none text-gray-800 placeholder-black py-2"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number*"
                        className="bg-transparent border-b border-gray-400 focus:outline-none text-gray-800 placeholder-gray-500 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Subject..."
                        className="bg-transparent border-b border-gray-400 focus:outline-none text-gray-800 placeholder-gray-500 py-2"
                    />
                    <select
                        className="bg-transparent border-b border-gray-400 focus:outline-none text-gray-800 placeholder-gray-500 py-2 col-span-1 md:col-span-2"
                    >
                        <option>How Do You Reach Us?</option>
                        <option>Email</option>
                        <option>Phone</option>
                        <option>WhatsApp</option>
                    </select>
                    <textarea
                        placeholder="Your Message*"
                        className="bg-transparent border-b border-gray-400 focus:outline-none text-gray-800 placeholder-gray-500 py-2 col-span-1 md:col-span-2"
                    ></textarea>
                    <div className="col-span-1 md:col-span-2 flex justify-start mt-4">
                        <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition"
                        >
                        Get A Quote
                        </button>
                    </div>
                    </form>
                </div>
                </div>



            <Footer />
        </div>
    )
}