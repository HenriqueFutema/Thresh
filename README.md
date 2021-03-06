<h2 align="center">Thresh</h2>
<p align="center"><img width="100" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/7/7b/ThreshSquare.png" alt="Thresh"></p>
Experimental UI library

### Run `npm install threshjs thresh-cli`
To Install all dependencies and CLI

### Run `cli create-thresh-app`
To create a Thresh app
More informations: https://www.npmjs.com/package/thresh-cli

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
***

###### tModel -> get a value from input
```javascript
  //...
    attrs:{
      value: state.name,
      tModel: 'name'
    }
```
***

###### tClick -> onClick
```javascript
  //...
    attrs:{
      id: "btn",
      tClick: {
        method: test,
        id: 'btn'
      }
```

### Thresh CLI
Documentation at https://github.com/HenriqueFutema/CLI-Thresh

NPM Link: https://www.npmjs.com/package/thresh-cli


...
