//  WEEK 13 CODING ASSIGNMENT
//
// •	Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
//    •	Username and password input fields, an h3 that says Log In, with a border.
//      Style the component using the default generated CSS file.
// •	Create a Navigation component that contains links styled like a navbar.
//    •	The links don’t have to go anywhere.
// •	Put the Navigation component at the top of the page and the LoginForm in the center of the page.

import "./App.css";
import LoginForm from "./LoginForm";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
