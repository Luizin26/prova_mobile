import { StyleSheet } from "react-native";


export const estilo = StyleSheet.create({
    tudo: {
        padding: 30,
        backgroundColor: '#e01e37',
        height: '75%',
        gap: 30
    },
     topo: {
        height: 100,
        
    
     },
    Usuarios: {
        height: 60,
        width: 60
    },

    cards: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderRadius: 20
    },

    tela: {
        backgroundColor: '#800e13',
        marginTop: 35
        
     },
     telasecundaria: {
        backgroundColor: '#800e13',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '10%',
     },

    botao: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#fff',
        borderRadius: 20
        
    },

    barrapesquisa: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 280,
        height: 40,
        
     },

    lupa: {
        height: 20,
        width:20
    },
    nomes: {
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#fff'
    }

})