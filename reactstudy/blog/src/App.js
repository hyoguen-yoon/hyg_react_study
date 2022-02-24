
import React ,{useState} from 'react';
import './App.css';

function App() {

let posts='바인딩';
let [글제목,글제목변경] = useState(['남자 코트 추천','남자 코트 추천2','남자 코트 추천3']);
let [따봉,따봉변경]=useState(0);
let [modal,modal변경]=useState(false);
let [num,num변경]=useState(0);
let [입력,입력변경]=useState('');
function 제목변경(){
  
  //글제목변경(['여자 코트 추천','여자 코트 추천2','여자 코트 추천3']);

  var newArray =[...글제목];
  newArray[0] = '여자 코트 추천';
  글제목변경(newArray);

}
function  modal변(){
  if(modal){
    modal변경(false);
  }else{
    modal변경(true);
  }
}


// function 반복된UI(){
//   var 어레이 = [];
//   for (var i = 0; i < 3; i++) {
//     어레이.push(<div>안녕</div>)
//   }
//   return 어레이
// }

  return (
 
  <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button  onClick={제목변경}>버튼</button>
      {/* <div className="list">
        <h3>{ 글제목[0] } <span onClick={()=>{따봉변경(따봉+1)}}> 좋아요</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div> */}

      {
        글제목.map(function(a,i){

          return (      
          <div className="list" key={i}>
          <h3  onClick={()=>{num변경(i)}}>{ a }</h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>)        
        })
      }
     <div>
      <div className="publish">
        <input onChange={(e)=>{입력변경(e.target.value)}}/>
        <button onClick={()=>{
          var arraycopy =[...글제목]
          arraycopy.unshift(입력);
          글제목변경(arraycopy);
        }}>저장</button>
      </div>
    </div>
      {/* <input onChange={(e)=>{입력변경(e.target.value)}}></input> */}

      <button  onClick={modal변}>버튼</button>
        {
          modal === true
          ? <Modal 글제목 ={글제목} num={num}/>
          : null 
        }
      
 <Profile/>
  {/* <div>
    HTML 잔뜩있는 곳
    
    { 반복된UI() }
  </div>
  */}
   
    </div>
  );
  
}


function Modal(props){
  return (
    <div className="modal">
    <h2>{props.글제목[props.num]}</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

class Profile extends React.Component{
  constructor(){
    super();
    this.state={name : 'yoon',age:30}
  }
  changeName=()=>{
    this.setState({name : 'YOON'})
  }
  render(){
    return(
      <div>
        <h3>프로필</h3>
        <p>{this.state.name}</p>
        <button  onClick={this.changeName}>버튼</button>
      </div>
    
    )
    
  }
}
export default App;
