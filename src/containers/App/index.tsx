import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';

@connect(null)
export class App extends React.Component<any, any> {

  render() {
    return (
      <div className={style.normal}>
      </div>
    );
  }
}
