import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import RightCharts from '../Containers/RightCharts/RightCharts';
import LeftCharts from '../Containers/LeftCharts/LeftCharts';
import Contents from '../Containers/Contents/Contents';
import Titles from '../Containers/Titles/Titles';
import ActiveMemu from './Image/menu_active.png';
import './BaseLayout.css';
import '../icomoon/style.css';

const {Header, Sider, Content} = Layout;
const activeStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    backgroundImage: 'url(' + ActiveMemu + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'block'
};

class BaseLayout extends PureComponent {
       constructor(props) {
        super(props);
        this.state = {
            background: 'default',
            showFloor:false
        };
    }

    componentDidMount() {
      let path = this.props.history.location.pathname;
      if(path === '/'){
         this.props.history.push('/home');
      }
    }

    changeBg = (data) => {
      if(data === 'out'){
         this.setState({background:'out'});
      }
      else if(data === 'venue'){
        this.setState({background:'venue'});
      }
      else {
        this.setState({background:'default'});
      }
    };

    changeFloor = (isShow) => {
      this.setState({showFloor:isShow})
    }

    render() {
        return (
            <Layout className={"background " + this.state.background}>
              <Header style={{height:'10vh'}} className='layout-common'>
                <Titles/>
              </Header>
              <Layout style={{height:'88vh'}} className='layout-common'>
                <Sider width='20%' className='layout-common'>
                  <LeftCharts/>
                </Sider>
                <Content className='layout-common'>
                  <Contents changeBg={this.changeBg} showFloor={this.state.showFloor}/>                 
                  <div className='menu'>
                    <ul>
                      <li>
                        <NavLink activeStyle={ activeStyle } to='/home'>
                          <span>首页</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink activeStyle={ activeStyle } to='/cultural-relic'>
                          <span>文物监管</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink activeStyle={ activeStyle } to='/building-operation'>
                          <span>楼宇运行</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink activeStyle={ activeStyle } to='/venue-service'>
                          <span>场馆服务</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink activeStyle={ activeStyle } to='/audience-portraits'>
                          <span>观众画像</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink activeStyle={ activeStyle } to="/public-praise">
                          <span>口碑舆情</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink activeStyle={ activeStyle } to="/emergency-command">
                          <span>应急指挥</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </Content>
                <Sider width='20%' className='layout-common'>
                  <RightCharts changeBg={this.changeBg} changeFloor={this.changeFloor}/>
                </Sider>
              </Layout>
            </Layout>
            );
    }
}

export default BaseLayout;