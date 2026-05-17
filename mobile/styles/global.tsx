import { Background } from "@react-navigation/elements";
import { StyleSheet } from "react-native";

export const COLORS={
    primary:"#0F172A",
    secondary:"#3B82F6",
    tertiary:"#10B981",
    neutral:"#64748B",
    background:"#EEF0FF"
};

export const globalStyle={
    FontFace:"Poppins",
};

export const titlebar=StyleSheet.create({
    title:{
        backgroundColor:"#FFFFFF",
        padding:20
    },
    text:{
        fontFamily:"Montserrat",
        fontSize:30,
        color:"#00A572"
    }
})

export const balanceCard=StyleSheet.create({
    container:{
        backgroundColor:"#1A2B4C",
        padding:30,
        marginTop:0,
        margin:15,
        justifyContent:"center",
        borderRadius:25,
    },

    txt1:{
        fontFamily:globalStyle.FontFace,
        color:"#AAABAC",
        fontSize:20  
    },

    balance:{
        fontFamily:globalStyle.FontFace,
        color:"#EDF0FF",
        fontSize:50
    },
    growthPercentage:{
        fontFamily:globalStyle.FontFace,
        backgroundColor:"#C5C7C8",
        borderRadius:30,
        margin:30,
        marginLeft:0,
        padding:10,
        width:"60%",
        justifyContent:"center",
        textAlign:'center'
    }
})
