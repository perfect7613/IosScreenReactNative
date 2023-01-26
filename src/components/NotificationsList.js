import { FlatList } from 'react-native';
import notifications from '../../notifications';
import NotificationItem from './NotificationItem';


const NotificationsList = () => {
    return (
      <FlatList
        data={notifications}
        renderItem={({ item, index }) => (
          <NotificationItem data={item} index={index} />
        )}
      />
    );
};
  
export default NotificationsList;