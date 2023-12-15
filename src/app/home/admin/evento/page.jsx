import Link from "next/link";
import TableEventoComponent from "@/components/tableEvento/TableEventoComponent";

const loadData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log(data)
    return data
}

const AdminTableView = async () => {

    const data = await loadData()

    return (
        <>
            <div className="container p-10 bg-orange-50 m-0 min-w-full min-h-full">

                <div className="my-9 border-4 rounded-3xl border-amber-500 p-5 mx-auto max-w-6xl">
                    <div className="my-3 flex justify-between">
                        <h1 className="mx-auto text-3xl font-semibold">Lista de eventos creados</h1>
                    </div>

                    <TableEventoComponent data={data} />
                </div>
            </div>
        </>
    )
}
export default AdminTableView;