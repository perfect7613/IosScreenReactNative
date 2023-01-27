import { View, Text, Image } from 'react-native';

export const NOTIFICATION_HEIGHT = 80;


const NotificationItem = ({ data }) => {
    return (
      <View className=' flex-row items-center h-[NOTIFICATION_HEIGHT - 10px] bg-transparent/20 m-[5px] ml-[10px] mr-[10px] p-[13px] rounded-2xl'>
        <Image source={data.icon} className='w-[40px] h-[40px] mr-[10px]'/>
        <View className='flex flex-1'>
          <Text className='text-white font-medium tracking-wide'>{data.title}</Text>
          <Text className='text-white leading-4' numberOfLines={2}>
            {data.subtitle}
          </Text>
        </View>
        <Text className='text-gray-300 text-[12px] absolute right-2 top-3'>{data.createdAt} ago</Text>
      </View>
    );
};


export default NotificationItem;