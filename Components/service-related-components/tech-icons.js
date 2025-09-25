import { useState } from "react";
import Image from "next/image";


export default function TechnologiesButtons(){

      const [selectedCategory, setSelectedCategory] = useState("Web Apps");
    
      // Array of image paths corresponding to original icon names
      const TechIcons = {
        reactIcon: "/service-icons/react-logo.svg",
        nextjsIcon: "/service-icons/next-logo.svg",
        vueIcon: "/service-icons/vue-logo.svg",
        angularIcon: "/service-icons/angular-logo.svg",
        nodejsIcon: "/service-icons/node-logo.svg",
        javaIcon: "/service-icons/java-logo.svg",
        phpIcon: "/service-icons/php-logo.svg",
        pythonIcon: "/service-icons/python-logo.svg",
        dotnetIcon: "/service-icons/dotnet-logo.svg",
        flutterIcon: "/service-icons/flutter-logo.svg",
        kotlinIcon: "/service-icons/kotlin-logo.svg",
        bgicon: "/service-icons/bgicon.svg",
      };
    
      const technologies = [
        {
          category: "Web Apps",
          items: [
            { name: "React JS", icon: TechIcons.reactIcon },
            { name: "Next JS", icon: TechIcons.nextjsIcon },
            { name: "Vue JS", icon: TechIcons.vueIcon },
            { name: "Angular", icon: TechIcons.angularIcon },
            { name: "Flutter", icon: TechIcons.flutterIcon },
          ],
        },
        {
          category: "Backend",
          items: [
            { name: "Node JS", icon: TechIcons.nodejsIcon },
            { name: "Java", icon: TechIcons.javaIcon },
            { name: "PHP", icon: TechIcons.phpIcon },
            { name: "Python", icon: TechIcons.pythonIcon },
            { name: "Dot.Net", icon: TechIcons.dotnetIcon },
          ],
        },
        {
          category: "Mobile Apps",
          items: [
            { name: "React Native", icon: TechIcons.reactIcon },
            { name: "Flutter", icon: TechIcons.flutterIcon },
            { name: "Kotlin", icon: TechIcons.kotlinIcon },
            { name: "Java", icon: TechIcons.javaIcon },
          ],
        },
      ];
    
      const selectedItems = technologies.find(
        (tech) => tech.category === selectedCategory
      )?.items;

    return(<>
    <div className=" w-full h-auto bg-[url('/service-icons/app-dev-bg.jpg')] bg-cover bg-center flex flex-col lg:flex-row h-[35rem] sm:h-[27rem] md:h-[32rem] lg:h-[32rem] xl:h-[26rem]">
          <div className=" pt-[4%] sm:pt-[5%] 3xl:w-[80%] w-[80%] mx-auto text-white">
            <h2 className="text-2xl xss:text-center lg:text-start xss:text-[1.1rem] xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] 3xl:text-[1.6rem] font-semibold mb-9">
              TECHNOLOGIES
            </h2>
            <div className="flex space-x-8 mb-6">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedCategory(tech.category)}
                  className={`cursor-pointer pb-1 border-b-2 font-medium xss:text-xs sm:text-sm lg:text-base  transition-all duration-500 ease-in-out ${selectedCategory === tech.category
                      ? "border-white text-[#0E59F2]"
                      : "border-transparent"
                    } hover:border-[#0E59F2]`}
                >
                  {tech.category}
                </span>
              ))}
            </div>

            {/* Display selected category items */}
            <div className="flex">
              <div className="w-full">
                <div className="grid grid-cols-6 xss:grid-cols-2 sm:grid-cols-3 2xl:w-[60rem] xl:grid-cols-5">
                  {selectedItems?.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-1 p-2 m-5 sm:m-0 sm:my-2 md:m-0 md:my-2 text-black relative"
                    >
                      <Image
                        src={TechIcons.bgicon}
                        alt="design"
                        width={20}
                        height={20}
                        className=" xss:w-[5.5rem] sm:w-[6.3rem] md:w-[120px] lg:w-[135px] flex justify-center items-center mx-auto"
                      />
                      <div className="absolute inset-0 xss:text-subsmall sm:text-xs flex flex-col items-center justify-center">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={20}
                          height={20}
                          className="w-[65px] h-[65px] xss:w-[2.5rem] xss:h-[2rem] sm:w-[55px] sm:h-[50px] md:w-[60px] md:h-[50px] lg:w-[68px] lg:h-[55px] xl:w-[85px] xl:h-[75px]"
                        />
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>)
}