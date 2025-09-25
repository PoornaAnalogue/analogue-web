import Image from "next/image"

export default function ExtendedLocations(){
    return (<>
            <div className=" w-full h-auto bg-[url('/service-icons/app-dev-bg.jpg')] bg-cover bg-center xss:p-7 xl:p-15">
          <div className="text-white text-2xl xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] xl:text-[1.6rem] 3xl:text-[2rem] font-bold xss:pb-5 lg:pb-8 2xl:pb-15 text-center">
            Our Services Extend to These Top Locations!
          </div>
          <div className="grid lg:grid-cols-2 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base xss:grid-cols-1 xss:gap-4 xl:gap-5 sm:px-8 md:px-28 lg:px-12 2xl:px-40 3xl:px-50">
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/hyd.svg"
                  alt="hyd"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in Hyderabad(Ind)
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/torento.svg"
                  alt="toronto"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in UAE
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/saudi.svg"
                  alt="saudi"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in USA
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/dubai.svg"
                  alt="dubai"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in UK
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/qatar.svg"
                  alt="qatar"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in Europe
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[1.5rem] xss:w-[1.8rem] sm:w-[2rem] lg:w-[2.4rem] ">
                <Image
                  src="/service-icons/kochi.svg"
                  alt="kochi"
                  width={40}
                  height={40}
                  priority={false}
                />
              </div>
              <p className="text-white pl-2">
                Mobile App Development Company in Australia
              </p>
            </div>
          </div>
        </div>
    </>)
}