import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.ContainerNote}>
            <View style={styles.ContainerStat}>
                <Text style={styles.statNumber}>{this.props.NewNote}</Text>
                <Text style={styles.statLeftTitle}>Tâches</Text>
            </View>
            <View style={styles.ContainerStat}>
                <Text style={styles.statNumber}>{this.props.EndNote}</Text>
                <Text style={styles.statRightTitle}>Tâches terminées</Text>
            </View>
        </View>
            
          );
    }

}

const styles = StyleSheet.create({
    ContainerNote: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ContainerStat:{
        flexDirection:'row'
    },
    statNumber:{
        marginRight: 10,
    },
    note: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#3933FF',
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
    }
});
