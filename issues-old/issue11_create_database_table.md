Create database table for CollegiateSubreddits


# Acceptance Criteria:

- [ ] There is an `@Entity` class called CollegeSubreddit.java
- [ ] There is a `@Repository` class called CollegeSubredditRepository.java
- [ ] When you start up the repo on localhost, you can see the table
      using the H2 console (see the file `docs/h2-database.md` for 
      instructions.)
- [ ] When you deploy the app to Heroku, you can see the table
      using the psql command (See `Accessing Database Console` in the
      main `README.md` file for instructions.)


# Details: `@Entity` class

The `@Entity` class should be similar to the file [`Todo.java`](https://github.com/ucsb-cs156-w22/demo-spring-react-example-v2/blob/main/src/main/java/edu/ucsb/cs156/example/entities/Todo.java)
in the example repo <https://github.com/ucsb-cs156-w22/demo-spring-react-example-v2>.  

You may also want to consult `User.java` in the same repo for another example.

Your file will be called `CollegiateSubreddit.java` and should be placed
in the `entities` subdirectory of the repo.

It will have a field for `id`, which should be defined like this:

```
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
```

And fields for `name`,`location`, and `subreddit`, each of which should be strings, like this:

```
  private String name;
  private String location;
  private String subreddit;
```

Also note that the line:

```
@Entity(name = "todos")
```

should be replaced with this, since Spring Boot requires `CamelCase` while SQL requires `snake_case`:

```
@Entity(name = "collegiate_subreddits")
```

The rest, you should be able to figure out on your own.

The main difference is that you do NOT need the following in front of
any of your attributes.  

```
@ManyToOne
@JoinColumn(name = "user_id")
```

This preceeds the attribute:

```
  private User user;
```

which is how we indicate that a particular record belongs to a particular `User`.  We aren't doing that in the case of the records in the `CollegeSubreddit` table, though it is a common pattern in many
applications.

# Details: `@Repository` class

For the repository class, see the example [`TodoRepository.java`](https://github.com/ucsb-cs156-w22/demo-spring-react-example-v2/blob/main/src/main/java/edu/ucsb/cs156/example/repositories/TodoRepository.java).

You may also consult `UserRepository.java` in the same repo for another example.

Looking at the sample code, let's figure out what needs to be changed:

```
@Repository
public interface TodoRepository extends CrudRepository<Todo, Long> {
  Iterable<Todo> findAllByUserId(Long user_id);
}
```

1. You'll need to change the name `TodoRepository` to `CollegiateSubredditRepository`
2. You'll need to change `Todo` to `CollegiateSubreddit`.  This `Todo` refers back to the `@Entity` class for a single row in the database.
3. You'll need to replace the method:
   ```
   Iterable<Todo> findAllByUserId(Long user_id);
   ```

   With these:

   ```
   Iterable<CollegiateSubredddit> findByName(String name);
   Iterable<CollegiateSubredddit> findBySubreddit(String subreddit);
   ```

   Note that one of the suprising things about Spring Boot is that 
   you *do not need to write code for these methods*.  Instead, the
   part of the Spring Boot framework known as *Spring Data JDBC* 
   looks at the name you choose for these methods
   and based on that, it *writes them for you*. 

   The rules for translating method naming conventions into 
   generated code are complicated: we will not go over all of them in lecture, and you are not expected to memorize or learn them all.
   Instead, you need to be able to find what you need, when you need it.

   Some documentation is here to help get you started: <https://docs.spring.io/spring-data/jdbc/docs/current/reference/html/#jdbc.query-methods>

   While in this case, we are telling you what methods to add,
   in future cases, you'll be expected to figure out from context
   what kinds of lookup methods you might need for a table, consult
   the Spring Data 

