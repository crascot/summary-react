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
            title: 'Get-in',
            date: '06.2020 - 09.2020',
            text: 'Моя первая стажировка в команде, работал над проектом для поиска ресторанов в городе. Смог лучше разобраться с github и gitlab.'
        }
    ]
}

export default state;