import sqlite3 
conn = sqlite3.connect('bulletin.db') 
cur = conn.cursor() 

cur.execute("""CREATE TABLE IF NOT EXISTS eleve (
                nom STRING,
                prenom STRING,
                num_INE STRING PRIMARY KEY);""")

cur.execute("""CREATE TABLE IF NOT EXISTS note (
                intitule STRING,
                id_matiere STRING PRIMARY KEY);""")

cur.execute("""CREATE TABLE IF NOT EXISTS matiere (
                num_INE STRING REFERENCES eleve(num_INE),
                id_matiere STRING REFERENCES note(id_matiere),
                note FLOAT,
                PRIMARY KEY (num_INE, id_matiere)
            );""")

donnees_eleves = [
    ('Martin', 'Killian', '0123456789A'),
    ('Robert', 'Aurelien', '1234567890B'),
    ('Durand', 'Simone', '2345678901C'),
    ('Dupin', 'Jacky', '3456789012D'),
    ('Martin', 'Eveline', '4567890123E'),
]

donnees_matieres = [
    ('NSI', 'AA'),
    ('Mathematiques', 'AB'),
    ('Physique', 'AC'),
    ('Francais', 'AD'),
    ('Histoire', 'AE'),
    ('SVT', 'AF'),
    ('SES', 'AG'),
    ('Anglais', 'AH'),
    ('Espagnol', 'AI'),
]

donnees_notes = [
    ('0123456789A', 'AH', 8.0),
    ('3456789012D', 'AG', 12.0),
    ('2345678901C', 'AB', 18.0),
    ('3456789012D', 'AF', 5.0),
    ('0123456789A', 'AA', 11.0),
    ('0123456789A', 'AC', 14.5)
]


cur.execute("DELETE FROM matiere;")
cur.execute("DELETE FROM note;")
cur.execute("DELETE FROM eleve;")

cur.executemany("INSERT INTO eleve (nom, prenom, num_INE) VALUES (?, ?, ?)", donnees_eleves)
cur.executemany("INSERT INTO note (intitule, id_matiere) VALUES (?, ?)", donnees_matieres)
cur.executemany("INSERT INTO matiere (num_INE, id_matiere, note) VALUES (?, ?, ?)", donnees_notes)

cur.execute("""
SELECT e.nom, e.prenom, n.intitule AS matiere, m.note
FROM eleve e
LEFT JOIN matiere m ON e.num_INE = m.num_INE
LEFT JOIN note n ON m.id_matiere = n.id_matiere
ORDER BY e.nom, e.prenom, n.intitule;
""")
for row in cur.fetchall():
    print(row)

cur.execute("""
SELECT DISTINCT e.nom, e.prenom
FROM eleve e
JOIN matiere m ON e.num_INE = m.num_INE
WHERE m.note < 10
ORDER BY e.nom, e.prenom;
""")
for row in cur.fetchall():
    print(row)

cur.execute("""
SELECT n.intitule, m.note
FROM eleve e
JOIN matiere m ON e.num_INE = m.num_INE
JOIN note n ON m.id_matiere = n.id_matiere
WHERE e.nom = 'Robert' AND e.prenom = 'Aurelien'
ORDER BY n.intitule;
""")
for row in cur.fetchall():
    print(row)

conn.commit()
cur.close()
conn.close()

