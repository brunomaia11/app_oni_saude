import React from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import Loading from './components/Loading';

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <WebView
        source={{uri: 'https://devfront.oni.tec.br/'}}
        renderLoading={Loading}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </>
  );
}
