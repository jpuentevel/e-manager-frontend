import React from 'react'
import Link from "next/link";

const EventoAdminViewComponent = ({evento}) => {
    return (
        <>
            <div className='container p-10 bg-orange-50 m-0 min-w-full min-h-full'>
                <h1 className='text-5xl font-bold'>Datos del evento</h1>
                <div className='mt-5'>
                    <div className='mt-5'>
                        <h2 className='text-xl font-bold'>Nombre del evento:</h2>
                        <h2 className='text-2xl'>{evento.name}</h2>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-xl font-bold'>Nombre del organizador del evento:</h2>
                        <h2 className='text-2xl'>{evento.username}</h2>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-xl font-bold'>Correo del organizador:</h2>
                        <h2 className='text-2xl'>{evento.email}</h2>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-xl font-bold'>Fecha de inicio del evento:</h2>
                        <h2 className='text-2xl'>05/03/2024</h2>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-xl font-bold'>Fecha de inicio del evento:</h2>
                        <h2 className='text-2xl'>05/07/2024</h2>
                    </div>
                    <div className='mt-5'>
                        <h2 className='text-xl font-bold'>Descripción del evento</h2>
                        <h2 className='text-2xl'>
                            Aenean gravida quis nulla ac vestibulum. Morbi laoreet ornare felis in tincidunt. In odio magna, placerat vitae eros rutrum, tempus sagittis urna. Aenean at dignissim.
                        </h2>
                    </div>
                </div>
                <div className='columns-3 my-7'>
                    <Link
                        className="bg-orange-500 hover:bg-orange-600 text-white text-2xl font-semibold py-2 px-4 rounded mx-5"
                        href="/home/admin"
                    >
                        Regresar
                    </Link>
                    <Link
                        className="bg-cyan-500 hover:bg-cyan-600 text-white text-2xl font-semibold py-2 px-4 rounded mx-5"
                        href="/home/admin/crear-evento"
                    >
                        Modificar
                    </Link>
                    <button className="bg-red-600 hover:bg-red-700 text-white text-2xl font-semibold py-2 px-4 rounded mx-5">
                        Eliminar
                    </button>
                </div>
            </div>
        </>
    )
}

export default EventoAdminViewComponent