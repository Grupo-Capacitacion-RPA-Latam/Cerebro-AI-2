import React from 'react'
import Card from './Card'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'


const cards = [
    {
        id: 1,
        title: 'Free',
        image: image1,
        url:'https://faztweb.com',
        text1 : 'Acceso limitado a la informacion',
        text2 : 'Descargas limitadas a 2 por dia',
        text3 : 'Dudas atentidas Despues de un mes',
        precio:'$0/mo'

    },
    {
        id: 2,
        title: 'Basic',
        image: image2,
        url:'https://faztblog.com',
        text1 : 'Acceso limitado a la informacion',
        text2 : 'Descargar limitadas a 5 por dia',
        text3 : 'Dudas atendidas despues de 15 dias',
        precio:' $20/mo'
    },
    {
        id: 3,
        title: 'Standard',
        image: image3,
        url:'https://youtube.com',
        text1 : 'Acceso limitado a cierta informaciom',
        text2 : 'Descargas limitadas a 10 por dia',
        text3 : 'Dudas atentidas despues de 7 dias',
        precio:'$50/mo'
    },
    {
        id: 4,
        title: 'Premium',
        image: image1,
        url:'https://facebook.com',
        text1 : 'Acceso ilimitado',
        text2 : 'Descargas ilimitadas',
        text3 : 'Dudas resueltas despues dentro de las 24 horas',
        precio:' $70/mo'
    }

];
function Cards() {
    return (
        <div className="App">
            {
                cards.map(data => {
                    return <Card title={data.title} 
                            imageSource={data.image} 
                            url={data.url}
                            text1={data.text1}
                            text2={data.text2}
                            text3={data.text3} 
                            precio={data.precio}/>    
                })
            }
        </div>
    )
}

export default Cards
