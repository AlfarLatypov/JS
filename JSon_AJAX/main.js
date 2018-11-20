/*
Практика:
1. Создать форму в html документе, на форме добавить три поля, поле text, поле code и кнопку (button).
    Ниже формы создать textarea [readonly]
    Создать файл response.json с содержимым {"response":"My Response", "code":"123"}
    После каждого заполнения полей и нажатия кнопки, делается AJAX запрос к response.json,
    выводим введенный текст, вернувшийся текст в "response", и результат сравнения введенного
    кода и кода в ответе response.json.

    Например, если в поля ввели: "My Text", "123", то в textarea добавляется строка "My Response, My Text, true"
    Или если в поля ввели: "hello", "555", то в textarea добавляется строка "My Response, hello, false"

Домашнее задание:
1. Ниже textarea добавить еще одно поле textarea.
    При каждой отправке (нажатии кнопки), создавать объект из введенных полей,
    сделать из объекта строку stringify, и добавлять в новый textarea
*/

/*
Сериализация - превращение объекта и всех его свойств в строку
Парсинг - обратная процедура
*/



document.querySelector("#but1")
    .addEventListener("click", function (e) {
        e.preventDefault();

        var c = {
            'a': document.getElementById('content1').value,
            'b': document.getElementById('code1').value
        } 

       var str = JSON.stringify(c);

       // textArea1

        document.querySelector('#textArea1').value += str


        


        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'lesson11.json', true); // GET/POST/PUT/DELETE, URL, async
        xhr.onload = function () {  
            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                console.log(typeof xhr.responseText)
                console.log(xhr.getResponseHeader('Content-Type'))

                var response = JSON.parse(xhr.responseText);

                console.log(typeof response)
                console.log(response)
            }

            
            document.querySelector('#textArea2').value += "\n          "+response.response1 + "\n -----------------------------\n\t    ";

            //  document.querySelector('#textArea2').value += response.code1;
            document.querySelector('#textArea2').value += c.b 
            document.querySelector('#textArea2').value += response.code1 
            document.querySelector('#textArea2').value += response.code1 == c.b;

        }
        xhr.send(); // send( data )


       


    }

)








// var str = JSON.stringify(a)
// console.log(typeof str)
// console.log(str)

// console.log( (new Date()).toJSON() );
// console.log( (new Date()).toISOString() );
