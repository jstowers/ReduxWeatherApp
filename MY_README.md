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


 ##Saturday, February 25, 2017

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

##Saturday, February 25, 2017

***Redux Promise - Flow Process***
Sec. 5, Lec. 59

1.  From the action creator, actions/index.js, the fetchWeather() action enters the middleware Redux Promise.

2.  Redux Promise receives the incoming action and looks at the payload property.

3.  If the payload is a promise, Redux Promise stops the action entirely and waits until the promise resolves (the axios GET request is complete).  When resolved, Redux Promise dispatches a new action of the same type to the reducers, but with a payload of the resolved request.

    =>  Redux Promise "unwraps" the promise for us because the reducers want   data, not a promise.

4.  If the payload is NOT a promise, Redux Promise allows the action to pass through to the reducers without any intervention.

Conclusion:
Redux Promise eliminates the complexity and confusion of writing asynchronous code.  There are no callbacks, promises, and .then's.  Redux Promise provides cleaner, more understandable code.


***Avoiding State Mutations in Reducers***
Sec. 5, Lec. 60

1.  For our app, the only property in the payload we need is:

        action.payload.data

2.  In the weather reducer, reducer_weather.js, we need a data structure for state that can store the payload.data for multiple cities.  An array is perfect.
    
    Set the initial state to an empty array:
        
        export default function (state = [], action) {

        }

3.  Don't mutate state!
        Why? To ensure reliability and predictability.

        Reducers are pure functions, meaning no side effects.
        If a reducer depends on or looks to some external state to determine if its state should change, the reducer is no longer pure.  This leads to bugs and less reliability.

        If you use push() to add the new city's payload.data to the existing state array, you would be mutating state.  Push() changes an existing array, it does not create a new array.

4.  Two options exist to create a new state array:

    a.  Use concat()

            return state.concat(action.payload.data)

    b.  Use the spread syntax (...)

            return [ action.payload.data, ...state ]

***Building a List Container***
Sec. 5, Lec. 61

GOAL: build a component/container to render a list of the cities and their data

1.  Ask . . . should this be a container or a component?

        => since it will need access to redux state (list of cities),
        it should be a container.

2.  Create new container, weather_list.js

3.  Create basic <html> table scaffolding:
        
        <table className = 'table table-hover'>
            <thead>
                <tr>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

4.  Need to get data from Redux into the container


***Sparklines Graph Library***
Sec. 5, Lec. 63
Add lines graphs for temperature, pressure and humidity


***Google Maps Integration***
Sec. 5, Lec. 66

GOAL:  Add a component to display a Google map thumbnail above the city name.

PROCESS:
1.  Won't need to access state (Redux), so will make a component, not a container.

2. Will pass in props from parent component.

3. Make new component, google_map.js.

4. Using Google Maps which already has a format for rendering maps on a screen.  But this library has no idea how to integrate into a React application.

5. componentDidMount()

6. new google.maps.Map(mapDiv:element, options bject {})

***ES6 Destructuring***

Convert these two lines of partially redundant code:
    
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

To the following:

    const { lon, lat } = cityData.city.coord;

What the one line of code means:
1.  Find the coord object in cityData.city
2.  Grab the lon and lat properties in the coord object
3.  Assign these properties to two new variables lon and lat
4.  Access these new variables as constants within the function


***Project Review***
1.  More Redux practice => create fetchWeather() action creator

2.  Constant for action type => FETCH_WEATHER

3.  Use middleware => Redux Promise => did not have to worry about promises and callbacks.

4.  Use axios for get requests

5.  Reducers => avoid mutating state; instead, return a new object that will take the place of the pre-existing state

6.  Sparklines library => easy to use, intended to be smaller charts, consumed at a glance (up/down/stay the same)

7.  Google Map => easy to place map into a component

##Monday, February 27, 2017##

***Detailed Forecast Feature***

Goal:  

Add a Detail button that the user can click to view a detailed hourly forecast with temperatures, clouds, wind, and percipitation.

Issue:

The Detail button tracks state, receives props, and toggles on/off. But I can't find a way to insert a detailed forecast between rows of an html <table> built using the map function. Nesting <div>'s inside of <tr> and <td> causes errors.

Possible solutions:

1.  Add a blank <tr> that could be injected with data if the user clicks the Detailed button.

2.  Insert the detailed hourly forecast in a separate component at the bottom of the mapped cites.

## Saturday, August 12, 2017

1. Update webpack.config file to ver. 3.5.4
2. Update webpack-dev-server to ver. 2.7.1

Scripts in package.json
//"serve": "webpack-dev-server --content-base build/",
//"start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",






