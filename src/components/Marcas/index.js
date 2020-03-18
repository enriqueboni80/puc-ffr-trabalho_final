import React, { useState, useEffect } from "react";
import useMarcas from "./useMarcas"
import MarcasPresentation from "./MarcasPresentation"

const Index = () => {
    const marcas = useMarcas()
    return (
        <MarcasPresentation marcas={marcas} />
    )
}

export default Index
