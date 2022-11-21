'use strict'

const teamMembers = [
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    },
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    },
];
let createDiv;
let memberIesimo;
let container = document.getElementById('container');
let createImage;
let nameH2;
let roleH3;
let divText;


// for per array e per oggetti
for (let i = 0; i < teamMembers.length; i++) {

    memberIesimo = teamMembers[i];

    divUser(memberIesimo)
}

function divUser(memberObj) {
    // crea un div
    createDiv = document.createElement('div');

    // aggiunge la classe box
    createDiv.classList.add('box');

    // crea img
    createImage = document.createElement('img');
    createImage.src = 'img/' + memberObj['image'];

    // crea un nuovo div con i test
    divText = document.createElement('div');


    // crea h2 e h3
    nameH2 = document.createElement('h2');
    roleH3 = document.createElement('h3');

    // inserisce i testi nel div inetrno
    nameH2.append(`${memberObj['name']}`);
    roleH3.append(`${memberObj['role']}`);
    divText.append(nameH2, roleH3);

    // inserisce gli elementi nel DOM
    createDiv.append(createImage, divText);
    container.append(createDiv);
}