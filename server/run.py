from app.main import create_app 
from app.config.settings  import settings
import uvicorn;


def main():
    app=create_app
    uvicorn.run(app,host=settings.host,port=settings.port,workers=1)
    

if __name__=="__main__":
   main()
    