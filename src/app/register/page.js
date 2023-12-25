export default function RegisterPage(){
    return (
        <>
      <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Register

</h1>

<form className="grid max-w-xl mt-4 mx-auto" action="">
    <input className="border-2 bg-gray-200 mt-3 p-4 rounded-xl border-gray-400 " type="email" />
    <input className="border-2 bg-gray-200 mt-3 p-4 rounded-xl border-gray-400" type="password" />
    <input className="text-white font-semibold  border-2 bg-primary mt-3 p-4 rounded-xl" type="submit" />




</form>

<div className="max-w-xl mx-auto text-center ">
<p className="mt-4 text-gray-400">or Log in with provider</p>
<p className="border-2 mt-3 p-4 rounded-xl">Log in with google</p>

</div>

      </section>
        </>
    )
}