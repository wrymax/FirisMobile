import React from 'react';
import {
  Text,
} from 'react-native';

import ScrollableTabView,{DefaultTabBar,ScrollableTabBar}  from 'react-native-scrollable-tab-view';


class ScrollableTab extends React.Component {

    render() {
        return (
            <ScrollableTabView
                style={{}}
                // initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
                tabBarPosition='top'
                
            >
                <Text tabLabel='TOP'>My</Text>
                <Text tabLabel='MOST RECENT'>favorite</Text>
                <Text tabLabel='MY VIDEOS'>project</Text>
                <Text tabLabel='COMMUNITY'>My</Text>
            </ScrollableTabView>
        );
    }
  }




// export default () => {
//   ;
// }

export default ScrollableTab