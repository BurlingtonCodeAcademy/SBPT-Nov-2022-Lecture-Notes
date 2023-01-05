/* 
    ! CHALLENGE
        
    - Create a boilerplate for index.html
        - Change the title to: "Disney API"
        - link the disneyFetch.js at the bottom of the body element.

    - Create two different variables
        - one will hold the URL provided
        - one will generate a random number from 0-50 (whole number)
    - Create an async function called INFO that will accept two different parameters
        - the url
        - the random number
    - Within the function, create a TRY/CATCH.
        - TRY to fetch the url
            - JSONify the data returned
            - console.log 3 different positions:
                - The overall promise returned 
                    * hint: use the random number to target an object within the array provided.
                - The name of a single character
                - The imageURL of the character that is provided.
        - CATCH any error that is returned.
    - Invoke your function and pass with both variables as arguments.
    
    All results will be displayed in the console of the browser.

    ------------------------------------------------------------------------------

    API: Disney URL to use
    https://api.disneyapi.dev/characters
    
    
    Additional Documentation:
    https://disneyapi.dev/
    */