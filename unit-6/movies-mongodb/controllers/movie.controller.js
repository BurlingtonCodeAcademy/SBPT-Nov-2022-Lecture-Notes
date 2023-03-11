const router = require("express").Router();
const Movie = require('../models/movie.model');
const validateSession = require('../middleware/validate-session');

// Error Response Function
const errorResponse = (res, error) => {
    return(
        res.status(500).json({
            Error: error.message
        })
    )
}

//TODO POST
router.post('/', validateSession, async (req, res) => {
    try {
        //1. Pull data from client (body)
        const { 
            title, genre, rating, length, releaseYear
        } = req.body;

        //2. Create a new object using our model
        const movie = new Movie({
            title, genre, rating, length, releaseYear,
            owner_id: req.user._id
        });

        //3. Use mongoose method to save to MongoDB
        const newMovie = await movie.save();

        //4. Response
        newMovie ? 
            res.status(200).json({
                newMovie,
                message: `${newMovie.title} added to collection`
            }) :
            res.status(404).send(
                "Movie not created."
            )
        
    } catch (err) {
        errorResponse(res, err);
    }
});

//TODO GET One
/* 
!   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        - Test the route within Postman
        
        Hint: Consider login within user.controller.js
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
*/
router.get('/:id', async (req, res) => {
    try {
        // console.log('IN ID ROUTE: ', req.params.id)
        const { id } = req.params;
        const movie = await Movie.findOne({_id: id});

        movie ?
            res.status(200).json({
                movie
            }) :
            res.status(404).json({
                message: "No movie found"
            })
        
    } catch (err) {
        errorResponse(res, err);
    }
});

//TODO Get All
/* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Test the route within Postman
        
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
        
        Hint: parameters within method are optional
*/
router.get('/', validateSession, async (req, res) => {
    try {
        
        const movies = await Movie.find();

        movies ?
            res.status(200).json({
                movies
            }) :
            res.status(404).json({
                message: "No movies found"
            })

    } catch (err) {
        errorResponse(res, err);
    }
})

//TODO Get All by Genre
/* 
!   Challenge
        - Special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
        - Test the route within Postman
*/
router.get('/genre/:genre', async (req, res) => {
    try {
        // console.log(req.params.genre);

        const { genre } = req.params;
        // console.log('DESTRUCTURE: ', genre);

        let buildWord;

        if(genre) {
            for(let i = 0; i < genre.length; i++) {
                i === 0 ?
                    buildWord = genre[i].toUpperCase() :
                    buildWord += genre[i].toLowerCase()
            }
        }

        const getMovies = await Movie.find({genre: buildWord});

        getMovies ?
            res.status(200).json({
                message: "Genre Found",
                getMovies
            }) :
            res.status(404).json({
                message: "No results"
            })

    } catch (err) {
        errorResponse(res, err);
    }
});

//TODO PATCH One
router.patch('/:id',validateSession, async (req, res) => {
    try {
        
        //1. Pull value from parameter
        // const { id } = req.params;
        const filter = {_id: req.params.id, owner_id: req.user._id}

        //2. Pull data from the body
        const info = req.body;
        //3. Use method to locate document off ID and pass in new info.
        const returnOption = {new: true};

        // const updated = await Movie.findOneAndUpdate({_id: id}, info, returnOption);
        const updated = await Movie.findOneAndUpdate(filter, info, returnOption);
        //* findOneAndUpdate(query, document, options);
        // returnOptions allow us to view the updated document right away.

        //4. Respond
        updated ?
            res.status(200).json({
                updated
            }) :
            res.status(404).json({
                message: "Can not update this movie."
            })

    } catch (err) {
        errorResponse(res, err);
    }
})

//TODO DELETE One
router.delete('/:id', validateSession, async (req, res) => {
    try {
        
        //1. Capture ID
        // const { id } = req.params;
        const filter = {_id: req.params.id, owner_id:req.user._id};

        //2. Use a delete method to locate and removes base off the ID
        const deleteMovie = await Movie.deleteOne(filter);
        console.log(deleteMovie);

        //3. Response
        deleteMovie.deletedCount > 0 ?
            res.status(200).json({
                message: 'Movie Removed'
            }) :
            res.status(404).json({
                message: 'Did not remove movie.'
            }) 

    } catch (err) {
        errorResponse(res, err);
    }
})

module.exports = router;