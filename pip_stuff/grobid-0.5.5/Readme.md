# GROBID

[![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![Build Status](https://travis-ci.org/kermitt2/grobid.svg?branch=master)](https://travis-ci.org/kermitt2/grobid)
[![Coverage Status](https://coveralls.io/repos/kermitt2/grobid/badge.svg)](https://coveralls.io/r/kermitt2/grobid)
[![Documentation Status](https://readthedocs.org/projects/grobid/badge/?version=latest)](https://readthedocs.org/projects/grobid/?badge=latest)
[![Docker Status](https://images.microbadger.com/badges/version/lfoppiano/grobid.svg)](https://hub.docker.com/r/lfoppiano/grobid/ "Latest Docker HUB image")

## GROBID documentation

Visit the [GROBID documentation](http://grobid.readthedocs.org) for more detailed information.

## Purpose

GROBID (or Grobid) means GeneRation Of BIbliographic Data. 

GROBID is a machine learning library for extracting, parsing and re-structuring raw documents such as PDF into structured XML/TEI encoded documents with a particular focus on technical and scientific publications. First developments started in 2008 as a hobby. In 2011 the tool has been made available in open source. Work on GROBID has been steady as side project since the beginning and is expected to continue until at least 2020 :)

The following functionalities are available:

+ Header extraction and parsing from article in PDF format. The extraction here covers the usual bibliographical information (e.g. title, abstract, authors, affiliations, keywords, etc.).
+ References extraction and parsing from articles in PDF format. All the usual publication metadata are covered. The different citation contexts in an article are recognized and linked to the full bibliographical references. 
+ Parsing of references in isolation.
+ Extraction of patent and non-patent references in patent publications.
+ Parsing of names (e.g. person title, fornames, middlename, etc.), in particular author names in header, and author names in references (two distinct models).
+ Parsing of affiliation and address blocks. 
+ Parsing of dates (ISO normalized day, month, year).
+ Full text extraction from PDF articles, including a model for the the overall document segmentation and a model for the structuring of the text body (paragraph, section titles, reference callout, figure, table, etc.). 
+ In a complete PDF processing, GROBID manages 55 final labels used to build relatively fine-grained structures, from traditional publication metadata (title, author first/last/middlenames, affiliation types, detailed address, journal, volume, issue, pages, etc.) to full text structures (section title, paragraph, reference markers, head/foot notes, figure headers, etc.). 
+ Consolidation of the extracted bibliographical references using the [biblio-glutton](https://github.com/kermitt2/biblio-glutton) service or the [CrossRef REST API](https://github.com/CrossRef/rest-api-doc). 

GROBID includes a comprehensive web service API, batch processing, a JAVA API, a Docker image, a relatively generic evaluation framework (precision, recall, etc.) and the semi-automatic generation of training data. 

GROBID can be considered as production ready. Deployments in production includes ResearchGate, HAL Research Archive, the European Patent Office, INIST-CNRS, Mendeley, CERN (Invenio), etc. 

GROBID should run properly "out of the box" on Linux (64 bits), MacOS, and Windows (32 and 64 bits). 

For more information on how the tool works, on its key features and performance, visit the [GROBID documentation](http://grobid.readthedocs.org).

## Demo

For testing purposes, a public GROBID demo server is available at the following address: [http://grobid.science-miner.com](http://grobid.science-miner.com)

The Web services are documented [here](http://grobid.readthedocs.io/en/latest/Grobid-service/).

_Warning_: Some quota and query limitation apply to the demo server! 

## Clients

For helping to exploit GROBID service at scale, we provide clients written in Python, Java, node.js using the [web services](https://grobid.readthedocs.io/en/latest/Grobid-service/) for parallel batch processing:

- <a href="https://github.com/kermitt2/grobid-client-python" target="_blank">Python GROBID client</a>

- <a href="https://github.com/kermitt2/grobid-client-java" target="_blank">Java GROBID client</a>

- <a href="https://github.com/kermitt2/grobid-client-node" target="_blank">Node.js GROBID client</a>

All these clients will take advantage of the multi-threading for scaling large set of PDF processing. As a consequence, they will be much more efficient than the [batch command lines](https://grobid.readthedocs.io/en/latest/Grobid-batch/) (which use only one thread) and should be prefered. 

In addition, a Java example project is available to illustrate how to use GROBID as a Java library: [https://github.com/kermitt2/grobid-example](https://github.com/kermitt2/grobid-example). The example project is using GROBID Java API for extracting header metadata and citations from a PDF and output the results in BibTeX format.  

## GROBID Modules 

A series of additional modules have been developed for performing __structure aware__ text mining directly on scholar PDF, reusing GROBID's PDF processing and sequence labelling weaponery:

- [grobid-ner](https://github.com/kermitt2/grobid-ner): named entity recognition

- [grobid-astro](https://github.com/kermitt2/grobid-astro): recognition of astronomical entities in scientific papers

- [grobid-quantities](https://github.com/kermitt2/grobid-quantities): recognition and normalization of physical quantities/measurements

- [software-mention](https://github.com/Impactstory/software-mentions): recognition of software mentions and attributes in scientific literature

- [grobid-bio](https://github.com/kermitt2/grobid-bio): a bio-entity tagger using BioNLP/NLPBA 2004 dataset 

- [grobid-dictionaries](https://github.com/MedKhem/grobid-dictionaries): structuring dictionaries in raw PDF format

- [grobid-superconductors](https://github.com/lfoppiano/grobid-superconductors): recognition of superconductor material and properties in scientific literature 


## Latest version

The latest stable release of GROBID is version ```0.5.4```. This version brings:

+ Transparent usage of [DeLFT](https://github.com/kermitt2/delft) deep learning models (BidLSTM-CRF) instead of Wapiti CRF models, native integration via [JEP](https://github.com/ninia/jep)
+ Support of [biblio-glutton](https://github.com/kermitt2/biblio-glutton) as DOI/metadata matching service, alternative to crossref REST API 
+ Improvement of citation context identification and matching (+9% recall with similar precision, for PMC sample 1943 articles, from 43.35 correct citation contexts per article to 49.98 correct citation contexts per article)
+ Citation callout now in abstract, figure and table captions
+ Structured abstract (including update of TEI schema)
+ Bug fixes and some more parameters: by default using all available threads when training (thanks [@de-code](https://github.com/de-code)) and possibility to load models at the start of the service

(more information in the [release](https://github.com/kermitt2/grobid/releases/tag/0.5.4) page)

New in previous release ```0.5.3```: 

+ Improvement of consolidation options and processing (better handling of CrossRef API, but the best is coming soon ;)
+ Better recall for figure and table identification (thanks to @detonator413) 
+ Support of proxy for calling crossref with Apache HttpClient

(more information in the [release](https://github.com/kermitt2/grobid/releases/tag/0.5.3) page)

New in previous release ```0.5.2```: 

+ Corrected back status codes from the REST API when no available engine (503 is back again to inform the client to wait, it was removed by error in version 0.5.0 and 0.5.1 for PDF processing services only, see documentation of the REST API)
+ Added [Grobid clients](https://grobid.readthedocs.io/en/latest/Grobid-service/#clients-for-grobid-web-services) for Java, Python and NodeJS
+ Added metrics in the REST entrypoint (accessible via http://localhost:8071)
+ Bugfixing

(more information in the [release](https://github.com/kermitt2/grobid/releases/tag/0.5.2) page)

New in previous release ```0.5.1```: 

+ Migrate from maven to gradle for faster, more flexible and more stable build, release, etc.
+ Usage of Dropwizard for web services
+ Move the Grobid service manual to [readthedocs](http://grobid.readthedocs.io/en/latest/Grobid-service/)
+ (thanks to @detonator413 and @lfoppiano for this release! future work in versions 0.5.* will focus again on improving PDF parsing and structuring accuracy)

(more information in the [release](https://github.com/kermitt2/grobid/releases/tag/0.5.1) page)

New in previous release ```0.4.4```: 

+ New models: f-score improvement on the PubMed Central sample, bibliographical references +2.5%, header +7%  
+ New training data and features for bibliographical references, in particular for covering HEP domain (INSPIRE), arXiv identifier, DOI and url (thanks @iorala and @michamos !)
+ Support for CrossRef REST API (instead of the slow OpenURL-style API which requires a CrossRef account), in particular for multithreading usage (thanks @Vi-dot)
+ Improve training data generation and documentation (thanks @jfix)
+ Unicode normalisation and more robust body extraction (thanks @aoboturov)
+ fixes, tests, documentation and update of the pdf2xml fork for Windows (thanks @lfoppiano)

(more information in the [release](https://github.com/kermitt2/grobid/releases/tag/0.4.4) page)

New in previous release ```0.4.2```: 

+ f-score improvement for the PubMed Central sample: fulltext +10-14%, header +0.5%, citations +0.5%
+ More robust PDF parsing
+ Identification of equations (with PDF coordinates)
+ End-to-end evaluation with Pub2TEI conversions
+ many fixes and refactoring

New in previous release ```0.4.1```:

+ Support for Windows thanks to the contributions of Christopher Boumenot!
+ Support to Docker.
+ Fixes and refactoring.
+ New web services for PDF annotation and updated web console application.
+ Some improvements on figure/table extraction - but still experimental at this stage (work in progress, as the whole full text model).

New in previous release ```0.4.0```:

+ Improvement of the recognition of citations thanks to refinements of CRF features - +4% in f-score for the PubMed Central sample.
+ Improvement of the full text model, with new features and the introduction of two additional models for figures and tables.
+ More robust synchronization of CRF sequence with PDF areas, resulting in improved bounding box calculations for locating annotations in the PDF documents.
+ Improved general robustness thanks to better token alignments.

## License

GROBID is distributed under [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0). 

Main author and contact: Patrice Lopez (<patrice.lopez@science-miner.com>)

## Sponsors

ej-technologies provided us a free open-source license for its Java Profiler. Click the JProfiler logo below to learn more.

[![JProfiler](doc/img/jprofiler_medium.png)](http://www.ej-technologies.com/products/jprofiler/overview.html)

## Reference

For citing this work, you can refer to the present GitHub project, together with the [Software Heritage](https://www.softwareheritage.org/) project-level permanent identifier. For example, with BibTeX:

```
@misc{GROBID, 
    title = {GROBID}, 
    howpublished = {\url{https://github.com/kermitt2/grobid}}, 
    publisher = {GitHub},
    year = {2008 --- 2019},
    archivePrefix = {swh},
    eprint = {1:dir:6a298c1b2008913d62e01e5bc967510500f80710}
}
```

See the [GROBID documentation](http://grobid.readthedocs.org/en/latest/References) for more related resources. 
