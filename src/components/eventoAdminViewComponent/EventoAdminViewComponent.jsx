import React from 'react'

const EventoAdminViewComponent = ({evento}) => {
    return (
        <>
            <div className='container p-10 bg-orange-50 m-0 min-w-full min-h-full'>
                <h1 className='text-5xl font-bold'>Datos del evento</h1>
                <div className='mt-5'>
                    <div className='mt-5'>
                        <h2 className='text-2xl font-bold'>Nombre del evento:</h2>
                        <h2 className='text-3xl'>{evento.name}</h2>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-2xl font-bold'>Nombre del organizador del evento:</h2>
                        <h2 className='text-3xl'>{evento.username}</h2>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-2xl font-bold'>Correo del organizador:</h2>
                        <h2 className='text-3xl'>{evento.email}</h2>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-2xl font-bold'>Descripción del evento</h2>
                        <h2 className='text-3xl'>{evento.address.city}</h2>
                    </div>
                </div>
                <div className='columns-2 my-7'>
                    <button className="bg-green-600 hover:bg-green-700 text-white text-2xl font-semibold py-2 px-4 rounded mx-5">
                        Aceptar
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white text-2xl font-semibold py-2 px-4 rounded mx-5">
                        Rechazar
                    </button>
                </div>
            </div>
        </>
    )
}

export default EventoAdminViewComponent