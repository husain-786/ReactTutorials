/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>  
      {/* Sending title as string */}
      <Navbar title="TextUtils" aboutText="About Us"/>

      {/* Sending title as number */}
      {/* <Navbar title={3} aboutText="About Us"/>     */}

      {/* Not any props is sent, in this case this default values get executed */}
      {/* <Navbar/> */}

      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyze" />
      </div>
      
    </>
  );
}

export default App;


// State(React Hooks):- 
// Its the state of a component
// e.g.,  const[text, setText] = useState("first")
// Here text is a state contains text="first", we can change states values like variables it gives errors, 
// so we use methods to update the state values, if we try to store like other primitive side gives error.
//  setText is a function used in above example for the text to update                                                       
