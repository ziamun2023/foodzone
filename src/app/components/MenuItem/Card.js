export default function Card(){
    return (

        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:shadow-2xl duration-150">
        <img className="group hover:scale-110 transition-all duration-500"  src="/pizza.png" alt="pizza" />
        <h4 className="font-semibold my-2 ">item name</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, eos?</p>
        <button className="bg-primary text-white px-6 py-2 rounded-full my-2">add to cart</button>
    </div>

    )
}