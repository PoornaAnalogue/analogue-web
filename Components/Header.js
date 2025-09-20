import Image from "next/image";

export default function Header({headline, tagline}) {
  return (

    <div className=" relative flex justify-center w-full bg-white ">
                  <Image
                    src="/AdobeTech-Images/Abstract Design.svg"
                    width={480}
                    height={180}
                    alt="Abstract design background"
                    className=" object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[450px]"
                    sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
                  />
                  <div className="absolute top-12 xss:top-10 xs:top-11 sm:top-14 md:top-15 bg-white px-4">
                    <p className="text-xl xss:text-2xl  sm:text-[1.7rem] md:text-[2rem] font-bold text-violet-950 text-center">
                      {headline}
                    </p>
                    <p className="text-xs xss:text-xs md:text-sm text-black leading-loose text-center  sm:mt-2">
                      {tagline}
                    </p>
                  </div>
                </div>
  );
}
