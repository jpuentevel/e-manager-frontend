import React from 'react';
import Link from "next/link";

const AdminHomeComponent = () => {
    return (
        <div className="container p-10 bg-orange-50 m-0 min-w-full min-h-full">
            <h1 className="my-9 text-5xl text-center font-semibold">Bienvenido, administrador!</h1>
            <div className="inline-grid grid-cols-1 rounded border-orange-500 border-4 mx-auto">
                <Link
                    className="rounded bg-orange-500 text-white text-6xl font-semibold py-8 px-4 mt-2 mb-1 mx-2"
                    href="/home/admin/evento"
                >
                    Ver eventos
                </Link>
                <Link
                    className="rounded bg-orange-500 text-white text-6xl font-semibold py-8 px-4 my-1 mx-2"
                    href="/home/admin/crear-evento"
                >
                    Crear evento
                </Link>
                <Link
                    className="rounded bg-orange-500 text-white text-6xl font-semibold py-8 px-4 my-1 mx-2"
                    href="/home/admin/dashboard"
                >
                    Ver estadísticas
                </Link>
                <Link
                    className="rounded bg-orange-500 text-white text-6xl font-semibold py-8 px-4 mt-1 mb-2 mx-2"
                    href="/"
                >
                    Cerrar sesión
                </Link>
            </div>
        </div>
    );
};

export default AdminHomeComponent;