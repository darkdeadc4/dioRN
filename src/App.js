import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#c9d1d9';
const colorDarkFontGithub = '#4f565e';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/97718074?v=4';

const urlToMyGithub = 'https://github.com/darkdeadc4';

const App = () => {

    const handlePressGoToGithub = async ()=>{
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res) {
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image accessibilityLabel='Foto de perfil' style={style.avatar} source={{uri: imageProfileGithub}}/>
                <Text accessibilityLabel='Nome: Cleiton Feitosa' style={[style.defaultText, style.name]}>Cleiton Feitosa</Text>
                <Text accessibilityLabel='Nickname: darkdeadc4' style={[style.defaultText, style.nickname]}>darkdeadc4</Text>
                <Text accessibilityLabel='Descrição: Developer Front-End' style={[style.defaultText, style.description]}>Developer Front-End</Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>   
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub, // Definindo cor de fundo
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'blue',
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithub,
    },

    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickname: {
        color: colorDarkFontGithub,
        fontSize: 18,
    },

    description: {
        fontWeight: 'bold',
        fontSize: 14, 
    },
    
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16, 
    },
});