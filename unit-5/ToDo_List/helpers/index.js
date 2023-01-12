function logTime(req, res, next) {
    // console.log('IN LOGTIME: ', req);
    // console.log('Before Date: ', req.datePosted);
    let date = new Date();
    req.datePosted = date.toLocaleDateString(); // creating a string for our local date.

    // console.log('LogTime - DatePosted: ', req.datePosted);
    next();
}

module.exports = {
    logTime: logTime,
}

/* 
    - Creating a function called 'logTime'.
        - has 3 params: request, response, next
        - runs logic within the code block
    
    - module.exports
        - exporting an object
        - we can make a variety of functions/variables and store them within their respective keys.
*/