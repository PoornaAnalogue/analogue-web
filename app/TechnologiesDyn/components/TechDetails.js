import Image from "next/image";

export default function TechDetails({ textGroups, subtitle, mainImage, description, highlightWords }) {
    
  return (
    <div className=" flex flex-col xl:flex-row justify-center items-center w-full bg-white px-4 xss:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-8 2xl:px-11 3xl:px-18 pt-2 pb-0">
                  <div className="w-full xl:w-3/5 font-medium xl:pl-10">
                    <h1 className="text-xl xss:text-2xl  sm:text-[1.7rem] md:text-[2rem] xl:text-[2.4rem] font-semibold text-black p-2   ">
                      {textGroups.map((group, i) => {
                        const words = group.name.split(" ");
                        return (
                        <div key={`group-${i}`} className="flex gap-2 flex-wrap">
                          {words.map((word, j) => {
                              const isHighlighted = highlightWords.includes(word);
                              return (
                                <span
                                  key={`word-${i}-${j}`}
                                  className={isHighlighted ? "text-[#FF41F0]" : "text-#071637]"}
                                >
                                  {word}{" "}
                                </span>
                              );
                            })}

                        </div>
                        );
                      })}
                    </h1>
                    <h3 className="text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.2rem] font-medium text-[#0E59F2] p-2 pl-3 ">
                      {subtitle}
                    </h3>
                    <p className="text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base  pr-6 text-[#7B7E86] leading-5 sm:leading-6 pl-3 pb-3">
                      {description[0]}
                    </p>
                    <div className="w-full pt-3 flex gap-5 text-sm xss:gap-2 xss:text-xs md:text-sm ">
                    <button className=" xss:px-2 md:px-3 px-3 py-2 rounded-md bg-[#0D6EFD] text-white  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-pointer ">
                      Get Free Quote
                    </button>
                    <button className="xss:px-2 md:px-3 px-3 py-2 rounded-md  text-[#0E59F2]  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition cursor-pointer">
                      Call Us +918919088163
                    </button>
                    </div>
                 
                  </div>
                  <div className=" w-full xl:w-2/5 flex justify-center xl:justify-end mb-0">
                    <Image
                      src={mainImage}
                      width={400}
                      height={450}
                      alt="Adobe Tech image"
                      className="object-contain w-full max-w-[250px] xss:max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[380px] 2xl:max-w-[400px] 3xl:max-w-[430px] "
                      sizes="(max-width: 320px) 250px, (max-width: 360px) 280px, (max-width: 480px) 300px, (max-width: 640px) 350px, 360px"
                    />
                  </div>
                </div>
        
  );
}
