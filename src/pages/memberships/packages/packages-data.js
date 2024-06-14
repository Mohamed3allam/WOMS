const silver = {
    title:'Silver Package',
    package_cost:99,
    image:'packages-bg.jpg',
    link:'/packages/silver-package',
    title_color:'#dbdbdb',
    features:[
        'Membership in a British European organization',
        'Having the doctors information on the website',
        'Providing books online',
        'Publishing articles and research',
        'Obtaining a membership card',
        'Obtaining a membership certificate',
        'Membership verification code',
        'Get a personal account on the organization’s website',
    ]
}
const gold ={
    title:'Golden Package',
    package_cost:299,
    image:'packages-bg.jpg',
    link:'/packages/gold-package',
    title_color:'#ffdc73',
    features:[
        ...silver.features,
        'Attending international conferences',
        'Possibility of attending international courses',
        'Attending courses on the website',
        'Attending international practical training',
        'Professional training and development',
        'Professional network',
        'Providing consultations'
    ]
}
const diamond = {
    title:'Diamond Package',
    package_cost:499,
    image:'packages-bg.jpg',
    link:'/packages/diamond-package',
    title_color:'#a9d4ff',
    features:[
        ...gold.features,
        'Participation in decision-making',
        'Professional support from international doctors and consultants',
        'Participation in health awareness services',
        'Volunteering in international medical activities',
        'Access to the organization’s public library',
        'Electronic marketing services',
    ]
}
const  vip = {
    title:'VIP Package',
    package_cost:999,
    image:'packages-bg.jpg',
    link:'/packages/vip-package',
    title_color:'#76e125',
    features:[
        ...diamond.features,
        'Get discounts on purchasing medical equipment',
        'Providing discounts on purchasing medical books',
        'Medical insurance for the membership holder and his family',
        'International tourist trips',
        'Providing opportunities to obtain international jobs',
        'Recruitment assistant',
        'Website design services for doctors'
    ]
}

export const packages = {
    silver,
    gold,
    diamond,
    vip
}