/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error, errorInfo) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    if (this.props.onError) {
      this.props.onError(error.message);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Oops.</Text>
          <Text>Something failed in UI</Text>
        </View>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
