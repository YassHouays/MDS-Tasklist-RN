import React from 'react';
import { StyleSheet, Text, View,Image,  TouchableOpacity } from 'react-native';

export default class Note extends React.Component {
    render(){
        let icon;
        let text;
        if (this.props.val.status) {
            icon = require("../../icons/circle.png");    
            text = <Text style={styles.taskText}>{this.props.val.task}</Text>;    
        } else {      
            icon = require("../../icons/check-circle.png");    
            text = <Text style={styles.taskTextEnded}>{this.props.val.task}</Text>;    
        }
        return (
            <View key={this.props.keyval} style={styles.note}>
                <TouchableOpacity style={styles.taskStatus} activeOpacity={0.5} onPress={this.props.switchStateMethod}>
                    <Image style={styles.taskStatusImage} source={icon}/>
                    <Text style={styles.TextStyle}> {text} </Text>
                </TouchableOpacity>

                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style = {styles.noteDeleteText}>Del</Text>
                </TouchableOpacity>

            </View>
          );
    }

}
const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white',
    },
    taskText: {
        paddingLeft: 5,
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        color: '#E91E63',
        fontSize: 20,
    },
    taskTextEnded: {
        paddingLeft: 5,
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        color: '#979bbd',
        fontStyle: 'italic',
        fontSize: 20,
        textDecorationLine: 'line-through',
    },

    taskStatus: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        top: 10,
        bottom: 10,
        left: 10,
        flexDirection:"row",
        alignItems:'center',
    },
    taskStatusImage: {
        width: 16,
        height: 16
    }
});
