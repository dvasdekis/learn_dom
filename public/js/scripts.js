/* This all gets minified by Netlify so who cares if it's overcommented */

/* Define the ul HTML tag as a variable to be appended */
    var myList = document.querySelector('ul');
    
    /* Grab using fetch - in this case, a file */
    fetch('products.json')
       
    /* Use .then to define behaviour for a succesful fetch, after it happens                */
    /* The below will create an unnamed function using `function(response) {}`              */
    /* Note in this case the initial input can have any name - response is typically used   */
    .then(function(plump) { /* Not `response`, but `plump` this time, for big is beautiful  */
      
    /* First check if the response is valid - if not we can write an error                  */
    /* Note- I don't know where this error goes yet! Off to cloud cuckoo land?              */
      if (!plump.ok) {
        throw new Error("HTTP error, status = " + plump.status);
      }
    
    /* If all is well, give us a json version of our beautiful plump HTTP response          */ 
      return plump.json();
    })
    
    /* .then will take the return of the previous function and work with it                 */
    /* So here, we are working now with the return of the previous function - like scripting*/
    .then(function(json) {
    
      /* Below is a foreach loop which gives us more HTML elements when more JSON lines are returned */
      for(var i = 0; i < json.products.length; i++) {
        /* Create a new element for each row in the JSON */
        /* Combine data, content and presentation in the one script file - someone is probably upset */
        var listItem = document.createElement('li');
        /* Create an initial string for each item in the JSON return */
        listItem.innerHTML = '<strong>' + json.products[i].Name + '</strong>';
        /* Append text to the initial string, twice */
        listItem.innerHTML +=' can be found in ' + json.products[i].Location + '.';
        listItem.innerHTML +=' Cost: <strong>£' + json.products[i].Price + '</strong>';
        /* Insert the completed string as HTML in the page */
        myList.appendChild(listItem);
      }
      /* close the foreach loop */
    })
    /* close the .then function */
    
    /* If anything above has generated an error, write it to the page as a paragraph */
    .catch(function(error) {
      var p = document.createElement('p');
      p.appendChild(
        document.createTextNode('Error: ' + error.message)
      );
      document.body.insertBefore(p, myList);
    });
