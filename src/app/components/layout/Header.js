import Link from "next/link";

export default function Header () {
    return (

    <>
    
    <header className="lg:flex grid items-center justify-between mt-3">
       <div>
       <Link className="text-primary font-semibold text-2xl uppercase" href="/">food zone</Link>
       </div>
  
    <div>
    <nav className="flex lg:gap-8 gap-2 text-gray-500 font-semibold  items-center">
        <Link href={''}>home</Link>
        <Link href={''}>menu</Link>
        <Link href={''}>about</Link>
        <Link href={''}>contact</Link>
       
        <Link href={'/register'}>Register</Link>
        <Link href={''} className="bg-primary text-white px-8 py-2 rounded-full">login</Link>

    
        </nav>
      
    </div>
      </header></>
     
    )

}