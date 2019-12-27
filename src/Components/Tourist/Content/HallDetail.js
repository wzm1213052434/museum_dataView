import React from 'react';
import PointDetail from './Image/PointDetail.png';

class HallDetail extends React.Component {
    render() {
        return (
            <div style={ { position: 'absolute', 
            left: this.props.x + 3 + '%', 
            top: this.props.y + '%', 
            width: '20%', height: '30%', 
            color: '#fff', fontSize: '1.5rem', 
            backgroundImage: 'url(' + PointDetail + ')', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'contain' } }>
              <div style={ { paddingTop: '1%', paddingLeft:'5%',fontSize: '1.2rem' } }>珍宝展厅</div>
              <div style= {{ paddingTop: '6%', paddingLeft:'5%',fontSize: '1rem' }} >
                <span>今日累计观众数量：</span>
                <span style={{color:'rgb(28,244,249)'}}>1334</span>
              </div>
              <div style= {{ paddingTop: '1%', paddingLeft:'5%',fontSize: '1rem' }} >
                <span>实时观众数量：</span>
                <span style={{color:'rgb(28,244,249)'}}>332</span>
              </div>
              <div style={ { paddingTop: '1%', paddingLeft:'5%',fontSize: '1rem' } }>
                <span>舒适度：</span>
                <span style={{color:'rgb(28,244,249)'}}>优</span>
              </div>
            </div>
        )
    }
}

export default HallDetail;