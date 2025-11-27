import sqlite3
conn = sqlite3.connect('BDmeteo_bis.db')
cur = conn.cursor()

cur.execute("""CREATE TABLE IF NOT EXISTS meteo (id INTEGER PRIMARY KEY,
            lieu VARCHAR(90),  
            annee INTEGER,
            mois INTEGER,
            Tmin integer,
            Tmax integer,
            precipitation integer,
            CHECK (annee>0 AND mois>0 AND mois<=12));""")

fichier = open("Donnees_meteo_bis.csv", "r")
donnees=[]
for ligne in fichier:
    donnees.append(ligne.rstrip().split(';'))
print (donnees)

for d in donnees:
    cur.execute("""INSERT INTO meteo VALUES (?, ?, ?, ?, ?, ?, ?)""", d)

req="SELECT * FROM meteo;"
cur.execute(req)

for result in cur:
    print(result)

conn.commit()
cur.close()
conn.close()


