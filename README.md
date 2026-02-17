# Let Me Cook! (Running Dinner) – Render Free (files safe)

Render Free hat kein persistentes Filesystem. Dieses Projekt speichert Laufkarten-PNGs standardmäßig **in der Datenbank** (`STORAGE_BACKEND=db`).

## Render Web Service
Build: `pip install -r requirements.txt`
Start: `gunicorn app:app --bind 0.0.0.0:$PORT`

## Env Vars (Minimum)
- APP_SECRET
- ADMIN_PASSWORD
- EVENT_PIN (nur Registrierung)
- DATABASE_URL (Postgres)

## Laufkarten-Upload
Admin lädt ZIP hoch (PNGs, Dateiname = Teamname). App matcht per Teamname und speichert PNGs in DB oder S3.
