import Image from "next/image";
import Right from "../icon/Right";

export default function Hero (){
    return (

      <>
      
      <section className="grid grid-cols-2 py-12  justify-items-center items-center">
        <div className="">
        <h1 className="text-4xl font-semibold">everything is better with a <span className="text-primary">Pizza</span></h1>
            <p className="my-4 text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur assumenda ullam.</p>
<div className="flex gap-4 mt-6">
  <div className="bg-primary text-sm text-white gap-2 py-2 px-4 rounded-full flex">
  <button className="uppercase ">Order now
 
 </button>

 <div className="border-2 rounded-full">
 <Right></Right>
 </div>
  </div>
  
  <button className="gap-2 flex py-2 text-gray-600 font-semibold">
    <div>
      learn more 
    </div>
    <div className="border-2 rounded-full ">
    <Right></Right>
    </div>
  </button>
  
</div>
        </div>
            
           <div className=" ">
           <Image  src={"/pizza.png"} objectFit="contain"  width={400}  height={400}></Image>
           </div>
            
            </section>
    </>)
}