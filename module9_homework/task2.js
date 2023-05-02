/*ЗАДАНИЕ 2*/

// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

/*Получение данных */
const data = JSON.parse(jsonString);

const list = data.list
      
/*Запись данных в результирующий объект */
const result = { list };

console.log(result);