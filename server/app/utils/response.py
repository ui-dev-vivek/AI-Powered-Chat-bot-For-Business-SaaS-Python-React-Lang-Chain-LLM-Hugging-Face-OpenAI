class Response:
    @staticmethod
    def success(data,status_code=200,status='success',message="Ok"):
        return {'status_code':status_code,'status':status,'message':message,'data':data}
    
    @staticmethod
    def error(data,status_code=404,status='error',message="Error"):
            return {'status_code':status_code,'status':status,'message':message,'data':data}
    