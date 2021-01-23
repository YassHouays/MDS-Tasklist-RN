import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './note'
import Compteur from './compteur'
import moment from 'moment/min/moment-with-locales' 

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            noteArray:[],
            noteText:'',
            NewNote :0,
            EndNote :0
        }
    }

    render(){
      moment.locale('fr') 

        let notes = this.state.noteArray.map((val,key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=> this.deleteNote(key)}
                    switchStateMethod={() => this.switchTask(key)}
            />
        })
        return (
            <View style={styles.container}>
               <View style={styles.header}>
                    <Text style={styles.headerText}>{moment().format('dddd DD MMMM')}</Text>
                </View>

                <View >
                    <TextInput
                        style = {styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder = 'Ecrivez votre note'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <Compteur NewNote={this.state.NewNote} EndNote={this.state.EndNote} />
            
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                
                <TouchableOpacity onPress={this.addTask.bind(this)} style={styles.addButton}>
                <Text style = {styles.addButtonText}>+</Text>
                </TouchableOpacity>


            </View>
          );
    }
    addTask(){
        if(this.state.noteText){
            var date = new Date();
            this.state.noteArray.push({
                'date' : date.getFullYear()+
                '/'+(date.getMonth() + 1)+
                '/' + date.getDate(),
                'note':this.state.noteText,
                'task' : this.state.taskText,
                'status': 1
            });

            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText:this.state.noteText});
            this.setState({NewNote:this.state.NewNote+1});
        }
    }
    deleteNote(key) {
        if(this.state.noteArray[key].status == 0){
          this.setState({EndNote: this.state.EndNote - 1});
      }

        this.state.noteArray.splice(key, 1);
        this.setState({noteArray:this.state.noteArray});
        this.setState({NewNote:this.state.NewNote-1});

    }
    switchTask(key) {
      let noteArray = [ ...this.state.noteArray ];
      noteArray[key] = (this.state.noteArray[key].status == 0) ? {...noteArray[key], status: 1} : {...noteArray[key], status: 0};
      this.setState({ noteArray });

      const new_total = (this.state.noteArray[key].status == 0) ? this.state.EndNote - 1 : this.state.EndNote + 1;
      this.setState({EndNote: new_total});
  }
}

//Main.js
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#3933FF',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#ddd',
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26,
    },
    scrollContainer: {
      flex: 1,
      marginBottom: 100,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
    },
    addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#3933FF',
      width: 90,
      height: 90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 24,
    }
  });
