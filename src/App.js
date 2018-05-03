import React from 'react'
import { createStore } from 'redux'
import logo from './logo.svg'
import { Button,List } from 'antd-mobile'
import './App.css'
/**redux */
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
function listener(){
    const current=store.getState()
    console.log(`现在是${current}`);
}
// build store
const store=createStore(counter)
// 订阅，每次state修改，都会执行listener
store.subscribe(listener)
//输出初始值
const init=store.getState()
console.log(init);
// 提交状态变更的申请
store.dispatch({type:'add'})
store.dispatch({ type: 'reduce' })
// const afterAdd=store.getState()
// console.log(afterAdd);

const Item = List.Item;
const Brief = Item.Brief;
/**app */
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
function decorateArmour(target, key, descriptor) {
    const method = descriptor.value;
    let moreDef = 100;
    let ret;
    descriptor.value = (...args)=>{
        args[0] += moreDef;
        ret = method.apply(target, args);
        return ret;
    }
    return descriptor;
}

class Man{
    constructor(def = 2,atk = 3,hp = 3){
        this.init(def,atk,hp);
    }

    @decorateArmour
    init(def,atk,hp){
        this.def = def; // 防御值
        this.atk = atk; // 攻击力
        this.hp = hp; // 血量
    }
    toString(){
        return `防御力:$,攻击力:$,血量:$`;
    }
}

var tony = new Man();

console.log(`当前状态 ===> $`);
// 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3




export default App;
