window.onload = function(){
                    document.getElementById("translateHandler").addEventListener("click",async function(){
                        document.getElementById("loader").style.display = "block";
                        let sourceLang = document.getElementById("sourceLang").value;
                        let targetLang = document.getElementById("targetLang").value;
                        let sourceText = document.getElementById("sourceText").value;
                        form ={
                            sl: sourceLang,
                            tl: targetLang,
                            q: sourceText
                        }
                        let translateApi = `https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=${targetLang}&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e`
                        let formBody = [];
                        for (let property in form) {
                          var encodedKey = encodeURIComponent(property);
                          var encodedValue = encodeURIComponent(form[property]);
                          formBody.push(encodedKey + "=" + encodedValue);
                        }
                        formBody = formBody.join("&");
                        const rawResponse = await fetch(translateApi, {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                            },
                            body: formBody
                        }).then(function(response){return response.json();}).then(function(data){
                            let words = data['sentences'];
                            let translations = [];
                            for(let word of words){
                            translations.push(word['trans']);
                            }
                            document.getElementById("targetText").value = translations.join('');
                            document.getElementById("loader").style.display = "none";
                        });
                    });
                };