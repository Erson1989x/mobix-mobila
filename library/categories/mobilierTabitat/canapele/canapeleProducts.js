import canapeaClaudiaMare from '../../../../app/assets/mobiliertapitat/Canapele/ClaudiaMare/claudia mare.png'

export const canapeleProducts = [
    {
        id: 1,
        name: 'CANAPEA CLAUDIA MARE ',
        images: [canapeaClaudiaMare],
        description: 'Canapea Claudia Mare NU se produce cu sistem lift.',
        price: 1020.0,
        prices: {
            bonel: 1260.0,
            memory: 1810.0,
        },
        dimensiuni: {
            lungime: 190-230,
            adancime: 110-165,
            inaltime: 81,
        },
        category: 'canapele',
        slug: 'canapele-' + 'claudia-mare'.toLowerCase(),

    }
]