import React from "react"
import { Link } from "react-router-dom"
import './header.css'

const Index = () => {
    return (
        <nav>
            <div class="container">
                <div class="logo">
                    <Link class="navbar-brand" to="/">
                        <img class="img-fluid" title="Tabela Fipe" alt="Tabela Fipe" src="https://tabelafipecarros.com.br/dist/images/logo.png" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Index