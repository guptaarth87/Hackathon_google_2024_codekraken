import requests

# Replace 'YOUR_API_URL' with the actual API URL you want to use
api_url = "http://127.0.0.1:5000/volunteers"
# Make a GET request to the API
response = requests.get(api_url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse and use the data (assuming the response is in JSON format)
    data = response.json()
    print(data['volunteers'])
else:
    # Print an error message if the request was not successful
    print(f"Error: {response.status_code}")
    print(response.text)
