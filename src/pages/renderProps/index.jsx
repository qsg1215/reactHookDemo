import React from "react";
import Cat from "../../components/Cat";
class DataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { target: "Zac" };
  }
  render() {
    return <div>{this.props.children()}</div>;
  }
}

export default function RenderProps() {
  return (
    <div>
      <DataProvider>{data => <Cat target={"joe"} />}</DataProvider>
    </div>
  );
}
