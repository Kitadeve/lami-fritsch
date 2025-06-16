@echo off
cd C:\Users\capta\Desktop\libwebp-1.5.0-windows-x64\bin

REM Folder containing your images:
set "srcfolder=C:\Users\capta\Documents\GitHub\lami-fritsch\assets\img"

REM Convert all JPG files in the folder:
for %%f in ("%srcfolder%\*.jpg") do (
    cwebp "%%f" -q 80 -o "%%~dpnf.webp"
)

echo Conversion complete!
pause
