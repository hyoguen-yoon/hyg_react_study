import React, { useEffect,memo } from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props) {

 let state=   useSelector((state)=>state)

 let dispatch = useDispatch();
    return (
        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    <th>변경2</th>
                </tr>
                {
                //  props.state.map((a,i)=>{
                //         return (
                //         <tr key={i}>
                //             <td>{a.id}</td>
                //             <td>{a.name}</td>
                //             <td>{a.quan}</td>
                //             <td><button onClick={()=>{ props.dispatch({type: '수량증가',num:i}) }}> + </button></td>
                //             <td><button onClick={()=>{ props.dispatch({type: '수량감소',num:i}) }}> - </button></td>
                //         </tr>
                //         )
                // }) 
                state.reducer.map((a,i)=>{
                    return (
                    <tr key={i}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.quan}</td>
                        <td><button onClick={()=>{ dispatch({type: '수량증가',num:i}) }}> + </button></td>
                        <td><button onClick={()=>{ dispatch({type: '수량감소',num:i}) }}> - </button></td>
                    </tr>
                    )
            }) 
                 }
            </Table>
            { state.reducer2.alert열렸니 === true
           ?( <div className="my-alert2">
                <p>지금 구매하시면 20% 할인</p>
                <button onClick={()=>{ dispatch({type: '닫기'}) }}>닫기</button>
            </div>)
             : null 
            }
            <Parent 이름 ="123" 나이 ="3333"></Parent>
        </div>
    );
}

// function state를props화(state){
// return{
//     state : state.reducer,
//     alert열렸니 : state.reducer2
// }
// }
// export default connect(state를props화)(Cart);




  
  function Parent(props){
    return (
      <div>
        <Child1 이름={props.이름}/>
        <Child2 나이={props.나이}/> 
      </div>
    )
  }
  function Child1(){
    useEffect( ()=>{ console.log('렌더링됨1') } );
    return <div>1111</div>
  }
 let Child2 =  memo(function(){
    useEffect( ()=>{ console.log('렌더링됨2') } );
    return <div>2222</div>
  });
export default Cart;