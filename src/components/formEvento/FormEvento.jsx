"use client"
import { useState } from "react";

const FormEvento = () => {
    const [nombreEvento, setNombreEvento] = useState('');
    const [fechaEvento, setFechaEvento] = useState('');
    const [lugarEvento, setLugarEvento] = useState('');
    const [descripcionEvento, setDescripcionEvento] = useState('');
    const [horarioEvento, setHorarioEvento] = useState('');
    const [numPersonasEvento, setNumPersonasEvento] = useState(0);
    const [numCuposEvento, setNumCuposEvento] = useState(0);
    const [patrocinadoresEvento, setPatrocinadoresEvento] = useState('');
    const [recursosEvento, setRecursosEvento] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombreEvento, fechaEvento, lugarEvento, descripcionEvento, horarioEvento, numPersonasEvento, numCuposEvento, patrocinadoresEvento, recursosEvento)
    }

    return (
        <>
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
                            htmlFor="fechaEvento">Fecha del evento
                        </label>
                        <input
                            type="date"
                            className="border border-gray-300 p-2 w-full"
                            id="fechaEvento"
                            placeholder="Fecha del evento"
                            value={fechaEvento}
                            onChange={(e) => setFechaEvento(e.target.value)}
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
                            htmlFor="horarioEvento">Horario del evento
                        </label>
                        <input
                            type="time"
                            className="border border-gray-300 p-2 w-full"
                            id="horarioEvento"
                            value={horarioEvento}
                            onChange={(e) => setHorarioEvento(e.target.value)}
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
                            htmlFor="recursosEvento">Recursos del evento
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300 p-2 w-full"
                            id="recursosEvento"
                            placeholder="Recursos del evento"
                            value={recursosEvento}
                            onChange={(e) => setRecursosEvento(e.target.value)}
                        />
                    </div>

                    <div className="mt-9">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-xl text-white font-bold py-2 px-4 rounded"
                        >
                            Guardar
                        </button>
                    </div
                        >
                </form>
            </div>
        </>
    )
}

export default FormEvento