

// converting into fetch function

fetch("activity-1.xml")
.then((response) => response.text())
.then((str) => new DOMParser().parseFromString(str, "text/xml"))
.then(displayData);


function ConvertToNode(html){
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}
function displayData(xmlDoc){
    const list = document.getElementById(`people`);
    const PersonInfo = xmlDoc.getElementsByTagName(`PersonInfo`);
    for (let index = 0; index < PersonInfo.length; index++) {
    const PersonInfoNode = PersonInfo[index];
    const listItem = stringToNode(`<li>
        <h2>${`Name: ${
            PersonInfoNode.getElementsByTagName(`first_name`)[0].childNodes[0].nodeValue
        }`} ${
            PersonInfoNode.getElementsByTagName(`last_name`)[0].childNodes[0].nodeValue
        }</h2>
    <p>${`Email: ${
        PersonInfoNode.getElementsByTagName(`email`)[0].childNodes[0].nodeValue
    }`}</p>
    <p></p>
    <p>${`Gender: ${
            PersonInfoNode.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue
    }`}</p>
    <p>${`IP Addres: ${
            PersonInfoNode.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue
    }`}</p>
    </li>`);
    list.appendChild(listItem);
    }
}
