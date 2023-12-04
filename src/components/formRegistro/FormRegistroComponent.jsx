import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const FormRegistroComponent = () => {
    const [nombres, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [organizacion, setOrganizacion] = useState('');
    const [cargo, setcargo] = useState('');
    const [telefono, setTelefono] = useState();
    const [cedula, setCedula] = useState();
    const [nacionalidad, setNacionalidad] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pulsado, setPulsado] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombres, apellidos,organizacion,cargo,telefono,cedula,nacionalidad,email,password,pulsado)
    }

    return(
        <div className="container p-10 bg-orange-50 m-0 min-w-full min-h-full">
            <div className="container max-w-3xl mx-auto rounded-3xl border-2 border-amber-500 bg-orange-50 p-7">
                {pulsado == 0 &&(
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-center">Registro</h2>
                </div>
                )}
                {pulsado == 1 &&(
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-center">Registro Asistente</h2>
                </div>
                )}
                {pulsado == 2 &&(
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-center">Registro Organizador</h2>
                </div>
                )}
                {pulsado == 3 &&(
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-center">Registro Ponente</h2>
                </div>
                )}

                <Image
                    className="h-52 w-64 object-cover mx-auto"
                    src="/signup.svg"
                    alt="Imagén de inicio de sesión"
                    width={100}
                    height={100}
                />
                <div className="flex flex-col items-center sm:flex-row">
                    <Link
                        href={"#"}
                        onClick = {() => setPulsado(1)}
                        className="mx-auto bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-3 px-6 my-3 rounded"
                    >
                        Asistente
                    </Link>

                    <Link
                        href={"#"}
                        onClick = {() => setPulsado(2)}
                        className="mx-auto bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-3 px-6 my-3 rounded"
                    >
                        Organizador
                    </Link>

                    <Link
                        href={"#"}
                        onClick = {() => setPulsado(3)}
                        className="mx-auto bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-3 px-6 my-3 rounded"
                    >
                        Ponente
                    </Link>
                </div>

                {pulsado != 0 && (
                        <form onSubmit={handleSubmit}>
                        <div className="my-6">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="nombre"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 p-2 w-full"
                                id="nombre"
                                placeholder="Nombres"
                                value={nombres}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className="my-6">
                        <label
                            className="block text-gray-700 text-xl font-bold mb-2"
                            htmlFor="apellidos"
                        >
                            Apellidos
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300 p-2 w-full"
                            id="apellidos"
                            placeholder="Apellidos"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                        />
                        </div>
                        <div className="my-6">
                        <label
                            className="block text-gray-700 text-xl font-bold mb-2"
                            htmlFor="organizacion"
                        >
                            Organizacion
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300 p-2 w-full"
                            id="organizacion"
                            placeholder="Organizacion"
                            value={organizacion}
                            onChange={(e) => setOrganizacion(e.target.value)}
                        />
                        </div>
                        <div className="my-6">
                        <label
                            className="block text-gray-700 text-xl font-bold mb-2"
                            htmlFor="cargo"
                        >
                            Cargo
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300 p-2 w-full"
                            id="cargo"
                            placeholder="Cargo"
                            value={cargo}
                            onChange={(e) => setcargo(e.target.value)}
                        />
                        </div>
                        <div className="my-6">
                        <label
                            className="block text-gray-700 text-xl font-bold mb-2"
                            htmlFor="telefono"
                        >
                            Telefono
                        </label>
                        <input
                            type="tel"
                            className="border border-gray-300 p-2 w-full"
                            id="telefono"
                            placeholder="Telefono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                        </div>
                        {pulsado != 3 &&(
                            <div className="my-6">
                                <label
                                    className="block text-gray-700 text-xl font-bold mb-2"
                                    htmlFor="cedula"
                                >
                                    Cedula
                                </label>
                                <input
                                    type="number"
                                    className="border border-gray-300 p-2 w-full"
                                    id="cedula"
                                    placeholder="Cedula"
                                    value={cedula}
                                    onChange={(e) => setCedula(e.target.value)}
                                />
                            </div>
                        )}
                        {pulsado != 2 &&(
                            <div className="my-6">
                                <label
                                    className="block text-gray-700 text-xl font-bold mb-2"
                                    htmlFor="nacionalidad"
                                >
                                    Nacionalidad
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 p-2 w-full"
                                    id="nacionalidad"
                                    placeholder="Nacionalidad"
                                    value={nacionalidad}
                                    onChange={(e) => setNacionalidad(e.target.value)}
                                />
                            </div>
                        )}
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
                            placeholder="Email"
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
                        </form>
                )}
                <div className="bg-orange-500 h-0.5 mb-3 mt-7"></div>
                
                <div className="flex flex-col items-center sm:flex-row">
                    {pulsado == 1 &&(
                            <button
                                type="submit"
                                className="mx-auto bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-3 px-6 my-3 rounded"
                            >
                                Registrar Asistente
                            </button>
                    )}
                    {pulsado == 2 &&(
                            <button
                                type="submit"
                                className="mx-auto bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-3 px-6 my-3 rounded"
                            >
                                Registrar Organizador
                            </button>
                    )}
                    {pulsado == 3 &&(
                            <button
                                type="submit"
                                className="mx-auto bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-3 px-6 my-3 rounded"
                            >
                                Registrar Ponente
                            </button>
                    )}
                            <Link
                                href={"/"}
                                className="mx-auto bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-3 px-6 my-3 rounded"
                            >
                                Ir al inicio
                            </Link>
                </div>
            </div>
        </div>
    )
}

export default FormRegistroComponent;