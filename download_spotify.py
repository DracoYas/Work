import subprocess
import os
import zipfile
import shutil
import sys

def download_spotify_playlist(url, output_zip):
    """
    Télécharge une playlist Spotify en MP3 et la compresse dans un fichier ZIP.

    :param url: URL de la playlist Spotify
    :param output_zip: Nom du fichier ZIP de sortie
    """
    # Dossier temporaire pour les téléchargements
    temp_dir = "temp_spotify_downloads"
    if os.path.exists(temp_dir):
        shutil.rmtree(temp_dir)
    os.makedirs(temp_dir)

    try:
        # Commande spotdl pour télécharger la playlist
        command = ["spotdl", url, "--output", temp_dir]
        print("Téléchargement en cours...")
        result = subprocess.run(command, capture_output=True, text=True)

        if result.returncode != 0:
            print("Erreur lors du téléchargement:")
            print(result.stderr)
            return False

        # Créer le fichier ZIP
        with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(temp_dir):
                for file in files:
                    if file.endswith('.mp3'):
                        zipf.write(os.path.join(root, file), file)

        print(f"Playlist téléchargée et compressée dans {output_zip}")
        return True

    except Exception as e:
        print(f"Erreur: {e}")
        return False

    finally:
        # Nettoyer le dossier temporaire
        if os.path.exists(temp_dir):
            shutil.rmtree(temp_dir)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python download_spotify.py <spotify_playlist_url> <output_zip_file>")
        sys.exit(1)

    url = sys.argv[1]
    output_zip = sys.argv[2]
    download_spotify_playlist(url, output_zip)
