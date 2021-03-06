import React, {Component} from 'react';

import {View} from 'react-native';

import Pie from '../../components/pie';
import Gauge from '../../components/gauge';
import {ButtonGroup} from 'react-native-elements';
import Table from '../../components/table';

import styles from '../styles';

// hoje = () => {
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0');
//   var yyyy = today.getFullYear();

//   return dd + '/' + mm + '/' + yyyy;
// };

const Colors = [
  '#0000ff',
  '#ff00ff',

  '#006400',
  '#ff0000',
  '#8b4513',
  '#bdb76b',
  '#00fa9a',
  '#da70d6',
  '#00008b',
  '#48d1cc',
  '#2f4f4f',
  '#ffa500',
  '#ffb6c1',
  '#aaaaaa',
  '#00ff00',

  '#1e90ff',
];

export default class Panel3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {items, diabase} = this.props.dashboard.dashs;

    let credData = items.find(dash => {
      return (
        dash.id === 11 &&
        dash.de === diabase &&
        dash.ate === diabase &&
        dash.idnode === -1
      );
    });

    let pedData = items.find(dash => {
      return (
        dash.id === 12 &&
        dash.de === diabase &&
        dash.ate === diabase &&
        dash.idnode === -1
      );
    });

    let bonusData = items.find(dash => {
      return (
        dash.id === 13 &&
        dash.de === diabase &&
        dash.ate === diabase &&
        dash.idnode === -1
      );
    });

    let convitesData = items.find(dash => {
      return (
        dash.id === 14 &&
        dash.de === diabase &&
        dash.ate === diabase &&
        dash.idnode === -1
      );
    });

    let convidadoData = items.find(dash => {
      return (
        dash.id === 15 &&
        dash.de === diabase &&
        dash.ate === diabase &&
        dash.idnode === -1
      );
    });

    return (
      <View style={styles.MainWrap}>
        <View style={styles.Header}>
          <View style={styles.HeaderPanel}>
            <View style={styles.Visor}>
              <Table data={credData} size={60} colors={Colors} />
            </View>
          </View>
          <View style={styles.HeaderPanel}>
            <View style={styles.Visor}>
              <Table data={pedData} size={60} colors={Colors} />
            </View>
          </View>
        </View>

        <View style={styles.Client}>
          <View style={styles.ClientRow}>
            <View style={styles.ClientPanel}>
              <View style={styles.Visor}>
                <Pie data={bonusData} size={110} />
              </View>
            </View>
          </View>
          <View style={styles.ClientRow}>
            <View style={styles.ClientPanel}>
              <View style={styles.Visor}>
                <Pie data={convitesData} size={110} />
              </View>
            </View>
          </View>
          <View style={styles.ClientRow}>
            <View style={styles.ClientPanel}>
              <View style={styles.Visor}>
                <Pie data={convidadoData} size={110} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
