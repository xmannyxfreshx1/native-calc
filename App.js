/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(){
        super();
        this.state={
            result: 0
        };


    }

    refresh(){
        this.setState({
            result:0
        })
    }



    pressKey(key){

        let oldInput = this.state.result, lastLetter;
        if(oldInput === 0){
            oldInput = '';
        }
        switch (key){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.setState({
                    result: oldInput + key
                });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                lastLetter = oldInput.slice(-1);
                if(lastLetter === '+' || lastLetter === '-' || lastLetter === 'x' || lastLetter === '/')
                    this.setState({
                        result: oldInput.slice(0,-1) + key
                    });
                else
                    this.setState({
                        result: oldInput + key
                    });
                break;
            case '=':
                try{
                    this.setState({
                        result: eval(this.state.result) + ''
                    });
                } catch (e) {
                    this.setState({
                        result: 'NaN'
                    });
                }
                break;
            case '.':
                lastLetter = oldInput.slice(-1);
                if(lastLetter !== '.'){
                    this.setState({
                        result: oldInput + key
                    });
                }
                break;
        }
    }
  render() {
        const {result} = this.state;
    return (
        <View style={{flex:1}}>
            <View style={{flex:2,backgroundColor:'black', flexDirection:'column', justifyContent:'center'}}>
                <ScrollView>
                <Text style={{textAlign:'right', color:'white', fontSize:100}}>{this.state.result}</Text>
                </ScrollView>
            </View>
            <View style={styles.row}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=> this.refresh()}>
                    <Text style={styles.numbers}>C</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <Text style={styles.numbers}>( a)</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.numbers}>%</Text>
                </View>
                <View style={styles.button_end}>
                    <TouchableOpacity onPress={() => this.pressKey('+')}>
                    <Text style={styles.numbers}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>


                <View style={styles.row}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.pressKey('7')}>
                        <Text style={styles.numbers}>7</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.pressKey('8')}>
                        <Text style={styles.numbers}>8</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.pressKey('9')}>
                        <Text style={styles.numbers}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button_end}>
                        <TouchableOpacity onPress={() => this.pressKey('-')}>
                        <Text style={styles.numbers}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            <View style={styles.row}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.pressKey('4')}>
                    <Text style={styles.numbers}>4</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.pressKey('5')}>
                    <Text style={styles.numbers}>5</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.pressKey('6')}>
                    <Text style={styles.numbers}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button_end}>
                    <TouchableOpacity onPress={() => this.pressKey('*')}>
                    <Text style={styles.numbers}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>this.pressKey('1')}>
                    <Text style={styles.numbers}>1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.pressKey('2')}>
                    <Text style={styles.numbers}>2</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.pressKey('3')}>
                    <Text style={styles.numbers}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button_end}>
                    <Text onPress={() => this.pressKey('/')} style={styles.numbers}>/</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View onPress={() => this.pressKey('0')} style={styles.button_zero}>
                    <Text style={styles.numbers}>0</Text>
                </View>
                <View style={styles.button}>
                    <Text onPress={() => this.pressKey('.')} style={styles.numbers}>.</Text>
                </View>
                <View  style={styles.button_end}>
                    <Text onPress={() => this.pressKey('=')} style={styles.numbers}>=</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button:{
      flex:1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center',
      borderColor:'black',
      borderWidth:1
  },
  button_end:{
      flex:1,
      backgroundColor:'orange',
      alignItems:'center',
      justifyContent:'center',
      borderColor:'black',
      borderWidth:1
  },
  button_zero:{
      flex:2,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center',
      borderColor:'black',
      borderWidth:1,
      paddingLeft:2,
  },
  numbers:{
      fontSize:60,
      color:'black'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
