@echo off
echo Installing Python dependencies...
python -m pip install --upgrade pip
pip install -r requirements.txt

echo Starting backend server...
python main.py

pause