# React Native - First App

Aplicação de estudo de React Native com react-route-flux.

## Requisito

```bash
$ cd /react-native-first-app
$ npm i
# ou
$ yarn
```

## Scripts

Se o **Yarn** foi instalado quando o projeto foi inicializado, as dependências terão sido instaladas através dele, e você provavelmente deve usá-lo para executar esses comandos também.

Ao contrário da instalação de dependência, a sintaxe de execução de comando é idêntica para Yarn e NPM no momento da escrita.

### `npm start`

Roda seua seu app no mode de desenvolvimento.

Abra o aplicativo [**Expo**](https://expo.io) no seu smartphone para visualizar. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Às vezes, talvez seja necessário reiniciar ou limpar o cache do React Native. Para fazer isso, você pode passar o `--reset-cache` flag ao rodar o script start:

```bash
$ npm start -- --reset-cache
# ou
$ yarn start -- --reset-cache
```

#### `npm run ios`

Como `npm start`, mas também tenta abrir seu app no iOS Simulator, se você estiver em um Mac.

#### `npm run android`

Como `npm start`, mas também tenta abrir seu app em um dispositivo Android ou emulador conectado.
