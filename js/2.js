const cars = [{
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
},
{
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
},{ 
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
},

{
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
}, 
{
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
}
] 

const containerRef = document.querySelector('.container');

const markContainer = cars.map(({car, type,price, img}) =>
`
<li>
<img src="${img}" alt="car" width = "300px">
<p>car: ${car}</p>
<p>type: ${type}</p>
<p>price: ${price}</p>
</li>
`
).join('')

containerRef.insertAdjacentHTML('beforeend', markContainer)
console.log(containerRef)

const carSearcBy = document.querySelector('form')
console.log(carSearcBy)

carSearcBy.addEventListener('click',onSearh)

function onSearh (event){
event.preventDefault();

const {carName,params} = event.currentTagret.elements;
console.log(carName,params);

const filterCar = cars.filter(item => item[params.value]
    .toLoweCase() === carName.value.trim().toLoweCase()
    )
}