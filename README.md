# lang_translator
Pre-requisites:
1. Docker must be installed on your system


Steps to run the application:
1. docker build . -t translator
2. docker run -p 8000:8000 translator (Make sure port 8000 is not in use on your host)
3. Navigate to http://localhost:8000/translator
  

Testing:<br/>
Source lang text: source.txt<br/>
Target lang text: target.txt<br/>
Source lang: English(en)<br/>
Target lang: Hindi(hi)<br/>
