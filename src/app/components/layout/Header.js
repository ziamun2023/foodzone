import Link from "next/link";

export default function Header () {
    return (

    <>
    
    <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl uppercase" href="">food zone</Link>
  
        <nav className="flex gap-8 text-gray-500 font-semibold  items-center">
        <Link href={''}>home</Link>
        <Link href={''}>menu</Link>
        <Link href={''}>about</Link>
        <Link href={''}>contact</Link>
        <Link href={''} className="bg-primary text-white px-8 py-2 rounded-full">login</Link>
        </nav>
      </header></>
     
    )

}