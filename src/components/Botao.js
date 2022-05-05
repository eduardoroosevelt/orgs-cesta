import React from 'react'
import { StyleSheet,  TouchableOpacity } from 'react-native'
import Texto from './Texto'

const Botao = ({children, onPress, style}) =>{

    return ( 
    <TouchableOpacity style={[estilos.botao,style]} onPress={onPress}>
        <Texto style={estilos.textoBotao}> 
            {children}
        </Texto>
    </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    botao:{
        backgroundColor: "#2A9F85",
        paddingVertical:16,
        borderRadius: 6
    },
    textoBotao:{
        textAlign:'center',
        color: "#FFF",
        fontSize:16,
        lineHeight:26,
        fontWeight:'bold'
    }
})

export default Botao;