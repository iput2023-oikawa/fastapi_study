from api.routers import task, done


from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 静的ファイルを提供
app.mount("/static", StaticFiles(directory="static"), name="static")

# ルーターを組み込む
app.include_router(task.router)
app.include_router(done.router)

# CORSの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 実際の運用環境では許可するオリジンを制約するべき
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

