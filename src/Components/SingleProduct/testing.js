import Image from "next/image";

export default function SingleProductPageTesting() {
    return (
        <>
            <div className="h-full w-full bg-white">
                {/* Header Section */}
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
                              Our Products
                            </h1>
                            <p className="text-xs xss:text-xs xs:text-base sm:text-lg text-black leading-loose text-center mt-2 sm:mt-3">
                              Stories of success
                            </p>
                          </div>
                        </div>

                {/* Product Title */}
                <div className="text-3xl xss:text-2xl xs:text-2xl sm:text-3xl md:text-4xl text-[#071637] font-semibold px-4 xss:px-2 xs:px-3 sm:px-5 md:px-10 py-5 bg-white underline underline-offset-[15px] decoration-blue-500 decoration-4 text-center">
                    Buykeyz
                </div>

                {/* Main Content */}
                <div className="py-5 bg-white w-full flex flex-col lg:flex-row text-center justify-center items-start h-full px-4 xss:px-2 xs:px-3 sm:px-5 md:px-10">
                    {/* Left Section: Product Images */}
                    <div className="w-full bg-black px-2 lg:w-1/2 flex flex-col xss:flex-row lg:flex-row justify-center lg:justify-end items-center lg:items-start gap-5 pl-0 lg:pl-10 pr-0 lg:pr-0 mb-8 lg:mb-0">
                        <div className="flex flex-col items-center">
                            <div className="relative w-[170px] h-[450px] xss:w-[90px] xss:h-[180px] xs:w-[130px] xs:h-[350px] sm:w-[150px] sm:h-[400px] md:w-[160px] md:h-[420px] lg:w-[170px] lg:h-[450px]">
                                <Image
                                    src="/SingleProduct-Images/img1.jpg"
                                    fill
                                    alt="Buykeyz product image"
                                    className="object-cover"
                                    sizes="(max-width: 320px) 120px, (max-width: 360px) 130px, (max-width: 480px) 150px, (max-width: 640px) 160px, 170px"
                                />
                            </div>
                            <p className="text-lg xss:text-sm xs:text-sm sm:text-base md:text-lg text-[#7B7E86] font-semibold mt-2">Paper Sketches</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative w-[155px] h-[450px] xss:w-[80px] xss:h-[200px] xs:w-[120px] xs:h-[350px] sm:w-[140px] sm:h-[400px] md:w-[150px] md:h-[420px] lg:w-[155px] lg:h-[450px]">
                                <Image
                                    src="/SingleProduct-Images/img2.jpg"
                                    fill
                                    alt="Buykeyz product image"
                                    className="object-cover"
                                    sizes="(max-width: 320px) 110px, (max-width: 360px) 120px, (max-width: 480px) 140px, (max-width: 640px) 150px, 155px"
                                />
                            </div>
                            <p className="text-lg xss:text-sm xs:text-sm sm:text-base md:text-lg text-[#7B7E86] font-semibold mt-2">Wireframe</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative w-[250px] h-[700px] xss:w-[130px] xss:h-[400px] xs:w-[190px] xs:h-[550px] sm:w-[220px] sm:h-[600px] md:w-[230px] md:h-[650px] lg:w-[250px] lg:h-[700px]">
                                <Image
                                    src="/SingleProduct-Images/img3.jpg"
                                    fill
                                    alt="Buykeyz product image"
                                    className="object-contain"
                                    sizes="(max-width: 320px) 180px, (max-width: 360px) 190px, (max-width: 480px) 220px, (max-width: 640px) 230px, 250px"
                                />
                            </div>
                            <p className="text-lg xss:text-sm xs:text-sm sm:text-base md:text-lg text-[#7B7E86] font-semibold mt-2 text-center lg:text-start">Final UI Design</p>
                        </div>
                    </div>

                    {/* Right Section: Description and Tools */}
                    <div className="w-full lg:w-1/2 px-4 xss:px-2 xs:px-3 sm:px-5 md:px-10 flex flex-col justify-start items-center lg:items-start">
                        <div className="self-center lg:self-start mb-4">
                            <Image
                                src="/SingleProduct-Images/logo.jpg"
                                width={200}
                                height={160}
                                alt="LogiImage"
                                className="object-contain"
                                sizes="(max-width: 320px) 160px, (max-width: 360px) 170px, (max-width: 480px) 180px, (max-width: 640px) 190px, 200px"
                            />
                        </div>
                        <p className="self-center lg:self-start text-[#0D6EFD] text-[1.5rem] xss:text-[1.2rem] xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] font-bold text-center lg:text-start">
                            Process we follow for
                        </p>
                        <p className="self-center lg:self-start text-[#0D6EFD] text-[1.5rem] xss:text-[1.2rem] xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] font-bold text-center lg:text-start">
                            successful project
                        </p>
                        <p className="px-5 self-center lg:self-start text-[#7B7E86] text-sm xss:text-xs xs:text-xs sm:text-sm md:text-sm text-start lg:text-start pt-3 pr-0 lg:pr-10">
                            Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience 
                            through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach 
                            their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products.
                        </p>
                        <div className="w-full">
                            <p className="text-[#0D6EFD] text-start py-2 font-bold text-lg xss:text-base xs:text-base sm:text-lg md:text-lg">
                                Development Tools We use:
                            </p>
                            <div className="grid grid-cols-3 xss:grid-cols-5 xs:grid-cols-6 gap-3 xss:gap-0">
                                <Image src="/SingleProduct-Images/React.png" width={50} height={50} alt="React logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/Angular.png" width={50} height={50} alt="Angular logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/icons8-vue-js 1.png" width={50} height={50} alt="Vue.js logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/next-js 1.png" width={50} height={50} alt="Next.js logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/tensorflow.png" width={50} height={50} alt="TensorFlow logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/amazon sagemaker.png" width={50} height={50} alt="Amazon SageMaker logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/Java.png" width={50} height={50} alt="Java logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/Php.png" width={50} height={50} alt="PHP logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/node-js 3.png" width={50} height={50} alt="Node.js logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/dotnet 1.png" width={50} height={50} alt=".NET logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/keras.png" width={50} height={50} alt="Keras logo" className="object-contain" />
                                <Image src="/SingleProduct-Images/R Programming.png" width={50} height={50} alt="R Programming logo" className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}