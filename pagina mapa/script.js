
        const datosRegiones = {
            CLRM: {
                titulo: "RM Región Metropolitana",
                descripcion: "Informacion faltante"
            },
            CLAP: {
                titulo: "XV Region de Arica y Parinacota",
                descripcion: "Informacion faltante"
            },
            CLTA: {
                titulo: "I Region de Tarapacá",
                descripcion: "Informacion faltante."
            },
            CLAN: {
                titulo: "II Region de Antofagasta",
                descripcion: "Informacion faltante"
            },
            CLAT:{
                titulo: "III Region de Atacama",
                descripcion: "Informacion faltante"
            },
            CLCO: {
                titulo: "IV Region de Coquimbo",
                descripcion: "Informacion faltante"
            },
            CLVS: {
                titulo: "V Region de Valparaiso",
                descripcion: "Informacion faltante"
            },
            CLLI: {
                titulo: "XI Region Libertador General Bernardo O'Higgins",
                descripcion: "Informacion faltante"
            },
            CLML: {
                titulo: "VII Region del Maule",
                descripcion: "Informacion faltante"
            },
            CLNB: {
                titulo: "XVI Region del Ñuble",
                descripcion: "Informacion faltante"
            },
            CLAR: {
                titulo: "IX Region de la Araucania",
                descripcion: "Informacion faltante"
            },
            CLBI: {
                titulo: "XIII Region del BIO BIO",
                descripcion: "Informacion faltante"
            },
            CLLR: {
                titulo: "XIVRegion de los Rios",
                descripcion: "Informacion faltante"
            },
            CLLL: {
                titulo: "X Region de los Lagos",
                descripcion: "Informacion faltante"
            },
            CLAI: {
                titulo: "XI Region Aisén del General Carlos Ibáñez del Campo",
                descripcion: "Informacion faltante"
            },
            CLMA: {
                titulo: "XII Region Magallanes y Antártica Chilena",
                descripcion: "Informacion faltante"
            },



            // Agrega más según los IDs
        };

        // Detecta los clics en cada path del SVG
        document.querySelectorAll('.container svg path').forEach(region => {
            region.style.cursor = "pointer";
            region.addEventListener("click", () => {
            const id = region.getAttribute("id");
            const datos = datosRegiones[id];
            if (datos) {
                document.getElementById("titulo-region").textContent = datos.titulo;
                document.getElementById("descripcion-region").textContent = datos.descripcion;
                document.getElementById("info-region").style.display = "block";
            }
            });
        });
