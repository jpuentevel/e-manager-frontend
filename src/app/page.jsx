import Link from "next/link";
import UserCard from "@/components/userCard/UserCard";

export default function Home() {
  return (
    <>
        <main className="container p-10 bg-orange-50 m-0 min-w-full min-h-full">
            <div className="mx-auto max-w-6xl">
                <h2 className="sm:text-7xl text-5xl font-bold ">Bienvenido al manejador de eventos de la Universidad de Cartagena</h2>
                <h3 className="my-12 sm:text-5xl text-4xl font-semibold text-center">¿Cómo desea ingresar al sistema?</h3>
                <div className="flex flex-col items-center pt-10 sm:flex-row">
                    <div className="w-full sm:w-1/2 p-4 mb-4 sm:mb-0">
                        <UserCard
                            image="/admin_profile_card.svg"
                            type="Administrador"
                            href={"/admin"}
                        />
                    </div>
                    <div className="w-full sm:w-1/2 p-4 mb-4 sm:mb-0">
                        <UserCard
                            image="/user_profile_card.svg"
                            type="Organizador"
                            href={"/organizador"}
                        />
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

// <Link href={"/admin/eventos/crear-evento"}>Crear evento</Link>
