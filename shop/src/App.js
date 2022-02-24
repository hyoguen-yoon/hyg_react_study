import logo from './logo.svg';
import { Navbar,Button,Nav,NavDropdown,Container } from 'react-bootstrap';
import './App.css';
import React,{useState,useContext,lazy,Suspense} from 'react';
import Data from './data.js';
// import Detail from './Detail';
import Cart from './Cart';
import {Link, Route,Switch} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
let Detail = lazy(()=>{ return import('./Detail.js')})
export let 재고context = React.createContext();

function App() {

  let[shoes,shoes변경] = useState(Data);
  let[재고,재고변경] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
<Switch>
      <Route exact path="/"> 
        <div className="background">
          <h1>20% Season OFF</h1>
          <p>
            This site offer a biggest sale product in the Korea.
            We hope you to enjoy here
          </p>
          <p>
          <Button variant="primary">Learn more</Button>
          </p>
        </div>

        <div className="container">

          <재고context.Provider value={재고}>
            <div className="row">
              {
                shoes.map((a,i)=>{
                  return  <Card shoes={shoes[i]} num={i} key={i}/>
                })
              }

            </div>
          </재고context.Provider>

        </div>
        <button className="btn btn-primary"onClick={()=>{


      //</Route>  axios.post('https://codingapple1.github.io/shop/data2.json', { id : 'test', pw : 1234})
      //</Switch>  .then((result)=>{  })
     //   .catch(()=>{ })
          axios.get(' https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
              shoes변경([...shoes,...result.data])

          })
          .catch(()=>{

          }) 
          ;


        }}>더보기</button>
      </Route>

      <Route path="/detail/:id">
      <재고context.Provider value={재고}>
        <Suspense fallback={<div>로딩중</div>}>
        <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
        </Suspense>
      </재고context.Provider >
      </Route>

        <Route path="/cart">
        
          <Cart></Cart>

        </Route>
      <Route path="/:id">
        <div>
          asddasdsdsadas
        </div>      

       
      </Route>
</Switch>
    </div>
  );
}
function Card(props){

  let 재고 = useContext(재고context);
  let history =useHistory();
return(
    <div className="col-md-4" onClick={()=>{history.push('/detail/' + props.num) }}>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.num+1)+'.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}  & { props.shoes.price }</p>
     <Test></Test>

    </div>
)
}
 function Test(){
  let 재고 = useContext(재고context);
   return <p>재고 :{재고[0]}</p>
 }

export default App;
