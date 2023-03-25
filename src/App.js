
import Picture from './components/Picture';
import data from './helper/data';
import HomePage from './pages/HomePage';



function App() {
  
  return (
    <div >

     <HomePage/>
     <div className="App">


{data.map((item,index)=>
     <Picture key={index} photographer={item.photographer} src={item.src.large} />
)}
 
     </div>
    </div>
  );
}

export default App;
