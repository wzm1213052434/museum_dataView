
import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import ChartLeft from './ChartLeft';
import ChartRight from './ChartRight';
import Contents from './Content';
import Title from './Title';
import style from './Online.module.css';
import Mask from './Image/Mask.png'

const {Header, Sider, Content} = Layout;


export default class Online extends PureComponent {
    render() {
        return (
            <Layout className={ style.backGroud }>
              <img src={ Mask } alt="" className={ style.mask } />
              <Header className={ style.header }>
                <Title history={this.props.history}/>
              </Header>
              <Layout className='layout-common'>
                <Sider width='20%' className='layout-common'>
                  <ChartLeft/>
                </Sider>
                <Content className={ style.layoutContent }>
                  <Contents/>
                </Content>
                <Sider width='20%' className='layout-common'>
                  <ChartRight/>
                </Sider>
              </Layout>
            </Layout>
            );
    }
}
