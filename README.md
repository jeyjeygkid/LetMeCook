# Let Me Cook! (Running Dinner) – Render Free (files safe)

Render Free hat kein persistentes Filesystem. Deshalb speichert dieses Projekt Laufkarten-PNGs standardmäßig **in der Datenbank** (`STORAGE_BACKEND=db`).

Optional kannst du auf S3/R2 auslagern (`STORAGE_BACKEND=s3`), wenn du langfristig maximale Persistenz willst.

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
