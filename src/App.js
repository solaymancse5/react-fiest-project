
import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var stylog={
    height:'100px',
    width:'100px'
  }
 
  // //first
  // var personl={
  //   name:"Solayman",
  //   job:"student",
  //   age:24
  // }
  
  // var styless={
  //   color:'red',
  //   backgroundColor:'black'
  // }


  // //second
  // const nayoks = ['abul' ,'babul','cabul']


  // // third
  // const persons=['abul','babul','cabul','dabul'];
  // const jobs=['student','teacher','business','engineer','doctor'];



  // // <h1>Next task -- creat object</h1>
  // const products=[
  //                 {namee:'photoshop', pricee:'$90.99'},
  //                 {namee:'kotoshop', pricee:'$80.99'},
  //                 {namee:'motoshop', pricee:'$70.99'},
  //                 {namee:'jotoshop', pricee:'$60.99'}
  //                ]


  // // <h2>next tusk -- map</h2>
  // const nayaks=['abule','babule','cabule','dabule','ebule','tabule'];
  // const products=[
  //                 {namee:'photoshop', pricee:'$90.99'},
  //                 {namee:'kotoshop', pricee:'$80.99'},
  //                 {namee:'motoshop', pricee:'$70.99'},
  //                 {namee:'jotoshop', pricee:'$60.99'}
  //                ];
  // const friends=[
  //               {name:'aaa', job:'aa1'},
  //               {name:'bbb', job:'aa2'},
  //               {name:'ccc', job:'aa3'},
  //               {name:'ddd', job:'aa4'}
  //                ];






  return (
    <div className="App">
      <header className="App-header">
      <img style={stylog} src={logo}  alt="logo"   /> {/* <h1>className="App-logo"</h1> */}
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* 
        // first 
        <h1 style={styless} >You Are {personl.name + " and You are " + personl.age +" Your Job Is "+personl.job}  </h1>
        <h2 style={{color:"yellow"}}>You Boss</h2> */}
 


        {/* //second
        <Person name={nayoks[0]} naika='mowsumi'></Person>
        <Person name='jasim' naika='sabana'></Person>
        <Person name='bapparaz' naika='chka'></Person>
        <Person name='elias k' naika='bobita'></Person> */}


        {/* //thierd
        <Personn nam='solayman' job='developer'></Personn>
        <Personn nam='shazia' job='coder'></Personn>
        <Personn nam={persons[0]} job={jobs[0]}></Personn> 
        <Personn nam={persons[1]} job={jobs[2]}></Personn> */}


        
        
        {/* <h1>Next task -- creat object</h1> */}

        {/*<Product nam={products[1].namee}  price={products[1].pricee}></Product> */}

        {/* 
        <Product prod={products[1]}></Product>
        <Product prod={products[0]}></Product>
        <Product prod={products[2]}></Product> */}



        {/* 
        <h2>next tusk -- map</h2>

        <ul>
          {
            nayaks.map(nayk=><li>{nayk}</li>)
          }

          {
            products.map(proda=><li>{proda.pricee}</li>)
          }


          {
            friends.map(pd=> <Friendss friend={pd}> </Friendss>)
          }
        </ul> */}





        <Counter></Counter>



 

      </header>
    </div>
  );
}




// //second
// function Person(props){
//   // console.log(props);
//   return (
//   <div style={{border:'2px solid red' , margin:'10px'}}>
//     <h1>Nayak: {props.name}</h1>
//     <h2>naika of :{props.naika}</h2>

//   </div>
//   )
// }



// //third
// function Personn(props){
//   return(
//     <div style={{border:"solid 2px red"}}>
//       <h2>Name: {props.nam} </h2>
//       <h2>Job: {props.job} </h2>
//     </div>
//   )
// }


//next tusk --> creat object

// function Product(props){
//       const style={
//         border:"2px solid red",
//         borderRadius:'20px',
//         backgroundColor:'gray',
//         height:'250px',
//         width:'400px',
//         float:'left' ,
//        marginTop:'30px',
//       }
//   return (
//     <div style={style} >
//       {/* <h2>Name : {props.nam}</h2>
//       <h1>price: {props.price}</h1>
//       <button>Buy now</button> */}

//       {/* <h2>name: {props.prod.namee}</h2>
//       <h1>price : {props.prod.pricee}</h1>
//       <button>Buy now</button> */}
//     </div>
//   )
// }



// //<h2>next tusk -- map</h2>  
// function Friendss(props){
//       const style={
//         border:"2px solid red",
//         borderRadius:'20px',
//         backgroundColor:'gray',
//         height:'250px',
//         width:'400px',
//         float:'left' ,
//        marginTop:'30px',
//       }
//   return (
//     <div style={style} >
//       {/* <h2>Name : {props.nam}</h2>
//       <h1>price: {props.price}</h1>
//       <button>Buy now</button> */}

//       <h2>name: {props.friend.name}</h2>
//       <h1>job : {props.friend.job}</h1>
//       <button>Buy now</button>
//     </div>
//   )
// }


function Counter(){
  const [count , setCount] = useState(5);
   
  return(
    <div>
      <h1>Counte : {count}</h1>
      <button>Increase</button>
    </div>
  )
}




export default App;
