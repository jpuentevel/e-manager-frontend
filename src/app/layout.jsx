import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manjeador de Eventos UdeC',
  description: 'Manejadro de eventos de la Universidad de Cartagena',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
