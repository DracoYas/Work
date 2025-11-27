import sqlite3 
conn=sqlite3.connect('meteo.db') 
cur=conn.cursor() 

cur.execute("""CREATE TABLE IF NOT EXISTS meteo (
                id INTEGER PRIMARY KEY,
                lieu STRING,
                annee INTEGER,
                mois INTEGER,
                Tmin INTEGER,
                Tmax INTEGER,
                precipitation INTEGER);""")

donnees = [
    ('Antibes', 2017, 12, 10, 23, 10),
    ('Nevers', 2016, 4, -5, 22, 86),
    ('Aurillac', 2017, 8, 7, 26, 54),
    ('Montpellier', 2018, 11, 13, 26, 32),
    ('Antibes', 2005, 6, 20, 35, 2),
]

cur.executemany("INSERT INTO meteo (lieu, annee, mois, Tmin, Tmax, precipitation) VALUES (?, ?, ?, ?, ?, ?)", donnees)

cur.execute("""SELECT * FROM meteo WHERE lieu='Antibes' AND annee>=2010""")
for result in cur:
    print(result)

cur.execute("""SELECT lieu, annee, mois FROM meteo WHERE Tmax > 25""")
for result in cur:
    print(result)


conn.commit()
cur.close()
conn.close()

