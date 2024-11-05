'use strict';

const japaneseRestaurant = {
    name: 'Banzai',
    location: '108 Markham Woods Rd, Longwood, USA',
    categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
    appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
    mainMenu: ['Sushi', 'Ramen', 'Tempura'],

    orderFood(appetizersIndex, mainMenuIndex) {
        return [
            this.appetizers[appetizersIndex],
            this.mainMenu[mainMenuIndex]
        ]
    }
};

const [appetizer, main] = japaneseRestaurant.orderFood(3, 1)

