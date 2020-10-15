The generic documentation on the Spinque API syntax is described in https://docs.spinque.com/2.5/rest/basic.html

- List all persons from Fortunoff archive, ranked by the number of links do Arolsen documents

https://rest.spinque.com/2.5/arolsenarchives/api/fortunoff/q/persons/results?config=full2

- [ suggested ] this should suggest type-ahead values for the search field
  https://rest.spinque.com/2.5/arolsenarchives/api/fortunoff/q/suggest/p/text/James/results?config=full2

- Get person details given an id from Fortunoff

https://rest.spinque.com/2.5/arolsenarchives/api/fortunoff/q/person/p/id/45507/results?config=full2

- Search for a person from the Fortunoff archive

https://rest.spinque.com/2.5/arolsenarchives/api/fortunoff/q/search/p/text/Siegfried/results?config=full2

- Get documents from arolsen given an id from Fortunoff

https://rest.spinque.com/2.5/arolsenarchives/api/fortunoff/q/related_documents/p/id/45507/results?config=full2

- List the available archive sections that the related documents are part of (in other words the filter options for facet "archive")

https://rest.spinque.com/2.5/arolsenarchives/api/fortunoff/q/related_documents/p/id/45507/q/archive/results?config=full2

- Filter the related documents to an Arolsen archive unit (in other words apply the facet filter for archive)

https://rest.spinque.com/2.5/arolsenarchives/api/fortunoff/q/related_documents/p/id/45507/q/archive:FILTER/p/value/DE%20ITS%206/results?config=full2

You need basic authentication to access the API. I will send you the credentials in a separate email.

One practical issue. This is running on a development environment. No guarantees on uptime.
