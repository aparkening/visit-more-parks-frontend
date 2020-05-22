# Visit More Parks

Visit More Parks is an app that suggests nearby U.S. National Parks to events in your Google Calendar. The app also makes it easy to add a park visit to your calendar.

This repository houses the React frontend interacts with the [Rails API](https://github.com/aparkening/visit-more-parks-api). 


**What It Does**
- The user logs in with their Google Calendar account.
- US National Parks are pre-loaded with geocoded coordinates and addresses (using the [NPS.gov Parks API](https://www.nps.gov/subjects/developer/index.htm) and the [Geocoder Ruby gem](https://github.com/alexreisner/geocoder)).
- Upcoming calendar events are geocoded and displayed with their nearby parks.
- The user can add visits to any of the parks as calendar events.
- Those new events include park information, such as description, address, and URL.
- All 497 National Parks are browsable.

## Installation

1. Install the [Rails API](https://github.com/aparkening/visit-more-parks-api). 
2. Install app
```
    $ yarn install 
    or 
    $ npm install
```
3. Start server, which will also open [http://localhost:8000](http://localhost:8000) in your browser. The page will reload if you make edits. You will also see any lint errors in the console.
```
    $ yarn start 
    or 
    $ npm start
```

## Usage

Browse, create, and edit events and parks! 

- Log in with your Google account to see upcoming events and nearby parks. Google Calendar events need a location in the format <city>, <state> to get matched with parks.
- Navigate to 'Parks' to browse all United States National Parks.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/aparkening/recipe_costs_api. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Tea Tastes project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/aparkening/recipe_costs_api/blob/master/CODE_OF_CONDUCT.md).


## More Yarn Commands

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More About React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).