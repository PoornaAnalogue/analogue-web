export default function Responsive_Best_App() {
    return (
        <>
            {/* Assumes tailwind.config.js with custom breakpoints: xs: 360px, sm: 480px, md: 640px, lg: 768px, xl: 1024px, 2xl: 1280px, 3xl: 1536px */}
            <div className="w-full h-auto bg-white px-3 py-5 xs:px-4 xs:py-6 
            sm:px-5 sm:py-7 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-10 xl:py-8 "
            >
                <p className="text-[#071637] font-semibold text-lg mb-3 font-600 underline decoration-[#0D6EFD] decoration-2 underline-offset-6
                xs:text-lg xs:decoration-2 xs:underline-offset-7 xs:mb-4
                 sm:text-xl md:text-2xl  xl:text-4xl 
                 sm:decoration-3 md:decoration-3  xl:decoration-4 
                 sm:underline-offset-10 md:underline-offset-15 xl:underline-offset-[20px] 
                 sm:mb-2 md:mb-4 xl:mb-5"
                >
                    Start Work With Us
                </p>
                <div className=" p-1 xs:p-2 sm:p-3 md:p-4 lg:p-5 xl:px-4 ">
                    <p className="text-[#0D6EFD] text-sm xs:text-sm sm:text-lg md:text-xl  xl:text-[1.6rem]  font-medium mb-2 xs:mb-3 sm:mb-2 md:mb-3  xl:mb-7 ">
                        The Best Mobile App Development Company.
                    </p>
                    <p className="text-[#7B7E86] text-[0.625rem] xs:text-[0.55rem] sm:text-xs md:text-xs  xl:text-[1rem]  mb-2 xs:mb-3 sm:mb-4 md:mb-5 xl:mb-7  leading-4 xs:leading-5 sm:leading-5 md:leading-5  xl:leading-8 ">
                        We are a top-rated mobile app development company, committed to turning your app ideas into reality with the help of our expert team. Our professional and best app developers in Hyderabad work closely with you to ensure your app vision is brought to life with precision and quality. Whether it’s a simple app or a complex solution, we are your trusted partner in making it happen.
                    </p>
                    <p className="text-[#7B7E86] text-[0.625rem] xs:text-[0.55rem] sm:text-xs md:text-xs  xl:text-[1rem]  mb-2 xs:mb-3 sm:mb-4 md:mb-5  xl:mb-7 2xl:mb-8 3xl:mb-9 leading-4 xs:leading-5 sm:leading-5 md:leading-5  xl:leading-8 ">
                        At our company, we take pride in offering top-notch mobile application development services. As one of the best app developers in Hyderabad, we focus on crafting seamless, user-friendly apps tailored to your business needs. With years of experience, we ensure that each app is built to enhance functionality and performance.
                    </p>
                    <p className="text-[#7B7E86] text-[0.625rem] xs:text-[0.55rem] sm:text-xs md:text-xs  xl:text-[1rem]  mb-1 xs:mb-2 sm:mb-3 md:mb-5   2xl:mb-7 3xl:mb-8 leading-4 xs:leading-5 sm:leading-5 md:leading-5 xl:leading-8 ">
                        When you choose us, you’re partnering with a top-rated mobile app development company known for delivering exceptional results. We do top-notch mobile applications development, combining innovation, technology, and professionalism to help your business succeed. Let us help you bring your dream app to life and drive your business forward.
                    </p>
                </div>
            </div>
        </>
    );
}