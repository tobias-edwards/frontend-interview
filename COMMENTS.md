<!-- Project Comments Go Here -->

- Not sure what is meant by:

  > Meta data on the applications can be found on the `Link` header on any paginated response.

  - Perhaps a reference to react-router? And clicking an application serialises the URL and opens its metadata? But react-router is not a dep so perhaps I'm totally wrong here

- I tried mocking the fetch applications response in vitest but I'm not too familiar with the framework and struggled to prepare mocks per test. Installing Jest proved a bit of a nightmare, too

- Nit: inconsistent casing for class names, migrated to camel-case in most places
