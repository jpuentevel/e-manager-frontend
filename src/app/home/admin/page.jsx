import Link from "next/link";
import TableEvento from "@/components/tableEvento/TableEvento";

const AdminHome = () => {

    return (
        <>
            <div className="container p-10 bg-orange-50 m-0 min-w-full min-h-full">
                <p className="text-4xl text-center font-semibold">Bienvenido, administrador!</p>

                <div className="my-9 border-4 rounded-3xl border-amber-500 p-5 mx-auto max-w-6xl">
                    <div className="my-3 flex justify-between">
                        <h1 className="mx-auto text-3xl font-semibold">Lista de eventos creados</h1>
                        <Link
                            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-2 px-3 rounded"
                            href="/home/admin/crear-evento"
                        >
                            Crear nuevo evento
                        </Link>
                    </div>

                    <TableEvento />
                </div>

                <div className="mx-auto my-9 max-w-6xl">
                    <Link
                        className="mx-auto bg-orange-500 hover:bg-orange-600 text-white text-2xl font-bold py-3 px-6 rounded-full"
                        href="/"
                    >
                        Cerrar sesión
                    </Link>
                </div>
            </div>
        </>
    )
}
export default AdminHome;