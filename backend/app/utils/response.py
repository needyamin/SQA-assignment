
def success_response(data, message="success", status=200):
    return {
        "data": data,
        "message": message,
        "success": True,
        "status": status
    }

def error_response(message, status=400):
    return {
        "error": message,
        "success": False,
        "status": status
    }
