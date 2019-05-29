import React from "react";
import "./styles.css";

const WithLoading = WrappedComponent => {
  return class WithLoading extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
      setInterval(
        () => {
          this.setState({
            isLoading: false
          });
        },

        1000
      );
    }
    render() {
      return this.state.isLoading ? (
        <div class="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default WithLoading;
