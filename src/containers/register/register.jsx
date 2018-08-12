import React,{Component} from 'react';
import {
  Button,
  NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
} from "antd-mobile";
import Logo  from '../../component/logo/logo'
export default class Register extends Component{
    state={
        username:'',
        password:'',
        password2:'',
        type:'dashen'
    }
//处理输入框单选框的变化
    handleChange = (value,name) => {
        this.setState={[name]:value}
    }
    //跳转都登录的界面
    toLogin=()=>{
      this.props.history.replace('/login')
}
//注册
   register=() =>{
      console.log(JSON.stringify(this.state))
 }

  render(){
    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem placeholder='请输入用户名' onChange={ val=>this.handleChange('username',val)}>
            用户名:
          </InputItem>
            <InputItem type='password' placeholder='请输入密码' onChange={ val=>this.handleChange('password',val)} >
              密码:
            </InputItem>
            <InputItem type='password' placeholder='请确认密码' onChange={ val=>this.handleChange('password2',val)}>
              请确认密码:
            </InputItem>
          </List>
        </WingBlank>
        <WhiteSpace/>
        <List.Item>
          &nbsp;&nbsp;&nbsp;<span>用户类型</span>&nbsp;&nbsp;
          <Radio checked={this.state==='dashen'}
                 onClick={
              ()=>{this.handleChange('type','dashen')}}>
            大神
          </Radio>&nbsp;&nbsp;
          <Radio checked={this.state==='laoban'} onClick={
              ()=>{this.handleChange('type','laoban')}}>
            老板
          </Radio>
        </List.Item>
        <Button type="primary" onClick={this.register}>注册</Button>
        <WhiteSpace/>
        <Button type="primary" onClick={this.toLogin}>已有账号</Button>
      </div>
    )
  }

}