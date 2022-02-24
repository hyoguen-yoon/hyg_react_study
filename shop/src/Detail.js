import React,{useState,useEffect,useContext} from 'react';
import { Navbar,Button,Nav,NavDropdown,Container } from 'react-bootstrap';
import { useHistory ,useParams} from 'react-router-dom';
import styled from 'styled-components'
import App from './App';
import {재고context} from './App.js';
import { connect } from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import './Detail.scss'
let 박스 =styled.div`
padding : 20px;
`;
let 제목 =styled.h4`
font-size : 25px;
color : ${props => props.색상}
`;


/*
class Detail2 extends React.Component{
  componentDidMount(){
 //Detail2 컴포넌트가 Mount 되고나서 실행할 코드
  }

  componentWillUnmount(){
  //Detail2 컴포넌트가 Unmount 되기전에 실행할 코드
  }
}
*/



function Detail(props){
  let [alert,alertstate]  =useState(true);
  let [inputdata, inputdata변경 ]  =useState('');
  let 재고 = useContext(재고context);
  let [누른탭,누른탭변경] = useState(0);
  let [스위치,스위치변경] = useState(false);
  useEffect(()=>{
       let 타이머= setTimeout(()=>{ alertstate(false) },2000)

        return ()=>{clearTimeout(타이머)}
    },[alert]);

  
    let{id}= useParams();
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
      });
    
    let history = useHistory();
    useEffect(()=>{
      var arr=localStorage.getItem('watched');
      if(arr!=null){
        arr = JSON.parse(arr)
  
        arr.push(id);
        new Set(arr)
        arr =[...arr];
        localStorage.setItem('watched',JSON.stringify(arr))
      }else{
        arr=[];
      }
    },[]);
    return(
      <div className="container">
          <박스><제목 색상={'blue'}>ㅁㄴㅇㅁㄴㅇ</제목></박스>
          <박스><제목 className='red'>ㅁㄴㅇㅁㄴㅇ</제목></박스>
        {inputdata}
       <input onChange={(e)=>{inputdata변경(e.target.value)}}/>

        {
          alert === true
          ?(<div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
          </div>)
          : null
        }
          
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <Info 재고={props.재고}></Info>
          <button className="btn btn-danger" onClick={()=>{props.재고변경([9,10,11])
          
          props.dispatch({type:'항목추가',payload :{id:찾은상품.id,name:찾은상품.title,quan:2}});
          history.push('/cart');
          
          }}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button> 
          <button className="btn btn-danger" onClick={()=>{ history.push('/')}}>뒤로가기</button> 
  
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false);누른탭변경(0)}}>Active 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false);누른탭변경(1)}}>Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{스위치변경(false);누른탭변경(2)}}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
     
      <CSSTransition in={스위치} classNames="wow" timeout={500}>  
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
      </CSSTransition>
    
    </div> 
    )
  }



function TabContent(props){
 useEffect(()=>{
  props.스위치변경(true);
 });
  if(props.누른탭 === 0)
  {
   return <div>00000</div>
  }else if(props.누른탭 === 1){
    return  <div>11111</div>
  }else if(props.누른탭 === 2){
    return  <div>22222</div>
  }
}

function Info(props){
    return(
      <p>재고 : {props.재고[0]}</p>
    ) 
  }
  function state를props화(state){
    return{
        state : state.reducer,
        alert열렸니 : state.reducer2
    }
    }
    export default connect(state를props화)(Detail);
 