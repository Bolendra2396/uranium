const bookModel1 = require("../models/bookModel1")

// 1> createBook : to create a new entry..use this api to create 11+ entries in your collection

const createBook = async function(req, res) {
        let booksData = req.body;

        let savedData = await bookModel1.create(booksData)
        res.send({ msg: savedData })
    }
    // 2> bookList : gives all the books- their bookName and authorName only 

const booklist = async function(req, res) {
    let allBooks = await bookModel1.find().select({ bookName: 1, authorName: 1, _id: 0 });
    res.send({ msg: allBooks })
}

// 3>  getBooksInYear: takes year as input in post request and gives list of all books published that year
const getBooksInYear = async function(req, res) {
    let data = req.query.year
    let listOfAllBooks = await bookModel1.find({ year: { $eq: data } })
    res.send({
        msg: listOfAllBooks
    })
}

// 4> getParticularBooks:- (this is a good one, make sincere effort to solve this) 
//    take any input and use it as a condition to fetch books that satisfy that condition

const getParticularBooks = async function(req, res) {
    let random = req.body
    let allBook = await bookModel1.find(random)
    res.send({ msg: allBook })
}

// 5> getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getXINRBooks = async function(req, res) {
    let allINRBooks = await bookModel1.find({ "prices.indianPrice": { $in: [100, 200, 500] } });
    res.send({ msg: allINRBooks })
}

// 6> getRandomBooks - returns books that are available in stock or have more than 500 pages 

const getRandomBooks = async function(req, res) {
    let randomBooks = await bookModel1.find({
        $or: [{ stockAvailabe: true }, {
            totalPages: { $gt: 500 }
        }]
    });
    res.send({ msg: randomBooks })
}

module.exports.createBook = createBook

module.exports.booklist = booklist

module.exports.getBooksInYear = getBooksInYear

module.exports.getParticularBooks = getParticularBooks

module.exports.getXINRBooks = getXINRBooks

module.exports.getRandomBooks = getRandomBooks


// let allBooks= await BookModel.find( ).count() // COUNT

// let allBooks= await BookModel.find( { authorName : "Chetan Bhagat", isPublished: true
// AND

// let allBooks= await BookModel.find( { 
//     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
// } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

// let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

// PAGINATION 
// let page= req.query.page
// let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

// let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


// let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
// let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
// let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
// let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
// let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
// let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 

// let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
// sales : { $in: [10, 17, 82] }

// let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})

//  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
//  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


//  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
//  let allBooks= await BookModel.findOne( {sales: 10}) 
//  let allBooks= await BookModel.find( {sales: 10}) 



// //  update (not covered: - findByIdAndUpdate | updateOne )
// let allBooks= await BookModel.update(   
//     {  sales: {$gt: 10}  }, //condition
//     { $set: { isPublished: true} } // the change that you want to make
//     ) 



// REGEX
// let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
// let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
// let allBooks= await BookModel.find( { bookName:  /5$/  }) 
// let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 

// ASYNC AWAIT

/*let a = 2 + 4
a = a + 10
console.log(a)
let allBooks = await BookModel.find() //normally this is an asynchronous call..but await makes it synchronous


// WHEN AWAIT IS USED: - database + axios
//  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
console.log(allBooks)
let b = 14
b = b + 10
console.log(b)
res.send({ msg: allBooks })
}
*/