import Footer from "../../../Components/Footer";
// import Navbar from "../Navbar";
import Image from "next/image";

export default function SingleProductPage() {
    return (
        <>
            <div className="h-full w-full bg-white">
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
                                Our Products
                            </h1>
                            <p className="bg-white text-black leading-loose text-sm text-center mt-3">
                                Stories of Success
                            </p>
                            </div>
                </div>
                
                <div className="  font-weight-600 font-semibold  text-4xl text-[#071637] pt-0 mt-0 px-10 py-5 bg-white underline underline-offset-15 decoration-blue-500 decoration-4">
                    <p className="text-3xl text-black">Buykeyz</p>
                </div>
                <div className=" py-5  bg-white w-full flex text-center justify-center h-full">
                    <div className="w-1/2 flex justify-end items-start gap-5  pl-10 pr-0">
                    <div className="">
                        <Image src="/img1.jpg" width={170} height={450} alt="Buykeyz product image" className=" object-cover"/>
                        <p className="text-lg text-[#7B7E86] font-semibold">Paper Sketches</p>
                    </div> 
                    <div className="">
                        <Image src="/img2.jpg" width={155} height={450} alt="Buykeyz product image" className="object-cover" />
                        <p className="text-lg text-[#7B7E86] font-semibold">Wireframe</p>
                    </div>  
                    <div className="">
                        <Image src="/img3.jpg" width={250} height={700} alt="Buykeyz product image" className="object-contain"/>
                        <p className="text-start text-lg text-[#7B7E86] font-semibold">Final UI Design</p>
                    </div>           
                  
                    </div>

                    <div className="w-1/2 px-10 flex flex-col  justify-start items-start">
                    <div className="self-start flex justify-start"><Image src="/logo.jpg" width={250} height={200} alt="LogiImage" className="" /></div>
                    <p className="self-start text-[#0D6EFD] text-[1.5rem] font-bold ">Process we follow for</p> 
                    <p className="self-start text-[#0D6EFD] text-[1.5rem] font-bold ">successful project</p>
                    <p className=" self-start text-[#7B7E86] text-sm text-start pt-3 pr-10">
                        Analogue is a Best mobile app development company in Hyderabad that specialises in creating and enhancing user experience 
                        through the design and development of mobile and web applications. Our focus lies in helping businesses expand and reach 
                        their specific customer base by collaborating with individuals and organisations to conceptualise and promote their products.                        
                    </p>
                    <div>
                        <p className="text-[#0D6EFD] text-start py-2 font-bold">Development Tools We use :</p>
                        <div className="grid grid-cols-6 gap-3 ">
                            <Image src="/React.png" width={50} height={50} alt="React logo" className=" object-contain" />
                            <Image src="/Angular.png" width={50} height={50} alt="Next.js logo" className=" object-contain" />
                            <Image src="/icons8-vue-js 1.png" width={50} height={50} alt="Node.js logo" className=" object-contain" />
                            <Image src="/next-js 1.png" width={50} height={50} alt="MongoDB logo" className=" object-contain" />
                            <Image src="/tensorflow.png" width={50} height={50} alt="Express.js logo" className="object-contain" />
                            <Image src="/amazon sagemaker.png" width={50} height={50} alt="Tailwind CSS logo" className=" object-contain" /> 
                            <Image src="/Java.png" width={50} height={50} alt="React logo" className=" object-contain" />
                            <Image src="/Php.png" width={50} height={50} alt="Next.js logo" className=" object-contain" />
                            <Image src="/node-js 3.png" width={50} height={50} alt="Node.js logo" className=" object-contain" />
                            <Image src="/dotnet 1.png" width={50} height={50} alt="MongoDB logo" className="object-contain" />
                            <Image src="/keras.png" width={50} height={50} alt="Express.js logo" className=" object-contain" />
                            <Image src="/R Programming.png" width={50} height={50} alt="Tailwind CSS logo" className=" object-contain" /> 
                            </div>

                    </div>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}