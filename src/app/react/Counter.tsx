import * as React from "react";



export class Counter extends React.Component<any, any> {


  render() {
    const count = this.props.count
    return <h3>{count}</h3>;
  }
}
