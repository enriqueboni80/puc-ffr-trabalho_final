import React, { useState, useEffect } from "react";
import useMarcas from "./useMarcas"
import ShowMarcas from "./showMarcas"

const Index = () => {
    const marcas = useMarcas()
    return (
        <ShowMarcas marcas={marcas} />
    )
}

export default Index
