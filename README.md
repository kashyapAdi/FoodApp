 React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
     useState() - Super Powerful variable
    useEffect() -

     State Variable - Super Powerful variable

     /* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });

// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

/* Episode 05 Let's get Hookd ------------------------------------------------------------------------------------------------------ 
 * There are 2 type of Export/Import
 *   1) Defalut Export/Import
 *        export default Component;
 *        import Component from 'path';

 *   2) Name Export/Import
 *        export const Component;
 *        import { Component } from 'path'; 
 
*/



   👉 outlet is used to render the child components of the parent component.
   👉  link  is used to navigate between the routes. it is samse as <a> tag in html. a tag is used to navigate between the pages.
 👉 how we use link tag 
    <link to="/about">About</link>

    # 2 types of routing
    1) client side routing
    2) server side routing
     why we use res Id in restaurant card component it can pass unique id to each restaurant card component which will ready to render the restaurant card component.

     
     
     
     custom hook is a utility function that we create under the utlis folder.

     custom hook  is a hook that we create ourselves. we can use custom hook in our application. we can use custom hook in our application. like we create useRestaurantMenu hook and put the fetch code in that hook. we can use that hook in our application.

     another custom hook we are creatin to check online staus in website the user is offline or online.


here we create 👉grocery folder its a diiferent section 
we use here 👉lazy loading when we click on grocery it will load the grocery component.
this will seperate bundle for grocery component.
we use lazy loading to improve the performance of our application.

👉 Suspense 
we use suspense to show the loading component when the component is loading.
we use fallback to show the loading component when the component is loading.



index css code 
/* *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: block;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  
}

.header {
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  /* border: 1px solid black; */
  align-items: center;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
}

.logo {
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.nav-items > ul {
  font-size: 18px;
  display: flex;
  list-style-type: none;
  align-items: center;
  gap: 10px;
}

.nav-items > ul > li {
  cursor: pointer;
  padding: 10px;
}

.search-container {
  display: flex;
  justify-content: center;
  margin: 50px 0;
  gap: 10px;
}

.res-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  /* margin: 0 20px; */
  padding: 0 15px;
}

.res-card {
  width: 250px;
  background-color: #ffffff14;
  height: 350px; 
   padding: 5px; 
   border: 1px solid transparent; 
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  cursor: pointer;
}

.res-card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

.res-logo {
  width: 240px;
  height: 200px;
  
  border-radius: 10px 10px 0 0;
}

.res-logo:hover {
  opacity: 0.8;
}
.filter-btn {
    color: #fff;
    cursor: pointer;
    background-color: green;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    outline: none;
   
    padding: 15px 22px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.08);
  }
  
  .filter-btn {
    border-radius: 5px;
  }
.shimmer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.shimmer-card {
  width: 200px;
  height: 400px;
  background-color: #d0c8c8;
  margin: 20px;
  border-radius: 11px;
}

.loginBtn {
  background-color: orange;
  border-radius: 5px;
  padding: 7px 15px;
  font-size: 18px;
  border: 0;
  outline: 0;
  cursor: pointer;
}

.loginBtn:hover {
  background-color: #f6bb4d;
}

.filter {
  display: flex;
  gap: 20px;
  margin: 30px 20px;
  justify-content: center;
}

.search {
  display: flex;
  width: 40%;
}

.search input {
  width: 100%;
  box-sizing: border-box;
  color: #000;
  background-color: #fff;
  border: 1px solid #aabcca;
  border-right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  padding: 14px 15px 14px 20px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.08);
}

.search button{
  width:20%;
  
}

.search button:hover,
.filter-btn:hover {
  background-color: orange;
}

.menu{
  gap: 20px;
  margin: 20px;
  padding:  15px;

} */