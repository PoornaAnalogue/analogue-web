"use client";
import { motion } from "framer-motion";
export default function Responsive_India_Test() {
  // Animation variants for line-by-line content
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
      <div className=" w-full h-auto bg-white xl:p-5 xl:px-20 xss:p-5 xs:p-5 sm:px-8 ">
        <p className="font-weight-400 font-semibold text-[#0D6EFD] xl:text-2xl xl:mb-4 xss:mb-1 xss:text-sm xs:mb-1 xs:text-lg sm:text-subnormal lg:text-xl md:text-[1.4rem] xl:text-normal 2xl:text-normal 3xl:text-subbigheading ">
          Mobile App Development Company in India
        </p>
        <div className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-[#7B7E86] xss:leading-5 sm:leading-6">
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
              Being the best app development company, Analogue has been
              established with the aim to delve into the intricate aspects of
              mobile applications and deliver the best, according to client
              requirements. Our team includes not only skilled app developers
              but also expert app designers in Hyderabad, ensuring that every
              app is both aesthetically pleasing and functional.
            </motion.p>

            <motion.p className="pb-2" variants={item}>
              Our expertise lies in mobile application development with a focus
              on developing apps that meet the highest standards of quality and
              innovation. With a team of skilled professionals, we are
              recognized as one of the top mobile app development companies in
              Hyderabad. Trust Analogue IT Solutions to bring your ideas to life
              and create cutting-edge mobile solutions that exceed expectations.
            </motion.p>

            <motion.p className="pb-2" variants={item}>
              Our handpicked mobile app development professionals in Hyderabad
              are experts in varying mobile app platforms including Flutter,
              IOS, and Android app development. Besides website development,
              Analogue also provides digital solutions by handling{" "}
              <span className="text-[#0D6EFD] ">
                digital marketing strategy designing,
              </span>{" "}
              business development strategy etc. Reach out to Analogue to
              discuss your needs and we will help you get your app to the
              greatest growth prospects.
            </motion.p>

            <motion.p className="pb-2" variants={item}>
              Our app development services in Hyderabad turn your thoughts into
              a reality and provide the finest user-friendly apps.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
