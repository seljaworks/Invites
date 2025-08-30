import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-400 ">
      <View className="flex-1 bg-yellow-400">
        <Text>SOOS</Text>
      </View>
      <View className="items-center gap-2 bg-pink-500 py-8 ">
        <Text className="font-bold text-white/60">Welcome to</Text>
        <Text className="text-5xl font-bold text-white">Invites</Text>
        <Text className="text-center text-white/60">
          Create beautiful invitation for all your events. Anyone can receive invitations. Sending
          included with iCloud+.
        </Text>
        <TouchableOpacity className="mt-5 rounded-full bg-white px-10 py-3">
          <Text className="text-lg ">Create an Events</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
