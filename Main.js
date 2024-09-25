
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { MD3LightTheme as DarkTheme, PaperProvider } from 'react-native-paper';



const theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };


export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);