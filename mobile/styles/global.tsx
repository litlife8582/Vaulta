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
        fontFamily:"Montserrat_extraBold",
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

export const transactionHistory=StyleSheet.create({
    container:{
        backgroundColor:"#EAF1FF",
        padding:30,
        marginTop:0,
        margin:15,
        justifyContent:"center",
        borderRadius:25,
        borderColor:"black",
        borderWidth:0.5
    },
    headerRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:20
    },
    title:{
        fontFamily:globalStyle.FontFace,
        fontSize:20
    },

    modalOverlay:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.8)",
        justifyContent:"center",
        padding:30,
    },

    modalTitle:{
        fontFamily:globalStyle.FontFace,
        fontSize:30,
        color:"#B6C6F0"
    },
    input:{
        fontFamily:globalStyle.FontFace,
        fontSize:25,
        color:"white",
        backgroundColor:"#B6C6F0",
        borderRadius:20,
        margin:10,
        padding:20
    },
    modalButtons:{
        flexDirection:"row",
        justifyContent:"center",
        margin:30,
    },
    modalButtonTexts:{
        fontFamily:"Montserrat_bold",
        fontSize:20,
        backgroundColor:"#B1F0CE",
        borderRadius:15,
        padding:20,
        width:120,
        alignContent:"center",
    },
    modalAddButtonText:{
        fontFamily:"Montserrat_bold",

    },
    monthlySpending:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    monthlySpendingtxt:{
        fontFamily:"Montserrat_extraLight",
        fontSize:17,
    }
})

export const transactions=StyleSheet.create({
    container:{
        padding:20,
        margin:10,
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
    title:{
        fontFamily:"Montserrat_boldItalic",
        fontSize:15,
    }
})

export const investmentCard=StyleSheet.create({
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

    investmentAmount:{
        fontFamily:globalStyle.FontFace,
        color:"#EDF0FF",
        fontSize:50
    },
    growthPercentage:{
        fontFamily:globalStyle.FontFace,
        backgroundColor:"#C5C7C8",
        borderRadius:30,
        margin:30,
        marginTop:13,
        padding:10,
        width:"60%",
        justifyContent:"center",
        textAlign:'center'
    },
    btncontainer:{
        flex:1,
        flexDirection:"row",
        
    },
    buttons:{
        fontFamily:globalStyle.FontFace,
        backgroundColor:"#C5C7C8",
        borderRadius:15,
        padding:18,
        margin:15,
        width:"40%",
        textAlign:"center",
        alignContent:"center"
    }
})