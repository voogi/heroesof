// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    fireBaseConfig: {
        apiKey: 'AIzaSyCHrY0CyFLTw4JvgoZ8rt1WhQenXaN3VwU',
        authDomain: 'awsome-dacf9.firebaseapp.com',
        databaseURL: 'https://awsome-dacf9.firebaseio.com',
        projectId: 'awsome-dacf9',
        storageBucket: 'awsome-dacf9.appspot.com',
        messagingSenderId: '1031591346300'
    },
    levelRequirementMultiplier: 1200
};
