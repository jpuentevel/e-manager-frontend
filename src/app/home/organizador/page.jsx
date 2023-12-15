import HeaderOrganizadorComponent from "@/components/header/HeaderOrganizadorComponent";
import TableEventoOrganizadorComponent from "@/components/tableEvento/TableEventoOrganizadorComponent";

const loadData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log(data)
    return data
}

const Organizador = async() => {
    const data = await loadData()

    return(
        <div>
            <HeaderOrganizadorComponent/>
            <div className="container p-10 bg-orange-50 m-0 min-w-full min-h-full">
                <div className="my-9 border-4 rounded-3xl border-gray-800 p-5 mx-auto max-w-6xl">
                    <div className="my-3 flex justify-between">
                        <h1 className="mx-auto text-3xl font-semibold">Lista de eventos Asignados</h1>
                    </div>
                    <TableEventoOrganizadorComponent data={data}/>
                </div>
            </div>
        </div>
        

        

    )
}

export default Organizador;