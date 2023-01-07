/* 
! Challenge

    * index.html
        - create two div elements.
            - first one will hold a button. Name the button "Character".
            - second will be empty. It will govern the display of the data fetched.
        - Connect disneyDOM.js within the HTML doc. 
            *hint: be sure that it is sourced so that it can obtain data from disneyFetch.js
    
    * disneyDOM.js
        - Create two variables.
            - btn: which will connect to the button in index.html
            - display: which will target the empty div in index.html
            
        - create a function called "displayChar" that calls upon the info() function within disneyFetch.js. 
            - This will fire off when the user clicks the Character button.
            * be sure to comment out unecessary code such as console logs and the invocation of info() within that file.
            * you will need to modify that function to return information rather than just console log it.
            * remember that it returns a promise.
        - Within the function
            - Create a new variable to handle the random value from 0-50.
            - Create an h1 and img element
                - h1 element will hold the name of the character randomly selected.
                - img element will source to the character imageUrl.
                - for the alt property in the image element, display a string that states "Image of" and the characters name.
                - change the style attribute of the image element so that it has a height and width of 300px.
            - Append the elements to the empty div in the HTML.
                - The h1 element should be above the image.

        - Further Development
            - When a user clicks the button after the first fire, create a solution that removes the previous result and replaced with the new item.

*/