const data = {
    //nav for top header & top footer
    nav: ['Home', 'Shop', 'About', 'Gallery', 'Locations', 'Journal', 'Contact', 'My Account'],

    //hero jumbo
    jumbo: {
        label: 'FRESH & TASTY BAKERY EVERY DAY',
        title: 'The Perfect Fresh Bread',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi velit porro blanditiis amet ea praesentium corrupti nam consectetur aspernatur, nostrum in earum vitae, fugit repellat voluptates officia natus dignissimos.',
        button: 'Explore our products',
    },

    //products section
    products: {
        label: 'OUR PRODUCTS',
        title: 'All our delectable pastries are baked fresh in our Kitchen very morning, and are made with all natural, all organic, ingredients.',
        button: 'Start shopping',
    },

    //products gallery
    gallery: [
        {
            id: '1',
            title: 'choco chip cookies',
            src: '/src/assets/img/choco-chip-cookies-400x510.jpg',
        },
        {
            id: '2',
            title: 'strawberry jam cookies',
            src: '/src/assets/img/strawberry-jam-cookies-400x510.jpg',
        },
        {
            id: '3',
            title: 'strawberry donut',
            src: '/src/assets/img/strawberry-donut-400x510.jpg',
        },
        {
            id: '4',
            title: 'perfect macarons',
            src: '/src/assets/img/perfect-macarons-400x510.jpg',
        },
        {
            id: '5',
            title: 'cherry cake',
            src: '/src/assets/img/cherry-cake-400x510.jpg',
        },
        {
            id: '6',
            title: 'cookies with ice cream',
            src: '/src/assets/img/cookies-with-ice-cream-400x510.jpg',
        },
        {
            id: '7',
            title: 'blackberry stuffed bread',
            src: '/src/assets/img/blackberry-stuffed-bread-400x510.jpg',
        },
    ],

    //event section
    event: {
        label: 'CORPORATE & WEDDINGS',
        title: 'Baking Special Moments',
        img: [
            {
                event: 'corporate',
                src: '/src/assets/img/corporate-bg.jpg',
                hover: '/src/assets/img/corporate-hover-bg.jpg'
            },
            {
                event: 'wedding',
                src: '/src/assets/img/wedding-bg.jpg',
                hover: '/src/assets/img/wedding-hover-bg.jpg'
            },
        ],
    },

    //Shopping Call section
    shopping: {
        title: 'Find a freshly baked product perfect for you',
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        button: 'Shop All Products',
    },

    // info A section
    infoA: {
        title: 'Tell us what you have in mind',
        num: '01',
        subtitle: 'MANUAL INGREDIENTS SELECTION',
        paragraph: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatu deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, imilique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
    },

    // info B section
    infoB: {
        title: 'We start baking',
        num: '02',
        subtitle: 'SWEET AND DELICOUS',
        paragraph: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    },

    // info C section
    infoC: {
        title: 'Delivered to your home',
        num: '03',
        subtitle: 'BAKED TO ORDER & GIFT WRAPPED',
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },

    // bakery location
    location: {
        label: 'LOCATIONS',
        title: 'Visit Our Bakeries',
    },

    // store pictures
    store: [
        {
            id: '1',
            img: '/src/assets/img/new-york-bk.jpg',
        },
        {
            id: '2',
            img: '/src/assets/img/london-bk.jpg',
        },
    ],

    // social call to action & social post
    social: {
        label: 'MADE FOR SHARING',
        title: 'Let\' stay in touch',
        button: 'Follow us',
        pictures: [
            {
                id: '3',
                img: '/src/assets/img/social-3.jpg',
            },
            {
                id: '4',
                img: '/src/assets/img/social-4.jpg',
            },
            {
                id: '5',
                img: '/src/assets/img/social-5.jpg',
            },
            {
                id: '6',
                img: '/src/assets/img/social-6.jpg',
            }
        ]
    },

    //delivery section
    delivery: {
        label: 'TRY OUR SEASONAL PRODUCTS',
        title: 'Order for pick-up or delivery to your home',
        button: 'Shop now',
    },

    //bottom footer: social icons
    socials: [
        {
            id: 'ig',
            name: 'instagram',
            class: 'fa-brands fa-instagram',
        },
        {
            id: 'tw',
            name: 'twitter',
            class: 'fa-brands fa-twitter',
        },
        {
            id: 'fb',
            name: 'facebook',
            class: 'fa-brands fa-facebook-f',
        },
        {
            id: 'pin',
            name: 'pinterest',
            class: 'fa-brands fa-pinterest-p',
        },
    ],
}

export { data }