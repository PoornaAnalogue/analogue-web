import Footer from "../../../Components/Footer";
// import Navbar from "../Navbar";
import Image from "next/image";
export default function IndustryPage() {
  return (
    <>
      <div className="w-full h-full bg-white overflow-hidden">
        <div className="flex h-full justify-center relative bg-white h-auto pb-0 mb-0">
                  <Image
                    src="/AbstractDesign.jpg"
                    width={480}
                    height={180}
                    alt="Abstract design background"
                    className="object-contain "
                  />
                  <div className="absolute top-16 bg-white">
                    <h1 className="text-3xl bg-white text-violet-950 font-bold">
                      Industries
                    </h1>
                    <p className="bg-white text-black leading-loose text-sm text-center mt-3">
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

        <div className="bg-industry bg-cover bg-center w-screen h-[380] relative p-5 pb-10">
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
