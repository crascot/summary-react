import porten from '../image/porten.png';
import beauty from '../image/beauty.png';
import itIndustry from '../image/IT-industry.jpg';

let state = {
    examples: [
        {
            image: porten,
            name: 'Porten',
            info: ['да', 'нет', 'нет'],
            reference: 'https://crascot.github.io/porten/'
        },
    
        {
            image: beauty,
            name: 'Beauty',
            info: ['да', 'да', 'нет'],
            reference: 'https://crascot.github.io/beauty/'
        },
    
        {
            image: itIndustry,
            name: 'IT-industry',
            info: ['да', 'да', 'да'],
            reference: 'https://crascot.github.io/IT-industry/'
        }
    ],
    works: [
        {
            title: 'Get-in progect',
            date: '06.2020 - 0.9.2020',
            text: 'Моя первая работа в команде, работал вместе с СЕО специалистом, дизайнером, бэкенд разработчиком и с другими верстальщиками. В ней я смог освоить github и gitlab.'
        }
    ]
}

export default state;