const datosRegiones = {
    CLRM: {
        titulo: "RM Región Metropolitana",
        descripcion: "• Flora: Quillay, Espino.<br><br>• Fauna: Chinchilla, Sapito de cuatro ojos.<br><br>• Agricola: Uva vinifera, Poroto granado, Durazno betarraga"
    },
    CLAP: {
        titulo: "XV Region de Arica y Parinacota",
        descripcion: "• Flora: Cactáceas andinas, Llareta, Tola.<br><br>• Fauna: Vicuña, Guanaco.<br><br>• Agricola: Maíz morado, Papa oca."
    },
    CLTA: {
        titulo: "I Region de Tarapacá",
        descripcion: "• Flora: Tamarungo, Algarrobo, Tola, Rica-Rica.<br><br>  • Fauna: Vicuña, Alpaca, Flamenco andino.<br><br>  • Agrícola: Papas altiplánicas, Quinua.",

    },
    CLAN: {
        titulo: "II Region de Antofagasta",
        descripcion: "• Flora: Jarilla, Añañuca.<br><br>• Fauna: Guanaco, Flamenco chileno, Pez piedra, Caballa"
    },
    CLAT:{
        titulo: "III Region de Atacama",
        descripcion: "• Flora: Copiapoa, Pimiento del norte.<br><br> • Fauna: Gato andino, Pericote, Lenguado, Ostion del norte.<br><br> • Agricola: Uva pisquera, Olivares, Tunas."
    },
    CLCO: {
        titulo: "IV Region de Coquimbo",
        descripcion: "• Flora: Arrayan macho, Molle.<br><br>• Fauna: Zorro chilla, Cururo, Loco, Ostiones, Piure.<br><br>• Agricola: Papayo chileno, Granado, Hortaliza."
    },
    CLVS: {
        titulo: "V Region de Valparaiso",
        descripcion: "• Flora: Peumo, Boldo, Litre.<br><br>• Fauna: Degú, Picaflor chico, Pez sierra, Corvina, Jaiba mora.<br><br>• Agricola: Viñedos."
    },
    CLLI: {
        titulo: "VI Region Libertador General Bernardo O'Higgins",
        descripcion: "• Flora: Belloto del sur, Maitén.<br><br>• Fauna: Pudú, Huemul.<br><br>• Agricola: Trigo tradicional, Legumbres, Frutas de carozo."
    },
    CLML: {
        titulo: "VII Region del Maule",
        descripcion: "• Flora: Naranjillo, Hualo.<br><br>• Fauna: Rana chilena, Marsupial.<br><br>• Agricola: Maíz antiguo. Viña patrimoniales, Tomate limachino."
    },
    CLNB: {
        titulo: "XVI Region del Ñuble",
        descripcion: "• Flora: Roble, Avellano chileno.<br><br>• Fauna: Zorro de Darwin, Carpintero negro.<br><br>• Agricola: Castañas, Frambuesas, Trigo rojo."
    },
    CLAR: {
        titulo: "VIII Region de la Araucania",
        descripcion: "• Flora: Araucaria, Laurel, Coihue.<br><br>• Fauna: Puma, Peucodón, Monito del monte.<br><br>• Agricola: Piñones, Papas mapuche, Cereales antiguos."
    },
    CLBI: {
        titulo: "VIII Region del BIO BIO",
        descripcion: "• Flora: Tineo, Ulmo.<br><br>• Fauna: Ranita de Darwin, Condor, Reineta, Merluza, Almejas.<br><br>• Agricola: lupino, Cebada, Hortolizas tradicionales."
    },
    CLLR: {
        titulo: "XIV Region de los Rios",
        descripcion: "• Flora: Tepú. Mañío, Canelo.<br><br>• Fauna: Gato guiña, Cisne de cuello negro.<br><br>• Agricola: Grosellas, Zarzaparilla."
    },
    CLLL: {
        titulo: "X Region de los Lagos",
        descripcion: "• Flora: Arrayan, Tiaca, Luma.<br><br>• Fauna: Huillín, Cormorán, Salmon, Mejillon chileno, Luga.<br><br>• Agricola: Papa chilota, Frambuesa silvestre."
    },
    CLAI: {
        titulo: "XI Region Aysén del General Carlos Ibáñez del Campo",
        descripcion: "• Flora: Ñirre, Calafate, Chilco.<br><br>• Fauna: Huemul, Condor austral, Zorro colorado, Centolla, Erizo, Merluza austral.<br><br>• Agricola: Ruibarbo, Frutillas silvestres."
    },
    CLMA: {
        titulo: "XII Region Magallanes y Antártica Chilena",
        descripcion: "• Flora: Pastizales esteparios, Líquenes.<br><br>• Fauna: Pingüino rey, Delfin austral.<br><br>• Agricola: No hay, solo cultivos experimentales."
    }
};

// Detecta los clics en cada path del SVG
document.querySelectorAll('.container svg path').forEach(region => {
    region.style.cursor = "pointer";
    region.addEventListener("click", () => {
    const id = region.getAttribute("id");
    const datos = datosRegiones[id];
    if (datos) {
        document.getElementById("titulo-region").textContent = datos.titulo;
        document.getElementById("descripcion-region").innerHTML = datos.descripcion;

        
        // Mostrar u ocultar la imagen según corresponda
        const imagenRegion = document.getElementById("imagen-region");
        if (datos.imagen) {
            imagenRegion.src = datos.imagen;
            imagenRegion.style.display = "block";
        } else {
            imagenRegion.style.display = "none";
        }
        
        document.getElementById("info-region").style.display = "block";
    }
    });
});
