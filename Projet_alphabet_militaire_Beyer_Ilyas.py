# Dictionnaire de l'alphabet militaire (OTAN phonetic alphabet)
otan_alphabet = {
    'A': 'Alpha',
    'B': 'Bravo',
    'C': 'Charlie',
    'D': 'Delta',
    'E': 'Echo',
    'F': 'Foxtrot',
    'G': 'Golf',
    'H': 'Hotel',
    'I': 'India',
    'J': 'Juliett',
    'K': 'Kilo',
    'L': 'Lima',
    'M': 'Mike',
    'N': 'November',
    'O': 'Oscar',
    'P': 'Papa',
    'Q': 'Quebec',
    'R': 'Romeo',
    'S': 'Sierra',
    'T': 'Tango',
    'U': 'Uniform',
    'V': 'Victor',
    'W': 'Whiskey',
    'X': 'X-ray',
    'Y': 'Yankee',
    'Z': 'Zulu'
}

# Fonction pour convertir du texte vers alphabet militaire
def text_to_otan(phrase):
    phrase = phrase.upper()
    result = []
    for char in phrase:
        if char in otan_alphabet:
            result.append(otan_alphabet[char1])
        elif char == ' ':
            result.append(' ')  # Garder les espaces
        # Ignorer les autres caractères
    return ' '.join(result)

# Fonction pour convertir alphabet militaire vers texte
def otan_to_text(code):
    words = code.split()
    result = []
    for word in words:
        # Chercher la lettre correspondante
        # letter = None
        for key, value in otan_alphabet.items():
            if value.upper() == word.upper():
                letter = key
                break
        if letter is None:
            return "Erreur: Code alphabet militaire invalide."
        result.append(letter)
    return ''.join(result)

# Fonction principale
def main():
    print("Convertisseur Alphabet Militaire")
    print("1. Texte vers Alphabet Militaire")
    print("2. Alphabet Militaire vers Texte")
    choix = input("Choisissez le mode (1 ou 2): ")
    
    if choix == '1':
        phrase = input("Entrez la phrase à convertir: ")
        print("Code Alphabet Militaire:", text_to_otan(phrase))
    elif choix == '2':
        code = input("Entrez le code alphabet militaire: ")
        print("Phrase:", otan_to_text(code))
    else:
        print("Choix invalide.")

if __name__ == "__main__":
    main()
