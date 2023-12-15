"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeaderOrganizadorComponent = () => {
    

    return(
        <nav className="bg-gray-800">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image 
                                src="/usuario.png"
                                alt="usuario"
                                width={50}
                                height={50}
                            />
                            
                        </div>
                        <h1 className="text-white hover:bg-white hover:text-black rounded-lg ml-6 font-bold">José Puente</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-8">
                            <a href="" className="text-white hover:bg-white hover:text-black rounded-lg p-4 ml-6 font-bold">
                                Configuración
                            </a>

                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-4 ml-6 font-bold">
                                Cerrar sesión
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default HeaderOrganizadorComponent