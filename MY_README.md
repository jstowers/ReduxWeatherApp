### February 7, 2017

***Weather App***

App Mockup
1.  Search Bar
2.  Line Chart - for temperature, pressure, humidity
3.  Forecast List - list of cities entered from search bar
4.  App - main rendering component

Search Bar Design
1.  Will the search bar be a component or a container?
        Needs to be able to modify the state of the app by calling actions.  After a user enters a city, this search bar will create an action to make an API request.  Needs to talk to Redux => make a container.


### February 8, 2017

***Binding 'this' Context***

In our SearchBar class:

    // event method
    onInputChange(event) {
        this.setState({ term: event.target.value });
    }
    
    // render function with search bar input
    render() {
        return (
            <input onChange =({ this.onInputChange }) />    
        )
    }      

But if this code is run, 'this' is undefined in the onInputChange method.  You will receive the following error:
    
    Uncaught TypeError: Cannot read property 'setState' of undefined at onInputChange

So in constructor function, we write:

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

What does this line of code mean?
this.onInputChange = this.onInputChange.bind(this)

    = this.onInputChange
    this (our instance of SearchBar) contains a function onInputChange
    
    .bind(this)
    bind this function to 'this' (SearchBar)

    this.onInputChange = 
    replace onInputChange with this new bound instance of this function


Another option is to use a 'fat arrow' function with no need to bind 'this' in the constructor function:

    onChange = { (e) => this.onInputChange(e) } />



