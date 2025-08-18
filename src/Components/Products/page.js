import Image from "next/image";
import Navbar from "../../../Components/Navbar";

export default function ProductsPage(){
    const projects = [
        {
            id: 1,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg1.png",
        },
        {
            id: 2,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg2.png",
        },
        {
            id: 3,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg3.png",
        
        },
        {
            id: 4,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg4.png",
        },
        {
            id: 5,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg5.png",
        },
        {
            id: 6,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg6.png",
        },
        {
            id: 7,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg7.png",
        },
        {
            id: 8,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg8.png",
        },
        {
            id: 9,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg9.png",
        },
        {
            id: 10,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg10.png",
        },
        {
            id: 11,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg11.png",
        },
        {
            id: 12,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg12.png",
        },
        {
            id: 13,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg13.png",
        },
        {
            id: 14,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg14.png",
        },
        {
            id: 15,
            title: "Buykeyz",
            description: "E-commerce App and Static Website",
            image: "/ProductImg15.png",
        }
        ];

    return (
        <>
      
        <div className="h-full w-full bg-white">

            <div className="h-auto " >
            {/* <Navbar /> */}
            <div className=" bg-white flex h-full justify-center relative ">
                <Image src="/AbstractDesign.jpg" width={500} height={600} alt="Abstract design background" />
                <div className="bg-white absolute top-14  ">
                    <h1 className="text-3xl bg-white text-violet-950 font-bold">Our Products</h1>
                    <p className="bg-white leading-loose text-sm text-center mt-3">Stories of Success</p>
                </div>


                
            </div>
            </div>

        <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 m-12 place-self-center">
            {projects.map((project) => (
                <div key={project.id} className=" h-[460px]  w-full bg-white shadow-lg rounded-lg  transform transition duration-300 hover:scale-105 hover:shadow-2xl">    
                    <div   >
                        <Image src={project.image} width={200} height={100}  alt={project.title} className="contain border-2 border-red-300 text-center " />
                    </div>

                    <div className="flex justify-between items-center py-1 px-5">
                        <div className="p-4">
                        <h2 className="text-lg text-black font-bold mb-2 underline underline-offset-10 decoration-blue-500">{project.title}</h2>
                        <p className="text-gray-600">{project.description}</p>  
                        </div>
                        <div>
   <div className="flex justify-end items-center mt-3">
    
    <div className="bg-black text-white p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L6.75 17.25M17.25 6.75H9M17.25 6.75V15"
        />
      </svg>
    </div>
   

                        </div>
                    </div>
                </div>
                </div>
            ))}
        </div>

        </div>

        </>
    );
}
