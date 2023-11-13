import Image from "next/image";

const Header = () => {

    return (
        <>
            <nav className="bg-orange-500 p-4">
                <div className="container mx-auto flex justify-center items-center">
                    <Image
                        src="/logo_sin_fondo.png"
                        alt="logo sin fondo"
                        width={100}
                        height={100}
                    />
                    <h1 className="text-3xl ml-6 font-bold text-orange-100">Manejador de Eventos - UdeC</h1>
                </div>
            </nav>
        </>
    )
}

export default Header