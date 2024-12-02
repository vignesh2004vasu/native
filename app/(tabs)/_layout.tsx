import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function TabsLayout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Clear user data from AsyncStorage
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("token");

      // Redirect to login screen after logout
      router.push("/"); // Ensure this routes to the login screen
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: "#000000",
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: "#000000",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home page",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={30}
              color={color}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="log-out"
              size={24}
              color="white"
              onPress={handleLogout} // Logout on press
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          headerTitle: "Ticket page",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "ticket-sharp" : "ticket-outline"}
              size={30}
              color={color}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="log-out"
              size={24}
              color="white"
              onPress={handleLogout} // Logout on press
            />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          headerTitle: "More page",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              size={30}
              color={color}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="log-out"
              size={24}
              color="white"
              onPress={handleLogout} // Logout on press
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerTitle: "Map page for user",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "map-sharp" : "map-outline"}
              size={30}
              color={color}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="log-out"
              size={24}
              color="white"
              onPress={handleLogout} // Logout on press
            />
          ),
        }}
      />
    </Tabs>
  );
}
