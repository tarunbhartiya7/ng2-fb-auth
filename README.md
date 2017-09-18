# MyCarsFirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Steps to proceed

1.Create a sample application using angular-cli

2.Include the bootstrap css and js file from CDN

3.Also, include the jquery js file from CDN

4.npm install angularfire2 firebase --save

5.create a sample project in firebase and set the sign in method with authentication of google as enabled.

6.import initialize the angularfiremodule with firebase configuration from firebase overview.

7.ng generate service providers/auth.service.ts

8.import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

9.create login and logout methods after creating instance of angularFire

10.import this service file in app.module.ts

11.provide the service in the providers array. This will make sure that all the components
declared in the app.module.ts will get/inject this service.
This is how angular 2 dependency injection works.

12.ng g component loginPage

13.Design the html

14.import rouer and authService in login.ts

15.define login function

16.ng g c homePage

17.design the home page

18.import router and authService in home.ts

19.Define the router in the respective functions

20.Now its time to configure the routes.

21.import { RouterModule, Routes } from '@angular/router'; in the app.module.ts

22.const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent}
];

23.In the imports set the RouterModule.forRoot(routes)

24.Define the router outlet in the app.componenet.html

25.make changes in the app.componenet.ts

Run the app
----------------
ng serve

Publish on github Pages
-----------------------
npm i -g angular-cli-ghpages

ng build --prod --base-href https://tarunbhartiya7.github.io/ng2-fb-demo/

ngh

Go to https://tarunbhartiya7.github.io/ng2-fb-demo/ once you get successfully published....Hurray!!!!




