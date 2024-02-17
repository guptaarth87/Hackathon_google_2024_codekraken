import requests
url = "http://127.0.0.1:5000/volunteers"

data = [
 
    {"name_":"Ava Gonzales","pinCode":"112233","email":"ava.gonzales@example.com","mobile":"03154545454","qualification":"10thpass","managementExperience":"3","researchExperience":"no","confidence":"experienced","position":"distributorHelper"},
    {"name_":"Emily Brown","pinCode":"135790","email":"emily.brown@example.com","mobile":"03555555555","qualification":"graduate","managementExperience":"2","researchExperience":"no","confidence":"confident","position":"management"},
    {"name_":"Michael Wilson","pinCode":"246801","email":"michael.wilson@example.com","mobile":"03666666666","qualification":"postgraduate","managementExperience":"4","researchExperience":"yes","confidence":"notConfident","position":"instructor"},
    {"name_":"Sophia Martinez","pinCode":"112233","email":"sophia.martinez@example.com","mobile":"03777777777","qualification":"12thpass","managementExperience":"0","researchExperience":"no","confidence":"experienced","position":"distributorHelper"},
    {"name_":"John Doe","pinCode":"123456","email":"john.doe@example.com","mobile":"03222222222","qualification":"graduate","managementExperience":"3","researchExperience":"yes","confidence":"confident","position":"instructor"},
    {"name_":"Alice Smith","pinCode":"987654","email":"alice.smith@example.com","mobile":"03111111111","qualification":"12thpass","managementExperience":"1","researchExperience":"yes","confidence":"confident","position":"distributorHelper"},
    {"name_":"Bob Johnson","pinCode":"456789","email":"bob.johnson@example.com","mobile":"03444444444","qualification":"masters","managementExperience":"5","researchExperience":"yes","confidence":"confident","position":"instructor"},
    {"name_":"Emily Wilson","pinCode":"112233","email":"emily.wilson@example.com","mobile":"03555555555","qualification":"10thpass","managementExperience":"2","researchExperience":"no","confidence":"notConfident","position":"distributorHelper"},
    {"name_":"David Brown","pinCode":"246801","email":"david.brown@example.com","mobile":"03666666666","qualification":"postgraduate","managementExperience":"4","researchExperience":"yes","confidence":"experienced","position":"instructor"},
    {"name_":"Sophia Johnson","pinCode":"112233","email":"sophia.johnson@example.com","mobile":"03777777777","qualification":"12thpass","managementExperience":"0","researchExperience":"no","confidence":"experienced","position":"distributorHelper"},
    {"name_":"James Smith","pinCode":"123456","email":"james.smith@example.com","mobile":"03222222222","qualification":"graduate","managementExperience":"3","researchExperience":"yes","confidence":"confident","position":"instructor"},
    {"name_":"Emma Wilson","pinCode":"987654","email":"emma.wilson@example.com","mobile":"03111111111","qualification":"12thpass","managementExperience":"1","researchExperience":"yes","confidence":"confident","position":"distributorHelper"},
    {"name_":"Michael Brown","pinCode":"456789","email":"michael.brown@example.com","mobile":"03444444444","qualification":"masters","managementExperience":"5","researchExperience":"yes","confidence":"confident","position":"instructor"},
    {"name_":"Sophia Wilson","pinCode":"112233","email":"sophia.wilson@example.com","mobile":"03777777777","qualification":"12thpass","managementExperience":"0","researchExperience":"no","confidence":"experienced","position":"distributorHelper"},
    {"name_":"David Smith","pinCode":"246801","email":"david.smith@example.com","mobile":"03666666666","qualification":"postgraduate","managementExperience":"4","researchExperience":"yes","confidence":"experienced","position":"instructor"},
    {"name_":"James Johnson","pinCode":"123456","email":"james.johnson@example.com","mobile":"03222222222","qualification":"graduate","managementExperience":"3","researchExperience":"yes","confidence":"confident","position":"instructor"},
    {"name_":"Emma Brown","pinCode":"987654","email":"emma.brown@example.com","mobile":"03111111111","qualification":"12thpass","managementExperience":"1","researchExperience":"yes","confidence":"confident","position":"distributorHelper"},
    {"name_":"Michael Johnson","pinCode":"456789","email":"michael.johnson@example.com","mobile":"03444444444","qualification":"masters","managementExperience":"5","researchExperience":"yes","confidence":"confident","position":"instructor"},
    {"name_":"Sophia Brown","pinCode":"112233","email":"sophia.brown@example.com","mobile":"03777777777","qualification":"12thpass","managementExperience":"0","researchExperience":"no","confidence":"experienced","position":"distributorHelper"},
    {"name_":"David Johnson","pinCode":"246801","email":"david.johnson@example.com","mobile":"03666666666","qualification":"postgraduate","managementExperience":"4","researchExperience":"yes","confidence":"experienced","position":"instructor"}


]
for obj in data:
    response = requests.post(url, json=obj)
    if response.status_code == 200:
        print("Data object sent successfully:", obj)
    else:
        print("Failed to send data object:", obj)