# 3rd party imports
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

# Using https://fastapi.tiangolo.com/ for

app = FastAPI()

# Add static HTML,CSS,JS and use template engine to create docs for the API
app.mount("/static", StaticFiles(directory="web_frontend/"), name="static")
templates = Jinja2Templates(directory="web_frontend/")


@app.on_event("startup")
async def startup_event():
    print('Starting up the server')


@app.on_event("shutdown")
def shutdown_event():
    print('Application shutdown.')
    # with open("log.txt", mode="a") as log:
    #    log.write("Application shutdown")


# ----------------------------------------------------------------------
# ROUTES
@app.get('/')
async def get_single_page_app(request: Request):
    return templates.TemplateResponse("ui/pages/web_pages/single_page_app/single_page_app.html", {"request": request})

@app.get("/keywordscape_playground", response_class=HTMLResponse)
async def keywordscape_playground(request: Request):
    return templates.TemplateResponse("ui/pages//web_pages/playgrounds/keywordscape_playground/keywordscape_playground.html", {"request": request})

# ---------------------------------------------------------------------------------------------
