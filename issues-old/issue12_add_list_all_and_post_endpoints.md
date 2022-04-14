Create `CollegiateSubredditController`, add `GET` (index) and `POST` (create)

# Acceptance Criteria:

- [ ] There is a controller file `CollegiateSubredditController.java`
      in the expected directory.
- [ ] In `CollegiateSubredditController.java` there is 
      code for a `GET /api/collegiateSubreddits/all` endpoint 
      that returns a JSON list of all subreddits in the database.
      (We sometimes call this an *index* action since it lists all
      items in the database.)
- [ ] In `CollegiateSubredditController.java` there is 
      code for a `POST /api/collegiateSubreddits/post` endpoint
      that can be used to create a new entry in the table. (This
      is a *create* action.)
- [ ] The Swagger-UI endpoints for these are well documented so that
      any member of the team can understand what they are for and
      how to use them.
- [ ] The `POST` endpoint works as expected, in the sense that new
      records can be added to the database (on localhost).
- [ ] The `GET` endpoint works as expected, in the sense that the new
      records that are added show up (on localhost).
- [ ] The `GET` and `POST` endpoints work as expected when the 
      app is deployed to Heroku.
- [ ] There is full test coverage (Jacoco) for the methods in 
      `CollegiateSubredditController.java`
- [ ] There is full mutation test coverage (Pitest) for the methods in
      `CollegiateSubredditController.java`

# Details

Consult the methods in [`TodosController.java`](https://github.com/ucsb-cs156-w22/demo-spring-react-example-v2/blob/main/src/main/java/edu/ucsb/cs156/example/controllers/TodosController.java) for examples 
of controller methods.

Consult the tests in [`TodosControllerTests.java`](https://github.com/ucsb-cs156-w22/demo-spring-react-example-v2/blob/main/src/test/java/edu/ucsb/cs156/example/controllers/TodosControllerTests.java) for examples
of controller tests.

