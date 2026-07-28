from app.database import engine

try:
    with engine.connect() as conn:
        print("✅ Connected to MySQL successfully!")
except Exception as e:
    print(e)