import {BsFillHouseDoorFill} from "react-icons/bs"
import {SiOpenaigym} from "react-icons/si"
import {BsBuilding} from "react-icons/bs"
import {RxBorderTop} from "react-icons/rx"
import {TbBuildingWarehouse} from 'react-icons/tb'

export const links = [
    {
        name: "Početna",
        path: "/"
    },
    {
        name: "O nama",
        path: "/about"
    },
    {
        name: "Naši radovi",
        path: "/radovi"
    },
    {
        name: "Kontakt",
        path: "/contact"
    }
]


export const products = [
    {
        id: 1,
        icon: <BsFillHouseDoorFill />,
        title: "Kuće",
        info: "Montažne i zidane, izgradnja i renoviranje",
        path: "/radovi/#house__images"
    },
    {
        id: 2,
        icon: <BsBuilding />,
        title: "Zgrade",
        info: "Sa mogućstvom do 8 spratova, izgradnja i renoviranje",
        path: "/radovi/#building__images"
    },
    {
        id: 3,
        icon: <RxBorderTop />,
        title: "Hale",
        info: "Hale svih vrsta, sa nosećim stubovima kao i bez istih, svih kvadratura",
        path: "/radovi/#hale__images"
    },
    {
        id: 4,
        icon: <TbBuildingWarehouse />,
        title: "Ostali objekti",
        info: "Sve vrste građevinskih objekata, šupe, skladišta, garaže...",
        path: "/radovi/#garage__images"
    },
]

export const portfolioData = [
    {
        id: 1,
        icon: <BsFillHouseDoorFill />,
        title: "235 sazidanih kuća",
        desc: "129 kompletno renoviranih"
    },
    {
        id: 2,
        icon: <BsBuilding />,
        title: "121 sazidana zgrada",
        desc: "54 kompletno renoviranih i 23 delimično"
    },
    {
        id: 3,
        icon: <RxBorderTop />,
        title: "432 Hale",
        desc: "320 bez nosećih stubova i 112 sa nosećim stubovima"
    },
    {
        id: 4,
        icon: <TbBuildingWarehouse />,
        title: "preko 500 pomoćnih objekata",
        desc: "Preko raznovrsnih šupa do garaža"
    },
]

export const faqs = [
    {
        id: 1,
        question: "Koliko vremena je potrebno za izgradnju kuće?",
        answer: "Za izgradnju kompletne prosečne kuće sa kvadraturom od 100 metara kvadratnih, našoj firmi je potrebno 50 dana. Naravno preciznije informacije možete dobiti u razgovoru sa nama."
    },
    {
        id: 2,
        question: "Želim da renoviram fasadu, na čeonoj strani zgrade, da li je to moguće?",
        answer: "Naravno, naša firma se bavi renoviranjem svih vrsta fasada i građevina."
    },
    {
        id: 3,
        question: "Za potrebe skladištenja mašina, koja vrsta hale bi mi odgovarala?",
        answer: "U gotovo 80% slučajeva hala bez nosećih stubova je bolje rešenje u odnosu na istu sa nosećim stubovima iz razloga lakšeg manevrisanja unutar nje i većeg prostora."
    },
    {
        id: 4,
        question: "Želim sa sazidam šupu na postojeći temelj, da li je to moguće?",
        answer: "Naravno, sa našom firmom moguć je svaki tip dogovora."
    },
    {
        id: 5,
        question: "Koliko godina garancije dobijam na montažnu kuću?",
        answer: "U zavisnosti od kvaliteta materijala za koji se odlučite godine garancije za montažne kuće su od 80 do 120 godina."
    },
    {
        id: 6,
        question: "Kada sklopim poslovni ugovor sa vašom firmom da li je moguć prekid?",
        answer: "Prekid ugovora je moguć uz prethodno isplaćene troškove firme za posao koji je do tog trenutka obavljen."
    },
    
]

export const testimonials = [
    {
        id: 1,
        fullName: "Milan Petrović",
        quote: "Veoma sam zadovoljan poslovanjem i uslugama kompanije Gradko D.O.O. U roku od 2 meseca kompletno mi je sagrađena montažna kuća kvadrature 140 metara kvadratinih, uz potpuno ispoštovan dogovor.",
        job: "Preduzetnik",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        fullName: "Dragan Milanović",
        quote: "Renovirao sam pomoćni objekat u svom dvorištu sa kompanijom Gradko, dogovor je bio u potpunosti ispoštovan, kao i spomenuti rokovi, sve je besprekorno urađeno.",
        job: "Advokat",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        fullName: "Petar Jovanović",
        quote: "Odlučio sam se na izgradnju kompletne stambene zgrade sa ovom kompanijom, radilo se o ukupno 5 spratova sa po 4 stana veće kvadrature, sve ispoštovano, osim mene zadovoljni su i stanari",
        job: "Sudija",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        fullName: "Nikola Antić",
        quote: "Zbog proširanja posla, morao sam da sagradim halu za skladištenje mašina, odlučio sam se za tip hale bez nosećih stubova i mogu da vam kažem da je zadovoljstvo poslovati sa ovom kompanijom, svaka pohvala.",
        job: "Privrednik",
        avatar: require("./images/avatar4.jpg")
    },

    
]