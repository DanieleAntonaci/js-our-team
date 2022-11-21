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


// for per array e per oggetti
for (let i = 0; i < teamMembers.length; i++) {
    createDiv = document.createElement('div');

    memberIesimo = teamMembers[i];
    // console.log(memberIesimo);

    for (let details in memberIesimo) {
        createDiv.append(`${memberIesimo[details]}; `);
        container.append(createDiv);
        console.log(`${details}: ${memberIesimo[details]}`);
    }
}