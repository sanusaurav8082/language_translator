# lang_translator
Pre-requisites:
1. Docker must be installed on your system


Steps to run the application:
1. docker build . -t translator
2. docker run -p 8000:8000 translator (Make sure port 8000 is not in use on your host)
3. Navigate to http://127.0.0.1:8000/translator

Testing:
Source language text file: source.txt
Target language text file: target.txt
Source language: English(en)
Target language: Hindi(hi)
