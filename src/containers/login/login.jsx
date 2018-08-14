//用户登录路由组件
import React,{Component} from 'react';
import {
    Button,
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
} from "antd-mobile";
import Logo  from '../../component/logo/logo'





export default class Register extends Component{
    state={
        username:'',
        password:'',
    }
//处理输入框单选框的变化
    handleChange = (value,name) => {
        this.setState={[name]:value}
    }
    //跳转都登录的界面
    toMain=()=>{
        this.props.history.replace('/main')
    }
//注册
    login=() =>{
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
                    </List>
                </WingBlank>
                <WhiteSpace/>
                <Button type="primary" onClick={this.login}>登录</Button>
                <WhiteSpace/>
                <Button type="primary" onClick={this.toMain}>我一直都在dev</Button>
            </div>
        )
    }

}