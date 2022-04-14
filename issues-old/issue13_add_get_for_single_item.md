 Add `GET` (show) endpoint for a single record in CollegiateSubreddits table

# Acceptance Criteria:

- [ ] In `CollegiateSubredditController.java` there is code for an 
      endpoint `GET /api/collegiateSubreddits?id=123` endpoint 
      that returns the JSON of the database record with id 123 if it
      exists, or a 400 and the error message `id 123 not found` if it
      does not.
- [ ] The Swagger-UI endpoints for this endpoint is well documented
      so that any member of the team can understand how to use it.
- [ ] The endpoint works as expected on localhost.
- [ ] The endpoint works as expected when deployed to Heroku.
- [ ] There is full test coverage (Jacoco) for the new code in 
      `CollegiateSubredditController.java`
- [ ] There is full mutation test coverage (Pitest) for new code in
      `CollegiateSubredditController.java`

# Details

Consult the methods in [`TodosController.java`](https://github.com/ucsb-cs156-w22/demo-spring-react-example-v2/blob/main/src/main/java/edu/ucsb/cs156/example/controllers/TodosController.java) for examples.

Consult the tests in [`TodosControllerTests.java`](https://github.com/ucsb-cs156-w22/demo-spring-react-example-v2/blob/main/src/test/java/edu/ucsb/cs156/example/controllers/TodosControllerTests.java) for examples.

