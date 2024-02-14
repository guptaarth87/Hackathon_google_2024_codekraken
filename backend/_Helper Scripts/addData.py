import requests
url = "http://127.0.0.1:5000/volunteers"

data = [
    {"name_":"savita upadhyay","pinCode":"453331","email":"arth21@gmail.com","mobile":"03333333333","qualification":"10thpass","managementExperience":"2","researchExperience":"yes","confidence":"notConfident","position":"distributorHelper"},
    {"name_":"John Doe","pinCode":"123456","email":"john.doe@example.com","mobile":"03222222222","qualification":"graduate","managementExperience":"3","researchExperience":"no","confidence":"experienced","position":"instructor"},
    {"name_":"Alice Smith","pinCode":"987654","email":"alice.smith@example.com","mobile":"03111111111","qualification":"12thpass","managementExperience":"1","researchExperience":"yes","confidence":"confident","position":"management"},
    {"name_":"Bob Johnson","pinCode":"456789","email":"bob.johnson@example.com","mobile":"03444444444","qualification":"postgraduate","managementExperience":"5","researchExperience":"yes","confidence":"experienced","position":"instructor"},
    {"name_":"Emily Brown","pinCode":"135790","email":"emily.brown@example.com","mobile":"03555555555","qualification":"graduate","managementExperience":"2","researchExperience":"no","confidence":"confident","position":"distributorHelper"},
    {"name_":"Michael Wilson","pinCode":"246801","email":"michael.wilson@example.com","mobile":"03666666666","qualification":"postgraduate","managementExperience":"4","researchExperience":"yes","confidence":"notConfident","position":"management"},
    {"name_":"Sophia Martinez","pinCode":"112233","email":"sophia.martinez@example.com","mobile":"03777777777","qualification":"12thpass","managementExperience":"0","researchExperience":"no","confidence":"experienced","position":"instructor"},
    {"name_":"James Taylor","pinCode":"445566","email":"james.taylor@example.com","mobile":"03888888888","qualification":"graduate","managementExperience":"3","researchExperience":"yes","confidence":"confident","position":"management"},
    {"name_":"Olivia Garcia","pinCode":"998877","email":"olivia.garcia@example.com","mobile":"03999999999","qualification":"10thpass","managementExperience":"1","researchExperience":"no","confidence":"notConfident","position":"distributorHelper"},
    {"name_":"Daniel Rodriguez","pinCode":"556677","email":"daniel.rodriguez@example.com","mobile":"03121212121","qualification":"postgraduate","managementExperience":"4","researchExperience":"yes","confidence":"experienced","position":"management"},
    {"name_":"Emma Hernandez","pinCode":"334455","email":"emma.hernandez@example.com","mobile":"03132323232","qualification":"12thpass","managementExperience":"2","researchExperience":"no","confidence":"confident","position":"instructor"},
    {"name_":"Liam Lopez","pinCode":"778899","email":"liam.lopez@example.com","mobile":"03143434343","qualification":"graduate","managementExperience":"0","researchExperience":"yes","confidence":"notConfident","position":"management"},
    {"name_":"Ava Gonzales","pinCode":"112233","email":"ava.gonzales@example.com","mobile":"03154545454","qualification":"10thpass","managementExperience":"3","researchExperience":"no","confidence":"experienced","position":"distributorHelper"},
    {"name_":"Noah Perez","pinCode":"990011","email":"noah.perez@example.com","mobile":"03165656565","qualification":"graduate","managementExperience":"1","researchExperience":"yes","confidence":"confident","position":"management"},
    {"name_":"Isabella Torres","pinCode":"223344","email":"isabella.torres@example.com","mobile":"03176767676","qualification":"postgraduate","managementExperience":"5","researchExperience":"no","confidence":"notConfident","position":"instructor"},
    {"name_":"William Ramirez","pinCode":"667788","email":"william.ramirez@example.com","mobile":"03187878787","qualification":"12thpass","managementExperience":"2","researchExperience":"yes","confidence":"experienced","position":"management"},
    {"name_":"Mia Flores","pinCode":"123456","email":"mia.flores@example.com","mobile":"03198989898","qualification":"10thpass","managementExperience":"4","researchExperience":"no","confidence":"confident","position":"distributorHelper"},
    {"name_":"Ethan Nguyen","pinCode":"112233","email":"ethan.nguyen@example.com","mobile":"03210101010","qualification":"graduate","managementExperience":"0","researchExperience":"yes","confidence":"notConfident","position":"management"},
    {"name_":"Charlotte Kim","pinCode":"445566","email":"charlotte.kim@example.com","mobile":"03221212121","qualification":"postgraduate","managementExperience":"3","researchExperience":"no","confidence":"experienced","position":"instructor"},
    {"name_":"Alexander Patel","pinCode":"998877","email":"alexander.patel@example.com","mobile":"03232323232","qualification":"12thpass","managementExperience":"2","researchExperience":"yes","confidence":"confident","position":"management"}
]
for obj in data:
    response = requests.post(url, json=obj)
    if response.status_code == 200:
        print("Data object sent successfully:", obj)
    else:
        print("Failed to send data object:", obj)