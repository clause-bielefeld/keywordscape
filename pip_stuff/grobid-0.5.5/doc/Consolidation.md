# Consolidation

In GROBID, we call __consolidation__ the usage of an external bibliographical service to correct and complement the results extracted by the tool. GROBID extracts usually in a relatively reliable manner a core of bibliographical information, which can be used to match complete bibliographical records made available by these services. 

Consolidation has two main interests:

* The consolidation service improves very significantly the retrieval of header information (+.12 to .13 in f-score, e.g. from 74.59 f-score in average for all fields with Ratcliff/Obershelp similarity at 0.95, to 86.62 f-score, using biblio-glutton and GROBID version 0.5.5 for the PMC 1942 dataset, see the [benchmarking documentation](https://grobid.readthedocs.io/en/latest/End-to-end-evaluation/) and [reports](https://github.com/kermitt2/grobid/tree/master/grobid-trainer/doc)). 

* The consolidation service matches the extracted bibliographical references with known publications, and complement the parsed bibliographical references with various metadata, in particular DOI, making possible the creation of a citation graph and to link the extracted references to external services. 

GROBID supports two consolidation services:

* [CrossRef REST API](https://github.com/CrossRef/rest-api-doc) (default)

* [biblio-glutton](https://github.com/kermitt2/biblio-glutton)

## CrossRef REST API

The advantage of __CrossRef__ is that it is available without any further installation. It has however a limited query rate (in practice around 25 queries per second), which make scaling impossible when processing bibliographical references for several documents processed in parallel. In addition, it provides metadata limited by what is available at CrossRef.  

For using [reliably and politely the CrossRef REST API](https://github.com/CrossRef/rest-api-doc#good-manners--more-reliable-service), it is highly recommended to add a contact email to the queries. This is done in GROBID by modifying the properties file under `grobid-home/config/grobid.properties`:

```
org.grobid.crossref.mailto=toto@titi.tutu
```

Without indicating this email, the service might be unreliable with some query failures over time. The usage of the CrossRef REST API by GROBID respects the query rate indicated by the service dynamically by each response. Therefore, there should not be any issues reported by CrossRef via this email.  

In case you are a lucky Crossref Metadata Plus subscriber, you can set your authorization token in the properties file under `grobid-home/config/grobid.properties` as follow:

```
org.grobid.crossref.token=yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vY3Jvc3NyZWYub3JnLyIsImF1ZXYZImVuaGFuY2VkY21zIiwianRpIjoiN0M5ODlFNTItMTFEQS00QkY3LUJCRUUtODFCMUM3QzE0OTZEIn0.NYe3-O066sce9R1fjMzNEvP88VqSEaYdBY622FDiG8Uq
```

According to Crossref, the token will ensure that said requests get directed to a pool of machines that are reserved for "Plus" SLA users (note: of course the above token is fake). 

## biblio-glutton

This service presents several advantages as compared to the CrossRef service. biblio-glutton can scale as required by adding more Elasticsearch nodes, allowing the processing of several PDF per second. The metadata provided by the service are richer: in addition to the CrossRef metadata, biblio-glutton also returns the PubMed and PubMed Central identifiers, ISTEX identifiers, PII, and the URL of the Open Access version of the full text following the Unpaywall dataset. Finally, the bibliographical reference matching is [slighty more reliable](https://github.com/kermitt2/biblio-glutton#matching-accuracy). 

Unfortunately, you need to install the service yourself, including loading and indexing the bibliographical resources, as documented [here](https://github.com/kermitt2/biblio-glutton#building-the-bibliographical-data-look-up-and-matching-databases). Note that a [docker container](https://github.com/kermitt2/biblio-glutton#running-with-docker) is available. 

After installing biblio-glutton, you need to select the glutton matching service in the `grobid-home/config/grobid.properties` file, with its host and port:

```
#-------------------- consolidation --------------------
# Define the bibliographical data consolidation service to be used, eiter "crossref" for CrossRef REST API or "glutton" for https://github.com/kermitt2/biblio-glutton
#grobid.consolidation.service=crossref
grobid.consolidation.service=glutton
org.grobid.glutton.host=localhost
org.grobid.glutton.port=8080
```

Note that the GROBID online demo hosted [here](http://grobid.science-miner.com) uses  biblio-glutton as consolidation service. 
