<h2 align="center">Thresh</h2>
<p align="center"><img width="100" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/7b/ThreshSquare.png" alt="Thresh"></p>
Experimental UI library

### Run `npm install` or `yarn`
To Install all dependencies

#### `npm run dev` or `yarn dev`
Open: http://localhost:1234/

##### Examples
***
###### State management
```javascript
import manageState from './state/manageState'
//Create state
manageState.createState('count', 0);

//Get state
const data = manageState.getState()

// Set state
manageState.setState('count', 1) 
```
***

###### Hello world - Create element
Description: for now children needs to be a array
```javascript
//...
createElement('h1', {
  children:["Hello World"]
}
```
***

###### Bind state
Description: you need to pass the state as parameter!!
```javascript
manageState.createState('name', "Thresh");
createElement('h1', {
  children:["Hello World {{ state.name }}"]
}
```

...
