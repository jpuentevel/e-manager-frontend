import EventoAdminViewComponent from "@/components/eventoAdminViewComponent/EventoAdminViewComponent";

const loadData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    console.log(data)
    return data
}

const EventoAdminView = async ({params}) => {
    const {id} = params
    const evento = await loadData(id)

    return (
        <EventoAdminViewComponent evento={evento} />
    )
}

export default EventoAdminView