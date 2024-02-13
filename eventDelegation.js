document.querySelector('#random').addEventListener('click', (e) => {
    console.log(e);
    if (e.target.tagName === 'LI') {
        console.log('You clicked on : ', e.target.textContent);
    }
})


/*
Event delegation is a technique in JavaScript where instead of attaching an event handler to each individual element, you attach a single event handler to a common ancestor element of those elements. This event handler then listens for events that bubble up from the child elements to the ancestor element.
*/