"use client";
import { motion } from "framer-motion";
export default function StartWorkPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // delay between each line
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <>
      <div
        className=" w-full h-auto bg-white px-3 py-5 xs:px-4 xs:pt-6 
            sm:px-5 sm:pt-7 md:px-6 md:pt-8 lg:px-8 lg:pt-10 xl:px-10 xl:pt-8"
      >
        <h2
          className="text-[#071637] mb-3 font-600 underline decoration-[#0D6EFD] decoration-2 underline-offset-6
                 xs:decoration-2 xs:underline-offset-7 xs:mb-4 
                 sm:decoration-3 md:decoration-3  xl:decoration-4 
                 sm:underline-offset-10 md:underline-offset-15 xl:underline-offset-[20px] 
                 sm:mb-2 md:mb-4 xl:mb-5
                 text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold"
        >
          Start Work With Us
        </h2>
        <div className="  p-1 xs:px-2 sm:px-3 md:px-4 lg:px-5 xl:px-4 ">
          <h3 className="text-[#0D6EFD] text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium mb-2 xs:mb-3  ">
            The Best Mobile App Development Company.
          </h3>
          <motion.div
            className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] xss:leading-5 sm:leading-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            // once: false -> every time trigger avuthundi
            // amount: 0.2 -> 20% visible ayithe start avtundi
          >
            <motion.p className="pb-2" variants={item}>
              We are a top-rated mobile app development company, committed to
              turning your app ideas into reality with the help of our expert
              team. Our professional and best app developers in Hyderabad work
              closely with you to ensure your app vision is brought to life with
              precision and quality. Whether it&apos;s a simple app or a complex
              solution, we are your trusted partner in making it happen.
            </motion.p>

            <motion.p className="pb-2" variants={item}>
              At our company, we take pride in offering top-notch mobile
              application development services. As one of the best app
              developers in Hyderabad, we focus on crafting seamless,
              user-friendly apps tailored to your business needs. With years of
              experience, we ensure that each app is built to enhance
              functionality and performance.
            </motion.p>

            <motion.p className="pb-2" variants={item}>
              When you choose us, you&apos;re partnering with a top-rated mobile
              app development company known for delivering exceptional results.
              We do top-notch mobile applications development, combining
              innovation, technology, and professionalism to help your business
              succeed. Let us help you bring your dream app to life and drive
              your business forward.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
