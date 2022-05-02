const item=[
    {
        id:0,
        img: 'http://drive.google.com/uc?export=view&id=1OoNfddGGGdEEQPKcNNg-sVmXuc6CfaJN',
        name:'RUTINI DOMINIO',
        descripcion:'Rojo granate límpido con reflejos violáceos.En nariz se destacan aromas frutales como la ciruela, florales como la violeta y un toque especiado de regaliz.En boca la tipicidad del varietal se presenta con sabores a fruta negra, jugoso, fresco y con una acidez equilibrada.',
        cosecha:2019,
        variedad:'Malbec 100%',
        crianza:'12 meses el 20% del corte en roble francés',
        price:13400,
        sugerencia:'Carnes rojas grilladas y horneadas, cordero, empanadas regionales, quesos maduros.',
        stock:5
    },
]    
export function getItem () {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(item)
        },2000)
    })
}