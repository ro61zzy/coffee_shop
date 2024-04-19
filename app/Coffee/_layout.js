import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    //  screenOptions={{
    //       drawerStyle: {
    //         backgroundColor: "white",
    //         width: 250,
    //       },
    //       headerShown: false,
    //       headerStyle: {
    //         backgroundColor: "#9dbd9d",
    //       },
    //       headerTintColor: "#fff",
    //       headerTitleStyle: {
    //         fontWeight: "bold",
    //       },
    //       drawerLabelStyle: {
    //         color: "#111",
    //       },
    //     }}
    >
      <Stack.Screen name="home" options={{
        headerTitle:""
      }} />
    </Stack>
  );
}
