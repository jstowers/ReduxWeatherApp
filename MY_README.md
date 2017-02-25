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

RULE OF THUMB:

If you have a callback function (i.e., onchange) that makes a reference to 'this', chances are you need to bind the callback function.

ANOTHER OPTION:

If you use a 'fat arrow' function, there is no need to bind 'this' in the constructor function:

    onChange = { (e) => this.onInputChange(e) } />


***Form Submission***
Created search bar out of a form element.

When you click enter or submit, the browser thinks you're trying to make an HTTP POST request.  This is not a React feature, it is common HTML for all browsers.

In a single-page application, we can prevent this behavior by calling the preventDefault() function on the event:

    onFormSubmit(event) {
        event.preventDefault();
    }


***Middleware***
(Sec. 5, Lec. 56)

Middleware are functions that take an action and depending on the action type payload, and other factors, can inspect/modify the action before it passes into the reducers.

Ex) you make an HTTP request to an API, the middleware will inspect the data to ensure the right format and type before sending it to the reducers.

Middleware act as "Gatekeepers"

Stop and inspect any action before data passes into reducers:

    1.  pass through action
    2.  manipulate action
    3.  console.log action
    4.  stops action

**redux-promise**

Popular node package used to make AJAX requests in Redux.

Install package at the command line:

    $ npm install --save redux-promise

Import into src/index.js:

    import ReduxPromise from 'redux-promise';

Apply the middleware in src/index.js:

    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

***axios***

A node package used to make AJAX requests from the browser.  Axios works almost identically to jQuery.

1.  Install package at the command line:

        $ npm install --save axios

2.  Import package into src/actions/index.js:

        import axios from 'axios';

For a GET request to a specified url, axios returns a promise that handles the response:

    axios.get('/user?ID=12345')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    });


 ### February 25, 2017

***Redux Promises in Practice***
Sec. 5, Lec. 58

Goals:

1.  In search_bar container, want to wire up onFormSubmit() so that when user clicks the search button, we fire the action creator and make an API request.

2.  search_bar is a container and it needs to be able to call an action creator.

    a.  Connect search_bar to redux using the 'connect' method.

    b.  Bind action creator fetchWeather() as a property of the search_bar container

How:

Whenever fetchWeather is called and creates an action, bindActionCreators with dispatch ensures that the action flows down into the middleware and reducers:

    function mapDistpatchToProps(dispatch) {
        return bindActionCreators({ fetchWeather}, dispatch)
    }


