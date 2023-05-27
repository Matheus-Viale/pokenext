import { ReactNode } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps){
    return (
        <>
            <Head>
                <link rel="shortchut icon" href="/images/favicon.ico" />
                <title>PokeNext - Matheus Viale</title>
            </Head>
            <Navbar/>
            <main className="main-container">{children}</main>
            <Footer/>
        </>
    )
}