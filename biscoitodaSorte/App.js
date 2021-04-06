import React, {Component} from 'react';
import {View,
Text,
StyleSheet,
TouchableOpacity,
Image} from 'react-native';

class App extends Component{ 

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'];
  }

  quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: this.frases[numAleatorio],
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){

    return(
      <View style={styles.container}>
        
        <Image source={this.state.img} style={styles.img}/>

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Quebrar Biscoito.
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 150,
    height: 150
  },
  textoFrase: {
    fontSize: 20,
    color: 'orange',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange'
  }
});


export default App;