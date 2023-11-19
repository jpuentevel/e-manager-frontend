import Link from "next/link";

const TableEventos = () => {
    return (
        <table className="bg-white table-fixed mx-auto w-full">
            <thead className="border-4 border-amber-500">
            <tr>
                <th className="text-xl w-96">Evento</th>
                <th className="text-xl">Estado</th>
                <th className="text-xl">Ver</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-4 border-amber-500">
                <td className="p-3 text-xl w-96">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="p-3 text-xl text-center">Activo</td>
                <td className="p-3 flex justify-center">
                    <Link
                        className="bg-orange-500 hover:bg-orange-600 text-white text-l font-semibold py-2 px-4 rounded"
                        href="#"
                    >
                        Ver evento
                    </Link>
                </td>
            </tr>
            <tr className="border-4 border-amber-500">
                <td className="p-3 text-xl w-96">Witchy Woman</td>
                <td className="p-3 text-xl text-center">Finalizado</td>
                <td className="p-3 flex justify-center">
                    <Link
                        className="bg-orange-500 hover:bg-orange-600 text-white text-l font-semibold py-2 px-4 rounded"
                        href="#"
                    >
                        Ver evento
                    </Link>
                </td>
            </tr>
            <tr className="border-4 border-amber-500">
                <td className="p-3 text-xl w-96">Shining Star</td>
                <td className="p-3 text-xl text-center">Inactivo</td>
                <td className="p-3 flex justify-center">
                    <Link
                        className="bg-orange-500 hover:bg-orange-600 text-white text-l font-semibold py-2 px-4 rounded"
                        href="#"
                    >
                        Ver evento
                    </Link>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default TableEventos;