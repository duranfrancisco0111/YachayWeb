
        const datosRegiones = {
            CLRM: {
                titulo: "RM Región Metropolitana",
                descripcion: "Capital: Santiago. Población: 7 millones."
            },
            CLAP: {
                titulo: "XV Region de Arica y Parinacota",
                descripcion: "Región más al norte de Chile. Rica en cultura Aymara."
            },
            CLTA: {
                titulo: "I Region de Tarapacá",
                descripcion: "Capital: Iquique. Famosa por la ZOFRI."
            },
            CLAN: {
                titulo: "II Region de Antofagasta",
                descripcion: "Zona minera por excelencia. Desierto de Atacama."
            },
            CLAT:{
                titulo: "III Region de Atacama",
                descripcion: "Puro desierto loco"
            },
            CLCO: {
                titulo: "IV Region de Coquimbo",
                descripcion: "Región costera con La Serena como capital."
            },
            CLVS: {
                titulo: "V Region de Valparaiso",
                descripcion: "antiguo congreso"
            },
            CLLI: {
                titulo: "XI Region Libertador General Bernardo O'Higgins",
                descripcion: "rancagua"
            },
            CLML: {
                titulo: "VII Region del Maule",
                descripcion: "tanto tanto"
            },
            CLNB: {
                titulo: "XVI Region del Ñuble",
                descripcion: "Tanto tanto"
            },
            CLAR: {
                titulo: "IX Region de la Araucania",
                descripcion: "quema de camiones"
            },
            CLBI: {
                titulo: "XIII Region del BIO BIO",
                descripcion: "persa biobio"
            },
            CLLR: {
                titulo: "XIVRegion de los Rios",
                descripcion: "Muerte piñera"
            },
            CLLL: {
                titulo: "X Region de los Lagos",
                descripcion: "nada"
            },
            CLAI: {
                titulo: "XI Region Aisén del General Carlos Ibáñez del Campo",
                descripcion: "a la cresta del mundo"
            },
            CLMA: {
                titulo: "XII Region Magallanes y Antártica Chilena",
                descripcion: "ma helao que la chucha"
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
