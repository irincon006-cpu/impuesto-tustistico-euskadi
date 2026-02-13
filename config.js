var config = {
    style: 'mapbox://styles/irinconekhi006/cmlk3cwzm00jw01s9e7g6b9v7',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaXJpbmNvbmVraGkwMDYiLCJhIjoiY2t5d3hjZzVhMDZyYzJvcXZobWM1bm1zMiJ9.h5JO7_uC5TeIM1PJvauMeg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Nuevo impuesto turísticos en Euskadi',
    subtitle: '¿Cómo se reparte el alojamiento turístico y dónde afectará la nueva norma en la Comunidad Autónoma Vasca?',
    byline: 'Iker Rincon Moreno',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
         {
            id: 'first-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Alojamientos turísticos en Euskadi',
            image: './assets/coropleta.png',
            description: 'Según el último dato del Registro de empresas y actividades turísticas de Euskadi, actualmente hay 88 604 plazas alojativas.',
            location: {
                center: [-1.81728, 42.98470],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'TotalPlazas',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'TotalPlazas',
                     opacity: 1,
                 }
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'La oferta turística de Euskadi está extremadamente concentrada en pocos municipios',
            image: './assets/cantidad.png',
            description: 'Más del 60% de los municipios tienen menos de 100 plazas, mientras que unas pocas ciudades superan las 5000.',
            location: {
                center: [-2.74540, 43.05401],
                zoom: 8.04,
                pitch: 20.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Donostia-San Sebastián, y alrededores',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Panorama_from_Monte_Igueldo_%285106955283%29.jpg',
            description: 'En el mapa de Euskadi, Donostia / San Sebastián y su comarca es una anomalía luminosa que concentra una parte desproporcionada de la capacidad turística del territorio. Mientras la mayoría de municipios apenas superan unas decenas o cientos de plazas, Donostia acumula más de 17.000, combinando un sólido tejido hotelero con un peso creciente de la vivienda para uso turístico.<br> No se trata solo de volumen, sino de modelo: destino histórico, gastronómico y cultural, ha sabido integrar la oferta tradicional con nuevas formas de alojamiento, intensificando la actividad en su frente marítimo y en los barrios centrales.',
            location: {
                center: [-1.94136, 43.32495],
                zoom: 9.30,
                pitch: 64,
                bearing: 16,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'Hoteles',
                     opacity: 1,
                     duration: 3000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'Hoteles',
                     opacity: 0,
                 }
            ]
        },
                        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Efecto Guggenheim',
            image: './assets/guggenheim.jpg',
            description: 'La inauguración del Museo Guggenheim Bilbao en 1997 marcó un antes y un después en la proyección internacional de Bilbao y, por extensión, de Euskadi. Lo que hasta entonces era una ciudad industrial en proceso de reconversión se transformó en un icono turístico.<br> El llamado “efecto Guggenheim” no solo multiplicó la llegada de visitantes, sino que reconfiguró la identidad turística del territorio: atrajo inversión, impulsó la apertura de nuevos alojamientos y servicios, y posicionó a Euskadi en el mapa cultural europeo.',
            location: {
                center: [-2.93385, 43.26766],
                zoom: 17.04,
                pitch: 71,
                bearing: -132,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
    
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Gran parte del territorio tiene una oferta turística muy reducida',
            image: 'https://saposyprincesas.elmundo.es/assets/2020/12/agroturismo-en-el-pais-vasco-parque-natural-armanon.jpg/980/webp',
            description: 'Fuera de las tres capitales y de la costa, la oferta de alojamiento turístico es testimonial, con una baja presencia en el entorno rural.',
            location: {
                center: [-2.80891, 43.07275],
                zoom: 8.85,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'TotalPlazas',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'TotalPlazas',
                     opacity: 1,
                 }
            ]
        },
         {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Impuesto turístico',
            image: 'https://eitb.scene7.com/is/image/eitb/hotelak%20es:eitb-banner-header?ts=1770311778216&dpr=on,1&fmt=webp-alpha&qlt=80',
            description: 'Las tres diputaciones de la Comunidad Autónoma Vasca han publicado un anteproyecto de norma foral para poner en marcha un impuesto turístico de hasta 7,5 euros por persona y día en los tres territorios históricos. El objetivo es que el nuevo impuesto entre en vigor este verano, y serán los establecimientos los encargados de cobrarla. En función del tipo de establecimiento, las cantidades oscilarán entre 0,75 y 5 euros. <br> Foto: Orain',
            location: {
                center: [-2.74540, 43.05401],
                zoom: 8.04,
                pitch: 20.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'TasaTuristica',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'TotalPlazas',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'El recargo del 50%, principalmente en las capitales',
            image: './assets/IMPUESTOONA.png',
            description: 'A esa cifra, los ayuntamientos podrán sumar, por ordenanza fiscal, un recargo de hasta el 50 % cuando en el término municipal el número de plazas alojativas sea igual o superior a 750. Y el caso de que el número de plazas sea igual o inferior a 25, los consistorios podrán establecer una bonificación de hasta el 100 %.',
            location: {
                center: [-2.74540, 43.05401],
                zoom: 8.04,
                pitch: 20.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
    
        },
        {
            id: 'seven-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Pero, ¿qué tipo de alojamientos hay?',
            image: './assets/tiposalojamientos.png',
            description: 'Actualmente, casi la mitad de las plazas alojativas son hoteles, seguido de cerca de viviendas para uso turístico.',
            location: {
                center: [-2.49280, 43.04833],
                zoom: 8.80,
                pitch: 47.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'TotalPlazas',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'TotalPlazas',
                     opacity: 1
                 }
            ]
    
        },
        {
            id: 'eight-chapter',
            alignment: 'left',
            hidden: false,
            title: '¿Y cómo se divide la oferta por territorio?',
            image: './assets/banaketa.jpg',
            description: 'Este es el reparto de la oferta alojativa en Euskadi por territorio.',
            location: {
                center: [-3.35067, 42.95173],
                zoom: 8.15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'TotalPlazas',
                     opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                {
                    layer: 'TotalPlazas',
                     opacity: 0
                 }
            ]
    
        },
    ]
};
