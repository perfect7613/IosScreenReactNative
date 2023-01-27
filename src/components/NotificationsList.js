import { FlatList, useWindowDimensions } from 'react-native';
import notifications from '../../notifications';
import NotificationItem from './NotificationItem';


const NotificationsList = ({...flatListProps}) => {
    return (
      <FlatList
        data={notifications}
        renderItem={({ item, index }) => (
          <NotificationItem data={item} index={index} />
        )}
        {...flatListProps}
      />
    );
};
  
export default NotificationsList;