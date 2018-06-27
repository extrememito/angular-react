import * as React from "react";
import { Counter } from "./Counter";
import { Subscription } from "rxjs";

export class Welcome extends React.Component<any, any> {
  private sub: Subscription;

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from React</h1>
        <Counter count={this.state.count} />
      </div>
    );
  }

  componentDidMount() {
    this.sub = this.props.store.select("count").subscribe(count => {
      this.setState({ count });
    });
  }

  componentWillUnmount() {
      this.sub.unsubscribe()
  }
}
