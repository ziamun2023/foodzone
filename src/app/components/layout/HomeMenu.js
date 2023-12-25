import Image from "next/image";
import Card from "../MenuItem/Card";

export default function HomeMenu (){

    return (
<section className="menuheight relative">
    
<div className="  relative">
            {/* <div className=" absolute left-0">
            <img src={"/sallad1.png"} className="" alt="" />
              
            </div> */}
            <div className="text-center">

<h3 className="uppercase text-gray-600 font-semibold leading-4">check out</h3>

<h2 className="text-primary font-bold text-4xl italic"> menu</h2>

            </div>
            {/* <div className="absolute right-0">
              <img src={"/sallad2.png"} className="" alt="" />
            </div> */}
       
        </div>



        {/* card */}

        <div className="grid grid-cols-3 gap-10 mx-10 mt-20">
          
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>



        </div>



</section>
    )
}