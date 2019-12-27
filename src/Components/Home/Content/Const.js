import BroadcastUnselected from './Image/BroadcastUnselected.png';
import BroadcastSelected from './Image/BroadcastSelected.png';
import VideoUnselected from './Image/VideoUnselected.png';
import VideoSelected from './Image/VideoSelected.png';
import WCUnselected from './Image/WCUnselected.png';
import WCSelected from './Image/WCSelected.png';
import WIFIUnselected from './Image/WIFIUnselected.png';
import WIFISelected from './Image/WIFISelected.png';
import EmergencyUnselected from './Image/EmergencyUnselected.png';
import EmergencySelected from './Image/EmergencySelected.png';
import SecurityUnselected from './Image/SecurityUnselected.png';
import SecuritySelected from './Image/SecuritySelected.png';
import EnvironmentalUnselected from './Image/EnvironmentalUnselected.png';
import EnvironmentalSelected from './Image/EnvironmentalSelected.png';
import BroadcastTag from './Image/BroadcastTag.png';
import VideoTag from './Image/VideoTag.png';
import WCTag from './Image/WCTag.png';
import WIFITag from './Image/WIFITag.png';
import EmergencyTag from './Image/EmergencyTag.png';
import SecurityTag from './Image/SecurityTag.png';
import EnvironmentalTag from './Image/EnvironmentalTag.png';

export const HOME_CONST = {
    POINT_LIST: [
        {
            name: "broadcast",
            text: "广播",
            selected: true,
            selectedSrc: BroadcastSelected,
            unselectedSrc: BroadcastUnselected
        },
        {
            name: "video",
            text: "视频监控",
            selected: false,
            selectedSrc: VideoSelected,
            unselectedSrc: VideoUnselected
        },
        {
            name: "wc",
            text: "厕所",
            selected: true,
            selectedSrc: WCSelected,
            unselectedSrc: WCUnselected
        },
        {
            name: "wifi",
            text: "WIFI",
            selected: false,
            selectedSrc: WIFISelected,
            unselectedSrc: WIFIUnselected
        },
        {
            name: "emergency",
            text: "应急预警",
            selected: false,
            selectedSrc: EmergencySelected,
            unselectedSrc: EmergencyUnselected
        },
        {
            name: "security",
            text: "安保人员",
            selected: false,
            selectedSrc: SecuritySelected,
            unselectedSrc: SecurityUnselected
        },
        {
            name: "environmental",
            text: "环境数据",
            selected: true,
            selectedSrc: EnvironmentalSelected,
            unselectedSrc: EnvironmentalUnselected
        }
    ],
    BROADCAST_TAGS: {
        type: 'broadcast',
        selected: true,
        srcUrl: BroadcastTag,
        data: [{
            x: 20,
            y: 70,
            text: '广播01'
        }, {
            x: 50,
            y: 60,
            text: '广播02'
        }]
    },
    VIDEO_TAGS: {
        type: 'video',
        selected: false,
        srcUrl: VideoTag,
        data: [{
            x: 30,
            y: 70,
            text: '视频监控01'
        }, {
            x: 60,
            y: 50,
            text: '视频监控02'
        }]
    },
    WC_TAGS: {
        type: 'wc',
        selected: true,
        srcUrl: WCTag,
        data: [{
            x: 40,
            y: 40,
            text: '厕所01'

        }, {
            x: 60,
            y: 45,
            text: '厕所02'
        }]
    },
    WIFI_TAGS: {
        type: 'wifi',
        selected: false,
        srcUrl: WIFITag,
        data: [{
            x: 35,
            y: 35,
            text: 'WIFI01'
        }, {
            x: 55,
            y: 45,
            text: 'WIFI02'
        }]
    },
    EMERGENCY_TAGS: {
        type: 'emergency',
        selected: false,
        srcUrl: EmergencyTag,
        data: [{
            x: 25,
            y: 40,
            text: '应急预警01'

        }, {
            x: 60,
            y: 20,
            text: '应急预警02'
        }]
    },
    SECURITY_TAGS: {
        type: 'security',
        selected: false,
        srcUrl: SecurityTag,
        data: [{
            x: 20,
            y: 50,
            text: '安保人员01'

        }, {
            x: 60,
            y: 30,
            text: '安保人员02'
        }]
    },
    ENVIRONMENTAL_TAG: {
        type: 'environmental',
        selected: true,
        srcUrl: EnvironmentalTag,
        data: [{
            x: 25,
            y: 55,
            text: '环境数据01'

        }, {
            x: 40,
            y: 65,
            text: '环境数据02'
        }]
    }
}