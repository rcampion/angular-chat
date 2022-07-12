// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	ES_HOST: 'http://localhost:9200',
	RESULTS_PER_PAGE: 10,
	// api_url: 'http://www.zdslogic-development.com:8080/ng8-spring-server/api'
	// api_url: 'http://www.zdslogic-development.com:8080/spring-boot-docker-server/api'
	// api_url: 'https://www.zdslogic.com/ng8-spring-server/api'
	// api_url: 'http://localhost:8080/ng9-spring-server/api'
	redirectUri: 'https://www.zdslogic.com',
	// redirectUri: 'http://localhost:8089',
	// sso_url: 'http://localhost:18080/auth',
	sso_url: 'https://www.zdslogic.com/keycloak/auth',
	// api_url: 'http://localhost:8082/dashboard-server/api',
	api_url: 'https://www.zdslogic.com/dashboard-server/api',
	// ws_url: 'http://localhost:8082/dashboard-server/live'
	ws_url: 'https://www.zdslogic.com/dashboard-server/live',
  	socketUrl: '/' 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
