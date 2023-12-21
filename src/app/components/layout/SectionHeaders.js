export default function SectionHeaders({subheader,mainheader}){
    return(

       <div className="text-center">
       <p className="uppercase text-gray-500 font-semibold leading-4">{subheader}</p>
        <h2 className=" text-primary font-bold text-4xl italic">{mainheader}</h2>
       </div>
        )

       
}