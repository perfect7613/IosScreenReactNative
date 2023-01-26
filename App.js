import { StatusBar } from 'expo-status-bar';
import {Text, View, ImageBackground} from 'react-native';
import wallpaper from './assets/wallpaper.webp';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import NotificationsList from './src/components/NotificationsList';

export default function App() {
  return (
    <ImageBackground source={wallpaper} className='flex flex-1 items-stretch'>
      <View className='items-center h-64 justify-center'>
        <Ionicons name='ios-lock-closed'size={20} color="white"/>
        <Text className='mt-5 text-[20px] font-medium text-[#C3FFFE]'>Thursday, 26 January</Text>
        <Text className='text-[60px] font-bold text-[#C3FFFE]'>21:03</Text>
      </View>

      <NotificationsList/>

      <View className='flex flex-row mt-auto pb-[10px] pl-[30px] pr-[30px] h-[75px] justify-between'>
        <View className='bg-transparent/20 w-[50px] h-[50px] items-center justify-center rounded-full'>
          <MaterialCommunityIcons name="flashlight" size={24} color="white"/>
        </View>
        <View className='bg-transparent/20 w-[50px] h-[50px] items-center justify-center rounded-full'>
          <Ionicons name='ios-camera' size={24} color='white'/>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </ImageBackground>
  );
}


