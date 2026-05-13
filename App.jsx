// import Profile from './Profile';
// import Counter from './Counter';
// import Todo from'./TodoApp';
// import "./App.css";

// import Calculate from "./calculate";

// function App() {
//   const Img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_1v9BHUenboGM-5dGAdk-fgIrCBEnXsbCw&s";

//   return (
//     <div id="box">
//       <Profile 
//         name="Kajal" 
//         age={20} 
//         image={Img} 
//       />
//       <Counter />
//       <Todo/>
//     </div>
    
//   );
// }

// export default App;



import StudentCard from "./student";
import Calculate from "./calculate";
function App(){
  return(
  <div>
    <StudentCard
    name= "Rinki"
    course="BCA"
    roll_number={101}
    />

    <StudentCard
    name= "Rinku"
    course="BCA"
    roll_number={102}
    />
    <Calculate/>
  </div>
  
  )
}

export default App;