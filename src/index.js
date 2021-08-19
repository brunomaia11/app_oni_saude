import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import axios from 'axios';
import Loading from './components/Loading';
import {urlOniSaude} from './config/BaseUrl';

export default function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    axios.get(urlOniSaude).then(responseUrl => {
      setUrl(responseUrl.data.url);
    });
  }, [url]);

  return (
    <>
      <StatusBar hidden />
      <WebView
        source={{uri: url}}
        renderLoading={Loading}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </>
  );
}
