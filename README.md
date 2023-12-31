# Project Explanation
    1. Create API using .NET Core API.
    2. Create Angular UI and retrive data from the .NET Core API:
        1. Create an Angular Service 'student.service.ts' using HttpClient and Observables.
        2. Import 'HttpClientModule' in app.module.
        3. Obtain the student service in the Component (appComponent) using Dependency Injection and subscribe to the the service in to get the data using the ngOnInit() Life-Cycle Hook.
        4. Use *ngFor structural directive to display the data in the UI.

# Git : Pushing Code Change
    1. git init
    2. git add .
    3. git commit -am "Baseline"
    4. git remote add origin https://github.com/wickerknox89/StudentApplication.git
    5. git push -u origin master

