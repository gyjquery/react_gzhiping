import  React ,{Component} from 'react';
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile'
export default class App extends Component{
  render (){
    return  <Button type="primary"> 登录!</Button>
  }
}
ReactDOM.render(<App />,
  document.getElementById('root'))