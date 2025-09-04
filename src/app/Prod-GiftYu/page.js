'use client';
import Image from "next/image";

export default function Responsive_GiftYu() {
  return (
    <>
      <div className="w-full bg-white">
        {/* Hero Section */}
        <div className="relative flex justify-center w-full bg-white ">
                          <Image
                            src="/AdobeTech-Images/Abstract Design.svg"
                            width={480}
                            height={180}
                            alt="Abstract design background"
                            className="object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[450px] "
                            sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
                          />
                          <div className="absolute top-12 xss:top-10 xs:top-11 sm:top-14 md:top-15 bg-white px-4">
                            <h1 className="text-xl xss:text-2xl  sm:text-[1.7rem] md:text-[2rem] font-bold text-violet-950 text-center">
                              Our Products
                            </h1>
                            <p className="text-xs xss:text-xs md:text-sm text-black leading-loose text-center  sm:mt-2">
                              Stories of success
                            </p>
                          </div>
        </div>

        {/* Product Title */}
        <div className="font-semibold text-2xl xss:text-xl sm:text-2xl md:text-[1.7rem]  3xl:text-4xl text-[#071637] px-4 xss:px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20 3xl:px-24 py-4 xss:py-5 sm:py-6 bg-white underline underline-offset-8 xss:underline-offset-10 sm:underline-offset-12 md:underline-offset-15 decoration-blue-500 decoration-4">
          <p>GiftYu</p>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col xl:flex-row text-center justify-center items-center xl:items-start py-4 xss:py-6 xs:py-8 sm:py-10 xl:py-3 3xl:py-24 bg-white">
          {/* Image Section */}
          <div className=" w-full xl:w-1/2 flex justify-center items-center px-4 xss:px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 xl:px-5 ">
            <Image
              src="/SingleProd-Images/Prod-Giftu.svg"
              width={650}
              height={280}
              alt="Combine image"
              className=" object-contain w-full max-w-[250px] xss:max-w-[280px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[500px] 2xl:max-w-[550px] 3xl:max-w-[690px]"
            />
          </div>

          {/* Text and Tools Section */}
          <div className="w-full xl:w-1/2 flex flex-col justify-start items-start px-4 xss:px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20 3xl:px-24 mt-6 xl:mt-0">
            <div className="self-start">
              <Image
                src="/SingleProd-Images/Logo-Giftu.svg"
                width={250}
                height={200}
                alt="LogoImage"
                className="w-[150px] xss:w-[160px]  sm:w-[180px] md:w-[220px] lg:w-[230px] xl:w-[240px] 2xl:w-[250px] 3xl:w-[280px] h-auto"
              />
            </div>
            <p className="text-[#0D6EFD] xss:text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-[1.75rem] font-bold mt-4">
              Process we follow for
            </p>
            <p className="text-[#0D6EFD] xss:text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-[1.75rem] font-bold">
              successful project
            </p>
            <p className="text-[#7B7E86]  text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base text-start mt-3 leading-5 sm:leading-6 mr-8 md:mr-15">
              Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience
              through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach
              their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products.
            </p>
            <div className="w-full xl:w-2/3  mt-4">
              <p className="text-[#0D6EFD] text-sm xss:text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-[1.75rem] font-bold text-start">
                Development Tools We use:
              </p>
              <div className="grid grid-cols-2 xss:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-6 2xl:grid-cols-6 3xl:grid-cols-6 gap-2 xss:gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-2 2xl:gap-3 3xl:gap-4 mt-2">
                <Image src="/SingleProduct-Images/React.png" width={50} height={50} alt="React logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/Angular.png" width={50} height={50} alt="Angular logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/icons8-vue-js 1.png" width={50} height={50} alt="Vue.js logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/next-js 1.png" width={50} height={50} alt="Next.js logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/tensorflow.png" width={50} height={50} alt="TensorFlow logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/amazon sagemaker.png" width={50} height={50} alt="Amazon SageMaker logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/Java.png" width={50} height={50} alt="Java logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/Php.png" width={50} height={50} alt="PHP logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/node-js 3.png" width={50} height={50} alt="Node.js logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/dotnet 1.png" width={50} height={50} alt=".NET logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/keras.png" width={50} height={50} alt="Keras logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
                <Image src="/SingleProduct-Images/R Programming.png" width={50} height={50} alt="R logo" className="object-contain w-8 xss:w-10 xs:w-12 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-16 3xl:w-20 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
