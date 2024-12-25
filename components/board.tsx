import React from "react";
import {Text, StyleSheet, View} from 'react-native'
export default function Board(){
    var boardCells=[]
    for(var i=0;i<8;i++){
        boardCells.push([])
    }
    for(var i=0;i<boardCells.length;i++){
        for(var j=0;j<8;j++){
            boardCells[i].push("balls" )
        }

    }
    console.log(boardCells)
    var something=0
    var output=boardCells.map(item=>{
        for(var i=0;i<item.length;i++){
            something++
            return <View style={styles.row}>
                {item.map(cell=>{
                    something++
                    if(something%2==0){
                        return <View style={styles.cell}></View>
                    }
                    return <View style={styles.cellAlt}></View>
                })}
            </View>
        }

    })
    return (
        <div style={styles.container}>
            <Text>
                board
            </Text>
            {output} 
        </div>
    )
}
const styles=StyleSheet.create({
    container: {
        flexBasis:'auto',
        flex: 8,
        flexDirection:'column'
    },
    cell: {
        backgroundColor:'gray',
        // flexBasis:'auto',
        width: 50,
        height: 50
    },
    cellAlt: {
        backgroundColor:'white',
        // flexBasis:'auto',
        width: 50,
        height: 50
    },
    row:{
        flexBasis:'auto',
        flex: 8,
        flexDirection: 'row',
        backgroundColor: 'red'
    }
})