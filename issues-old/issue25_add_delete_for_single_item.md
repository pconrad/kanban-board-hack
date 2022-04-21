 Add `DELETE` endpoint for a specific record in UCSBSubjects table.

# Acceptance Criteria:

- [ ] In `UCSBSubjectController.java` there is code for an 
      endpoint `DELETE /api/UCSBSubjects?id=123` endpoint 
      that deletes the record if it exists, and returns 200 (ok) and 
      the text `record 123 deleted`, or returns 404 (Not Found) and
      the text `record 123 not found` if it does not.
- [ ] The Swagger-UI endpoints for this endpoint is well documented
      so that any member of the team can understand how to use it.
- [ ] The endpoint works as expected on localhost.
- [ ] The endpoint works as expected when deployed to Heroku.
- [ ] There is full test coverage (Jacoco) for the new code in 
      `UCSBSubjectController.java`
- [ ] There is full mutation test coverage (Pitest) for new code in
      `UCSBSubjectController.java`

# Details

Consult the methods in [`TodosController.java`](https://github.com/ucsb-cs156-w22/demo-spring-react-example-v2/blob/main/src/main/java/edu/ucsb/cs156/example/controllers/TodosController.java) for examples.

Consult the tests in [`TodosControllerTests.java`](https://github.com/ucsb-cs156-w22/demo-spring-react-example-v2/blob/main/src/test/java/edu/ucsb/cs156/example/controllers/TodosControllerTests.java) for examples.

