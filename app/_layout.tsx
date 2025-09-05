import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: 'cyan', tabBarStyle: { backgroundColor: '#e69933'}}}>
        <Tabs.Screen name="index" options={{title: 'דף הבית', tabBarIcon: ({ color }) => (<FontAwesome size={28} name="home" color={color} />),}}/>
        <Tabs.Screen name="disciplinary" options={{title: 'אכיפת דיגום', tabBarIcon: ({ color }) => (<FontAwesome5 name="tshirt" size={24} color={color}/>),}}/>
        <Tabs.Screen name="traffic" options={{title: 'אכיפת תנועה', tabBarIcon: ({ color }) => (<FontAwesome5 name="car" size={24} color={color}/>),}}/>
    </Tabs>
  );
}
