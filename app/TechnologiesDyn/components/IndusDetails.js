import Image from "next/image";

export default function IndusDetails({ name, mainImage, description }) {
  return (
    <div className="pt-0 mt-0 flex flex-col xl:flex-row w-full gap-4 xss:gap-5  sm:gap-8 md:gap-10 lg:gap-12 xl:gap-4 2xl:gap-16 justify-center items-start px-4 xss:px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 py-2 xss:pb-5  ">
              <div className="w-full xl:w-1/2 px-3 xss:px-4 sm:px-6 md:px-8 lg:px-10 ">
                <h2 className="text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold underline underline-offset-[12px] sm:underline-offset-[16px] decoration-[#0D6EFD] decoration-4  text-[#071637] ">
                  {name}
                </h2>
                <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base   text-[#7B7E86] leading-5 sm:leading-6 mt-4 xss:mt-5 sm:mt-8 md:mt-10">
                  {description}
                </p>
              </div>
              <div className="w-full xl:w-1/2  px-3 xss:px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-1 py-4 xss:py-5 xs:py-6 sm:py-8 md:py-10">
                <Image
                  className="rounded-lg bg-gray-200 w-full h-auto"
                  src={mainImage}
                  alt="Industry Image"
                  width={600}
                  height={300}
                  sizes="(max-width: 320px) 100vw, (max-width: 360px) 90vw, (max-width: 480px) 80vw, (max-width: 640px) 70vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 40vw"
                />
              </div>
            </div>
    
        
  );
}
