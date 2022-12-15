# KeywordScape
KeywordScape - Visual Document Exploration using Contextualized Keyword Embeddings

## Jupyter Notebook Setup
1. Clone Repository
2. Rebuild Environment using either conda or pip from conda_requirements.txt or pip_requirements.txt SOLUTION can be found here: https://stackoverflow.com/questions/50777849/from-conda-create-requirements-txt-for-pip3
2. cd into repository
3. execute: jupyter lab
4. open KeywordScape_Pipeline.ipynb

## Add Custom PDF Dataset
1. Create a separate folder in your working environment and collect a set of PDFs in that folder
2. Set the path to the folder in the variable: pdf_files_folder (cell 4)
3. Parse PDFs to JSON using allenai science-parse lib (run cell 13)
4. Clean Corpus (run cell 14)
5. Create Maps (run cell 15)
6. System exported 3 files named as: interactive_document_corpus_base_map_points_file_path, interactive_document_corpus_corpus_points_file_path, interactive_document_corpus_topic_corpus_file_path
7. Copy Files into directory: keywordscape/docker/src/backend/base_fastapi_backend/src/web_frontend/ui/pages/web_pages/playgrounds/keywordscape_playground/assets/
8. 


## Demo Setup
1. Clone Repository
2. cd into docker/src/
3. execute: docker-compose up --build 
4. open localhost:8080/keywordscape_playground in browser




