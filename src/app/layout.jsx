import { Inter } from 'next/font/google'
import './globals.css'
import HeaderComponent from "@/components/header/HeaderComponent";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manjeador de Eventos UdeC',
  description: 'Manejador de eventos de la Universidad de Cartagena',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={inter.className}>
        <HeaderComponent/>
        {children}
      </body>
    </html>
  )
}
