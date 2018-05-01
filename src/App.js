import React from 'react'
import { createStore } from 'redux'
import logo from './logo.svg'
import { Button,List } from 'antd-mobile'
import './App.css'

function counter(state=0,action) {
    switch (action.type){
        case 'add':
            return state+1
        case 'reduce':
            return state-1
        default:
            return 10
    }
}
// build store
const store=createStore(counter)
const init=store.getState()
console.log(init);

//dispatch action
store.dispatch({type:'add'})
const afterAdd=store.getState()
console.log(afterAdd);

const Item = List.Item;
const Brief = Item.Brief;
class App extends React.Component {
  constructor(props){
      super(props);
      this.state={
        soldiers:['虎子','柱子','王根生']
      }
  }
    state = {
        disabled: false,
    }


  render() {
    return (
      <div className="App">
      hello23
          {/*<Button type="primary">Button</Button>*/}
          <List renderHeader={()=>'士兵列表'}>
              {
                this.state.soldiers.map(v=>{
                  return <Item key={v}>{v}</Item>
                })
              }
          </List>
      </div>
    );
  }
}

export default App;
