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