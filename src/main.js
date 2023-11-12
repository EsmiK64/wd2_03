import { Carousel } from 'flowbite';

console.log('loaded');

const carouselElement = document.getElementById('carousel-example');

const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1'),
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2'),
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3'),
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4'),
    },
    {
        position: 4,
        el: document.getElementById('carousel-item-5'),
    },
];

// options with default values
const options = {
    defaultPosition: 1,
    interval: 3000,
};

// instance options object
const instanceOptions = {
  id: 'carousel-example',
  override: true
};

const carousel = new Carousel(carouselElement, items, options, instanceOptions);