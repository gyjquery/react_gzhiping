import React ,{Component}from 'react'
import './logo.less'
import logo from './logo.png'
//简单的显示logo组件
export default class Logo extends Component{
    render(){
        return(
            <div className='logo-comtainer'>
                <img src={logo} alt="logo" className='logo-img'/>
            </div>
        )
    }

}