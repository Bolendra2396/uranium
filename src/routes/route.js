const express = require('express');
const logger = require('../logger/logger')
const assign = require('../util/helper');
const assign2 = require('../validator/formatter');

const router = express.Router();

router.get('/test-me', function(req, res) {
    // problem 1
    let arr1 = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'novemebr', 'december'];
    let parts = lodash.chunk(arr1, 3);
    console.log(parts);

    // problem 2
    let arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    let odd = lodash.tail(arr2, 9);
    console.log(odd);

    // problem 3
    let a1 = [1, 4, 5, 7, 8, ];
    let a2 = [11, 4, 54, 7, 86, ];
    let a3 = [1, 43, 56, 78, 8, ];
    let a4 = [11, 43, 5, 78, 85, ];
    let a5 = [12, 41, 5, 7, 84, ];
    let merge = lodash.union(a1, a2, a3, a4, a5);
    console.log(merge);

    // problem 4
    let pairs = [
        ['horror', 'shinnig'],
        ['drama', 'titanic'],
        ['thriller', 'shutter'],
        ['fantasy', 'pans labyrinth']
    ]
    let obj = lodash.formPairs(pairs);
    console.log(obj);
});
module.exports = router;
// console.log('I am inside the first route handler')
// console.log('The date is', )
// assign.date();
// console.log('The Month is', )
// assign.month();
// console.log('The BatchINfo is', )
// assign.batch();
// console.log('The value is', logger.logging)
// console.log('Calling log function') logger.logging()
// res.send('My first ever api!')
// console.log('trim is', )
// assign2.trim1();
// console.log('lowercase is', )
// assign2.trim2();
// console.log('Uppercase is', )
// assign2.trim3();