import React from "react"
import { Link } from "react-router-dom"
import './header.css'

const Index = () => {
    return (
        <nav>
            <div class="container">
                <Link class="logo" to="/">
                    <img title="Tabela Fipe" alt="Tabela Fipe" src="https://tabelafipecarros.com.br/dist/images/logo.png" />
                </Link>
                <div class="options">
                    <div class="btnfilter">
                        <Link to="/filtro">
                            <span>
                                Ver outras marcas
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Index