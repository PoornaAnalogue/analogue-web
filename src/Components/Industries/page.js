import Footer from "../../../Components/Footer";
// import Navbar from "../Navbar";
import Image from "next/image";
export default function IndustryPage() {
  return (
    <>
      <div className="w-full h-full bg-white overflow-hidden">
        <div className="relative flex justify-center w-full bg-white">
                  <Image
                    src="/AdobeTech-Images/AbstractDesign.jpg"
                    width={480}
                    height={180}
                    alt="Abstract design background"
                    className="object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[480px] md:max-w-[550px] "
                    sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
                  />
                  <div className="absolute top-12 xss:top-10 xs:top-10 sm:top-20 md:top-15 bg-white px-4">
                    <h1 className="text-xl xss:text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-violet-950 text-center">
                      Technologies
                    </h1>
                    <p className="text-xs xss:text-xs xs:text-base sm:text-lg text-black leading-loose text-center mt-2 sm:mt-3">
                      Crafted with love since 2017
                    </p>
                  </div>
                </div>

        <div className="flex w-full gap-5 justify-center items-start pt-0 mt-0 px-10  h-full b-white  overflow-hidden">
          <div className="w-2/5 px-10 self-center ">
            <p className="text-4xl  text-[#071637] font-semibold underline decoration-blue-500 decoration-4 underline-offset-20">
              News App
            </p>
            <p className="text-sm text-[#7B7E86] leading-6 mt-8 ">
              Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products.
            </p>
          </div>

          <div className="w-3/5 px-10 py-13  ">
              <Image
                className=" rounded bg-grey-200 "
                src="/Industry-Images/Indus-News-1.png"
                alt="Industry Image"
                width={600}
                height={300}
              />
          </div>
        </div>

        <div className="bg-calendar bg-cover bg-center w-screen h-[380] relative p-5 pb-10">
          <div className="p-3  text-white  ml-20 ">
            <p className="text-3xl leading-12 font-bold font-weight-700">
              A proven methodology that ensures successful <br /> project
              delivery from conception to deployment.
            </p>
            <p className="w-1/2  mt-5 text-sm leading-6 pr-15">
              Analogue is a Best mobile app development company in Hyderabad
              that specialises in creating and enhancing user experience through
              the design and development of mobile and web applications. Our
              focus lies in helping businesses expand and reach their specific
              customer base by collaborating with individuals and organisations
              to conceptualise and promote their products.
            </p> 
            <button className="primary text-white bg-blue-500 text-sm p-3 rounded my-5">
              Contact Us
            </button>
          </div>

          <div className="absolute -bottom-30 right-20 w-150 h-90 rounded-4xl p-10">
            <Image 
            className="border-2 border-grey-500 rounded  "
                src="/Industry-Images/Indus-News-2.png"
                alt="Industry Image"
                width={700}
                height={600}
                />
          </div>

        </div>

        <div className="bg-white m-5 p-5 px-15">
          <p className="text-[#0D6EFD] font-weight-400 font-medium text-3xl mt-5">Bussiness Benifits</p>
          <p className="text-[0.9rem] mt-6 leading-6 font-medium text-[#7B7E86]">
            Analogue is a Best mobile app development company in Hyderabad that
            specialises in creating and enhancing user experience through the
            design and development of mobile and web applications. Our focus
            lies in helping businesses expand and reach their specific customer
            base by collaborating with individuals and organisations to
            conceptualise and promote their products. Analogue is a Best mobile
            ain helping businesses expand and reach their specific customer base
            by co
          </p>

          <p className="text-[0.9rem] mt-4 leading-6 font-medium text-[#7B7E86] ">
            Analogue is a Best mobile app development company in Hyderabad that
            specialises in creating and enhancing user experience through the
            design and development of mobile and web applications. Our focus
            lies in helping businesses expand and reach their specific customer
            base by collaborating with individuals and organisations to
            conceptualise and promote their products. Analogue is a Best mobile
            ain helping businesses expand and reach their specific customer base
            by co. Analogue is a Best mobile app development company in
            Hyderabad that specialises in creating and enhancing user experience
            through the design and development of mobile and web applications.
            Our focus lies in helping businesses expand and reach their specific
            customer base by collaborating with individuals and organisations to
            conceptualise and promote their products. Analogue is a Best mobile
            ain helping businesses expand and reach their specific customer base
            by co Analogue is a Best mobile app development company in Hyderabad
            that specialises in creating and enhancing user experience through
            the design and development of mobile and web applications. Our focus
            lies in
          </p>


        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
