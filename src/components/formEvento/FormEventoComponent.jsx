"use client"
import Link from "next/link";
import { useState } from "react";

const FormEventoComponent = () => {
    const [nombreEvento, setNombreEvento] = useState('');
    const [fechaInicioEvento, setFechaInicioEvento] = useState('');
    const [fechaFinalEvento, setFechaFinalEvento] = useState('');
    const [lugarEvento, setLugarEvento] = useState('');
    const [descripcionEvento, setDescripcionEvento] = useState('');
    const [numPersonasEvento, setNumPersonasEvento] = useState(0);
    const [numCuposEvento, setNumCuposEvento] = useState(0);
    const [patrocinadoresEvento, setPatrocinadoresEvento] = useState('');
    const [precioPonenteEvento, setPrecioPonenteEvento] = useState(0);
    const [precioAsistenteEvento, setPrecioAsistenteEvento] = useState(0);
    const [totalRecaudadoEvento, setTotalRecaudadoEvento] = useState(0);
    const [totalGastadoEvento, setTotalGastadoEvento] = useState(0);
    const [presupuestoEstimadoEvento, setPresupuestoEstimadoEvento] = useState(0);
    const [estadoEvento, setEstadoEvento] = useState('En curso');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="container bg-orange-50 m-0 min-w-full min-h-full">
                <div className="container mx-auto py-12">
                    <form onSubmit={handleSubmit} className="max-w-4xl px-4 mx-auto">
                        <h2 className="text-4xl font-semibold mb-4">Formulario de creación de evento</h2>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="nombreEvento">Nombre del evento
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 p-2 w-full"
                                id="nombreEvento"
                                placeholder="Nombre del evento"
                                value={nombreEvento}
                                onChange={(e) => setNombreEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="lugarEvento">Lugar del evento
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 p-2 w-full"
                                id="lugarEvento"
                                placeholder="Lugar del evento"
                                value={lugarEvento}
                                onChange={(e) => setLugarEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="fechaInicioEvento">Fecha de inicio del evento
                            </label>
                            <input
                                type="date"
                                max={fechaFinalEvento}
                                className="border border-gray-300 p-2 w-full"
                                id="fechaInicioEvento"
                                placeholder="Fecha de inicio del evento"
                                value={fechaInicioEvento}
                                onChange={(e) => setFechaInicioEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="fechaFinalEvento">Fecha de finalización del evento
                            </label>
                            <input
                                type="date"
                                min={fechaInicioEvento}
                                className="border border-gray-300 p-2 w-full"
                                id="fechaFinalEvento"
                                placeholder="Fecha del evento"
                                value={fechaFinalEvento}
                                onChange={(e) => setFechaFinalEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="descripcionEvento">Descripcion del evento
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 p-2 w-full"
                                id="descripcionEvento"
                                placeholder="Descripcion del evento"
                                value={descripcionEvento}
                                onChange={(e) => setDescripcionEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="numPersonasEvento">Número de personas del evento
                            </label>
                            <input
                                type="number"
                                className="border border-gray-300 p-2 w-full"
                                id="numPersonasEvento"
                                min={0}
                                value={numPersonasEvento}
                                onChange={(e) => setNumPersonasEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="numCuposEvento">Número de cupos del evento
                            </label>
                            <input
                                type="number"
                                className="border border-gray-300 p-2 w-full"
                                id="numCuposEvento"
                                min={0}
                                value={numCuposEvento}
                                onChange={(e) => setNumCuposEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="patrocinadoresEvento">Patrocinadores del evento
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 p-2 w-full"
                                id="patrocinadoresEvento"
                                placeholder="Patrocinadores del evento"
                                value={patrocinadoresEvento}
                                onChange={(e) => setPatrocinadoresEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="precioPonenteEvento">Precio de la entrada para el ponente
                            </label>
                            <input
                                type="number"
                                className="border border-gray-300 p-2 w-full"
                                id="precioPonenteEvento"
                                placeholder="Precio del ponente"
                                value={precioPonenteEvento}
                                onChange={(e) => setPrecioPonenteEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="precioAsistenteEvento">Precio de la entrada para el asistente
                            </label>
                            <input
                                type="number"
                                className="border border-gray-300 p-2 w-full"
                                id="precioAsistenteEvento"
                                placeholder="Precio del asistente"
                                value={precioAsistenteEvento}
                                onChange={(e) => setPrecioAsistenteEvento(e.target.value)}
                            />
                        </div>
                        <div className="my-9">
                            <label
                                className="block text-gray-700 text-xl font-bold mb-2"
                                htmlFor="presupuestoEstimadoEvento">Presupuesto estimado para el evento
                            </label>
                            <input
                                type="number"
                                className="border border-gray-300 p-2 w-full"
                                id="presupuestoEstimadoEvento"
                                placeholder="Presupuesto estimado para el evento"
                                value={presupuestoEstimadoEvento}
                                onChange={(e) => setPresupuestoEstimadoEvento(e.target.value)}
                            />
                        </div>

                        {/* <div className="mt-9">
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-2 px-4 rounded"
                            >
                                Guardar
                            </button>
                        </div> */}
                        <div className="mt-9">
                            <Link
                                href="/home/admin"
                                className="bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-2 px-4 rounded"
                            >
                                Guardar
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormEventoComponent