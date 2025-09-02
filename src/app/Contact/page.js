import GetAQuoteForm from "../../Components/GetAQuoteForm";
import Image from 'next/image';

export default function Contact(){
    return (
        <div>
          {/* heading section */}
            <div className="relative flex justify-center w-full bg-white">
          <Image
            src="/contact/Contact-Abstract-Design.svg"
            width={480}
            height={180}
            alt="Abstract design background"
            className="object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[480px] md:max-w-[550px]"
            sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
          />
          <div className="absolute top-12 xss:top-10 xs:top-10 sm:top-20 md:top-15 bg-white px-4">
            <h1 className="text-xl xss:text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-violet-950 text-center">
              Contact Us
            </h1>
            <p className="text-xs xss:text-xs xs:text-base sm:text-lg text-black leading-loose text-center mt-2 sm:mt-3">
              Contact Us
            </p>
          </div>
        </div>


                <div className="grid grid-cols-1 xss:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 xss:gap-4 xs:gap-5 sm:gap-6 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-8 p-4 xss:p-6 xs:p-8 sm:p-8 md:p-10 lg:p-16 xl:p-20 2xl:p-35 mt-4 xss:mt-4 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-0 2xl:mt-[-6rem]">
                {[
                  { icon: "/contact/call.svg", title: "Business Enquiries", text: "+91 89190 88163 " },
                  { icon: "/contact/mail.svg", title: "Email Address", text: "info@analogueitsolutions.com" },
                  { icon: "/contact/distance.svg", title: "Our Address", text: "1-98/4/64, Jaya Vijaya Plaza, Vittal Rao Nagar, Mindspace, Madhapur, Hyderabad-500081." },
                  { icon: "/contact/call.svg", title: "Career Enquiries", text: "+91 9182421323" },
                  { icon: "/contact/mail.svg", title: "Send Email", text: "hr@analogueitsolutions.com" },
                  { icon: "/contact/business_center.svg", text: "Apply & Explore Careers" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 xss:gap-2 xs:gap-3 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-0 border text-[#071637] border-blue-400 border-2 rounded-xl"
                  >
                    <div className="flex-shrink-0 px-2 xss:px-3 xs:px-3 sm:px-2 md:px-3 lg:px-4 xl:px-4 2xl:px-4">
                      <Image
                        src={item.icon}
                        alt={item.text}
                        width={40}
                        height={40}
                        className="w-[20px] h-[20px] xss:w-[24px] xss:h-[24px] xs:w-[28px] xs:h-[28px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px] 2xl:w-[40px] 2xl:h-[40px] 2xl:ml-4 object-contain"
                      />
                    </div>
                    <div className="py-2 xss:py-2 xs:py-3 sm:py-2 md:py-2 lg:py-3 xl:py-3 2xl:py-3">
                      {item.title && (
                        <h3 className="text-sm xss:text-sm xs:text-base sm:text-[0.75rem] md:text-[0.85rem] lg:text-base xl:text-base 2xl:text-base underline decoration-gray-400 underline-offset-2 decoration-1 mb-1">
                          {item.title}
                        </h3>
                      )}

                      {/* Conditional link handling */}
                      {item.text && (
                        <>
                          {item.text.includes("@") ? (
                            // Email link
                            <a
                              href="https://mail.google.com/mail/?view=cm&to=info@analogueitsolutions.com"
                              className="text-[#071637] text-xs xss:text-xs xs:text-sm sm:text-[0.65rem] md:text-[0.75rem] lg:text-sm xl:text-sm 2xl:text-sm leading-relaxed mt-1 xss:mt-1 xs:mt-2 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-3 2xl:mt-3 break-words hover:text-blue-600"
                            >
                              {item.text}
                            </a>
                          ) : item.title === "Our Address" ? (
                            // Address → Google Maps link
                            <a
                            href="https://maps.app.goo.gl/P858gAyx5vH8GaTQ7?g_st=ac"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open location in Google Maps"
                            className="text-[#071637] text-xs xss:text-xs xs:text-sm sm:text-[0.65rem] md:text-[0.75rem] lg:text-sm xl:text-sm 2xl:text-sm leading-relaxed mt-1 xss:mt-1 xs:mt-2 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-3 2xl:mt-3 break-words hover:text-blue-600"
                          >
                            {item.text}
                          </a>
                          ) : item.text.match(/^\+?\d+/) ? (
                            // Phone link
                            <a
                              href={`tel:${item.text.replace(/\s+/g, "")}`}
                              className="text-[#071637] text-xs xss:text-xs xs:text-sm sm:text-[0.65rem] md:text-[0.75rem] lg:text-sm xl:text-sm 2xl:text-sm leading-relaxed mt-1 xss:mt-1 xs:mt-2 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-3 2xl:mt-3 break-words hover:text-blue-600"
                            >
                              {item.text}
                            </a>
                          ):(
                            // Normal text (like address or careers)
                            <p className="text-[#071637] text-xs xss:text-xs xs:text-sm sm:text-[0.65rem] md:text-[0.75rem] lg:text-sm xl:text-sm 2xl:text-sm leading-relaxed mt-1 xss:mt-1 xs:mt-2 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-3 2xl:mt-3 break-words">
                              {item.text}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>



              {/* middle box */}
               <div className="p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 rounded-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-blue-200 rounded-2xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-15 overflow-hidden">
                  <Image
                    src="/contact/leftbox-topleft-img.svg"
                    alt="Left-Design"
                    width={120}
                    height={100}
                    className="mt-[-2rem] xss:mt-[-1.5rem] xs:mt-[-2rem] sm:mt-[-3rem] md:mt-[-8rem] lg:mt-[-8rem] xl:mt-[-10rem] 2xl:mt-[-9rem] ml-[-1rem] xss:ml-[-1.2rem] xs:ml-[-1.5rem] sm:ml-[-2rem] md:ml-[-2.5rem] lg:ml-[-3rem] xl:ml-[-3.8rem] 2xl:ml-[-3.8rem] w-16 xss:w-18 xs:w-20 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-48"
                  />
                  <div className=" flex-1 xl:px-7">
                    <h1 className="text-lg text-black xss:text-base sm:text-lg md:text-base lg:text-lg leading-relaxed xl:text-xl 2xl:text-2xl 3xl:text-normal">
                      Are you ready to bring your vision to life with cutting-edge web and app development?
                    </h1>
                    <p className="text-xs xs:text-sm text-black sm:text-xs text-gray-600 mt-2 xs:mt-3 sm:mt-4 lg:text-md xl:text-subbody 2xl:text-body">
                      Visit us at Analogue IT Solutions and let us help you with a customized quotation for your needs.
                    </p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-blue-700 rounded text-white px-3 xs:px-4 sm:px-5 md:px-3 lg:px-2 py-2 lg:ml-2 text-xs xs:text-sm sm:text-sm md:text-small xl:text-sm 2xl:text-lg whitespace-nowrap">
                    Contact Us
                  </button>
                </div>
              </div>
              <GetAQuoteForm />
        </div>
    )
}