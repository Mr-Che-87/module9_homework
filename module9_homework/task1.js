/*ЗАДАНИЕ 1*/

const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");  
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

const list = [];

studentNode.forEach(studentNode => { 
const nameNode = studentNode.querySelector("name"); 
const firstNameNode = nameNode.querySelector("first");
const secondNameNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");
const langAttr = studentNode.querySelector("name").getAttribute('lang');
  
  list.push({ 
  firstName: firstNameNode.textContent,
  secondName: secondNameNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: langAttr
}); 
});

const result = {
  list: list
};
                       
             
console.log(result);