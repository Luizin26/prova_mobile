import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { estilo } from "./style";


export default function Home(){
    return(
        <View>
            <View style={estilo.tela}>
                <Image style={estilo.topo}
                source={require('../../assets/carros.jpg')}/>
            </View>

            <View style={estilo.telasecundaria}>
                <TextInput style={estilo.barrapesquisa}/>      
                
                <TouchableOpacity style={estilo.botao}>
                <Image style={estilo.lupa}
                source={require('../../assets/Lupa.png')}/>
                </TouchableOpacity>
            
            </View>
            <View style={estilo.tudo}>
                <View style={estilo.cards}>
                    <Image style={estilo.nomes}
                    source={require('../../assets/perfil.png')}/>
                    <TextInput style={estilo.input}>Nome usuário</TextInput>
                </View>
                <View style={estilo.cards}>
                    <Image style={estilo.nomes}
                    source={require('../../assets/perfil.png')}/>
                    <TextInput style={estilo.input}>Nome usuário</TextInput>
                </View>
                <View style={estilo.cards}>
                    <Image style={estilo.nomes}
                    source={require('../../assets/perfil.png')}/>
                    <TextInput style={estilo.input}>Nome usuário</TextInput>
                </View>
                <View style={estilo.cards}>
                    <Image style={estilo.nomes}
                    source={require('../../assets/perfil.png')}/>
                    <TextInput style={estilo.input}>Nome usuário</TextInput>
                </View>
            </View>
        </View>
    )
}