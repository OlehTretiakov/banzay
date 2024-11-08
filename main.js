'use strict';

const japaneseRestaurant = {
    restName: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],
    workingHours: {
        wed: {
            open: 10,
            close: 23,
        },
        fri: {
            open: 10,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
        sun: {
            open: 12,
            close: 23,
        },
    },
    orderFood(appetizersIndex, mainMenuIndex) {
        return [
            this.appetizers[appetizersIndex],
            this.mainMenu[mainMenuIndex]
        ]
    },
    foodDelivery(obj) {
        const { deliveryTime, addres, mainMenuIndex, appetizersIndex } = obj
        console.log(`You ordered ${this.mainMenu[mainMenuIndex]}
        and ${this.appetizers[appetizersIndex]}.Your order is coming to
        ${addres} at ${deliveryTime}`);
    },
    orderSusi(ing1, ing2, ing3) {
        alert(`You ordered susi width ${ing1}, ${ing2}, ${ing3}`)
    }
};
//practice
/* japaneseRestaurant.foodDelivery({
    deliveryTime: '12:30',
    addres: 'New Yourk',
    mainMenuIndex: 1,
    appetizersIndex: 0
}
) */


// const ingridients = [prompt("first ing"), prompt('second ing'), prompt('last ing')]

// japaneseRestaurant.orderSusi(...ingridients)


const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for (const [a, b] of Object.entries(japaneseRestaurant)) {
    console.log(a,b)
}