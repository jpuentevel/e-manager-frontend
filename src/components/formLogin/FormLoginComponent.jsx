import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

const FormLoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }

    return (
        <>
            <div className="container p-10 bg-orange-50 m-0 min-w-full min-h-full">
                <div className="container max-w-3xl mx-auto rounded-3xl border-2 border-amber-500 bg-orange-50 p-7">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Iniciar sesión</h2>
                    </div>
                    <Image
                        className="h-52 w-64 object-cover mx-auto"
                        src="/login.svg"
                        alt="Imagén de inicio de sesión"
                        width={100}
                        height={100}
                    />
                    <form onSubmit={handleSubmit}>
                        <div className="my-6">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="border border-gray-300 p-2 w-full"
                                id="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-6">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="password"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="border border-gray-300 p-2 w-full"
                                id="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mt-9">
                            <Link //Antes era un button submit
                                href={"/home/admin"}
                                className="bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-2 px-4 rounded"
                            >
                                Ingresar
                            </Link>
                        </div>
                    </form>

                    <div className="bg-orange-500 h-0.5 mb-3 mt-7"></div>

                    <div className="flex flex-col items-center sm:flex-row">
                        <Link
                            href={"/"}
                            className="mx-auto bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-3 px-6 my-3 rounded"
                        >
                            Ir al inicio
                        </Link>

                        <Link
                            href={"/signup"}
                            className="mx-auto bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-3 px-6 my-3 rounded"
                        >
                            Ir al registro
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FormLoginComponent;