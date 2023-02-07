import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const databaseItemes = [
    {
        id: "1",
        title: "card 1",
        price: 15,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/Bugs.png",
        category: "tazas",
    },
    {
        id: "2",
        title: "card 2",
        price: 25,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/GRIZZY.png",
        category: "set",
    },
    {
        id: "3",
        title: "card 3",
        price: 35,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/TazaRafa.png",
        category: "tazas",
    },
    {
        id: "4",
        title: "card 4",
        price: 5,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/llaveros.png",
        category: "llavero",
    },
    {
        id: "5",
        title: "card 5",
        price: 75,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/Idolos.png",
        category: "tazas",
    },
    {
        id: "6",
        title: "card 6",
        price: 50,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/Cat.png",
        category: "remeras",
    },
    {
        id: "7",
        title: "card 7",
        price: 45,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/Remeras.png",
        category: "remeras",
    },
    {
        id: "8",
        title: "card 8",
        price: 52,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/vasoBad.png",
        category: "vasos",
    },
    {
        id: "9",
        title: "card 9",
        price: 55,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/set.png",
        category: "set",
    },
    {
        id: "10",
        title: "card 10",
        price: 53,
        detail: "lorem ipsum sararara",
        imgurl: "../assets/img/Jardin.png",
        category: "set",
    },
    
];

function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(databaseItemes);
        }, 2000);
    });
}

export function getSingleItem(itemid){
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(databaseItemes.find((prod)=> prod.id === itemid));
    }, 2000);
    })
    }

export default getItems;