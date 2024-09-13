from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def candlestick_data(request):
    """
    Generates a response containing candlestick data.

    This function constructs and returns JSON data representing candlestick
    information for a series of dates. Each candlestick chart entry contains four 
    key points: open, high, low, and close.

    Parameters: request (object): The HTTP request object
    Returns: A Response object containing JSON data
    """
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {"x": "2023-01-03", "open": 40, "high": 50, "low": 35, "close": 45},
        ]
    }

    return Response(data)

# ------------------------
@api_view(['GET'])
def line_chart_data(request):
    """
    Generates a response containing line chart data.

    This function constructs and returns JSON data representing line chart
    information for a series of dates. Each line chart entry contains two 
    key points: labels and data.

    Parameters: request (object): The HTTP request object
    Returns: A Response object containing JSON data
    """
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }

    return Response(data)

# ------------------------
@api_view(['GET'])
def bar_chart_data(request):
    """
    Generates a response containing barchart data.

    This function constructs and returns JSON data representing line chart
    information for a series of dates. Each bar chart entry contains two 
    key points: labels and data.

    Parameters: request (object): The HTTP request object
    Returns: A Response object containing JSON data
    """
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }

    return Response(data)

# ------------------------
@api_view(['GET'])
def pie_chart_data(request):
    """
    Generates a response containing pie chart data.

    This function constructs and returns JSON data representing pie chart
    information for a series of dates. Each pie chart entry contains two 
    key points: labels and data.

    Parameters: request (object): The HTTP request object
    Returns: A Response object containing JSON data
    """
    data = {
       "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }

    return Response(data)
