export const LoginForm = () => {
    return (
        <form className="flex flex-col gap-2.5">
            <input className='border rounded-md border-gray-200 w-full text-black p-3' type="email" placeholder="E-mail" />
            <button className="bg-[#5433EB] cursor-pointer text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-[#4028c7] disabled:opacity-50 w-full mt-6">Continuar</button>
        </form>
    )
}