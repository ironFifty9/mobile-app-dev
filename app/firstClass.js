import React from "react";
import {Text, View, StyleSheet, Image, ScrollView, TextInput, Button, TouchableOpacity} from "react-native";

export const App = () => {
	const [inputValue, setInputValue] = React.useState("Faith");

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text>My name is {inputValue}</Text>
				<Image
					// <--- Without a height and a width, a react native image would not show -->
					style={styles.image}
					source={{uri: "https://fastly.picsum.photos/id/383/200/300.jpg?hmac=sP8wzjNbIJGIPQg-3A86o43HsTopJPnwV73iSCwH9cw"}}
				/>
			</View>
			<TextInput
				// <--- Onchange function for the TextInput --->
				value={inputValue}
				onChangeText={(text) => setInputValue(text)}
				placeholder="Enter your name"
				style={{borderColor: "green", borderWidth: 1.5, padding: 5, margin: 10}}
			/>
			{/* <-- Second one --> */}
			<Button
				// <----- Button ---->
				title="Press me"
				co={{width: 100, height: 50, backgroundColor: "green"}}
				onPress={() => setInputValue("Button Pressed!")}
			/>
			<TouchableOpacity style={styles.button} onPress={() => setInputValue("Button Pressed!")}>
				<Text style={styles.text}>Press me</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		height: 350,
		width: 350,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		height: 200,
		width: 200,
	},
	button: {
		width: 100,
		height: 50,
		backgroundColor: "green",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
		borderRadius: 5
	},
});

export default App;