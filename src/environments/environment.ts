// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiHorarioURL: 'http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires'
  // se pasa la url de la api
 //tambien agregamos la url al archivo environment.prod.ts
 //En ambos archivos tienen que existir los mismos parametros
};

//Archivo de configuracion!!

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
