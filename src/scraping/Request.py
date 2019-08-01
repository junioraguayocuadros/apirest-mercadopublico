import requests
from bs4 import BeautifulSoup
import json

session = requests.Session()

jar = requests.cookies.RequestsCookieJar()
#Insertar la cookie del explorador para hacer la busqueda a mano
jar.set('ASP.NET_SessionId','auax0azssoqyrin0zrc2dgtc') #ASP.NET_SessionId=2pmd020fuqyywk1y0tm1xok4

session.cookies = jar

r = session.get('http://www.mercadopublico.cl/Portal/Modules/Site/Busquedas/ResultadoBusqueda.aspx?qs=9')
#print(r.text)
soup = BeautifulSoup(r.text, 'html.parser')
#print(soup.prettify)
impar = soup.find_all('tr',class_='cssGridAdvancedSearch')
par = soup.find_all('tr',class_='cssGridAdvancedSearchAlter')

compras = [] 
for x in range(0,len(impar)-1):
    compras.append ({
        'ID': impar[x].find_all('a')[0].text,
        'Nombre_Gran_Compra' :  impar[x].find_all('span')[0].text,
        'Comprador': impar[x].find_all('a')[1].text,
        'Fecha_Inicio' : impar[x].find_all('span')[1].text,
        'Fecha_Fin' : impar[x].find_all('span')[2].text,
        'Estado' : impar[x].find_all('span')[3].text
    })
    compras.append ({
        'ID': par[x].find_all('a')[0].text,
        'Nombre_Gran_Compra' :  par[x].find_all('span')[0].text,
        'Comprador': par[x].find_all('a')[1].text,
        'Fecha_Inicio' : par[x].find_all('span')[1].text,
        'Fecha_Fin' : par[x].find_all('span')[2].text,
        'Estado' : par[x].find_all('span')[3].text
    })
    
with open ('mp.json', 'w', encoding='utf8') as file:
    json.dump(compras, file, indent=6, ensure_ascii=False)
