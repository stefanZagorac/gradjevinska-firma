import Header from "../../components/Header"
import GalleryHeaderImage from "../../images/header-image-gallery.jpg"
import { useEffect, useState } from "react";
import {GrClose} from "react-icons/gr"
import "./gallery.css"

export default function Gallery(){
    const length = 6;
    const houseArr = [];
    const buildingArr = [];
    const halaArr = [];
    const garageArr = [];

    for(let i=1; i<=length; i++){
        houseArr.push({
            id: i,
            path: require(`../../images/kuca${i}.jpg`)
        });
        buildingArr.push({
            id: i+10,
            path: require(`../../images/zgrada${i}.jpg`)
        });
        halaArr.push({
            id: i+20,
            path: require(`../../images/hala${i}.jpg`)
        });
        garageArr.push({
            id: i+30,
            path: require(`../../images/garaza${i}.jpg`)
        });
    }

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");


    function handleHouseImg(path){
        setTempImgSrc(path);
        setModel(true)
    }


    
    return (
        <>
            <Header title="Naši radovi" image={GalleryHeaderImage} children="Samo neki od naših mnogobrojnih radova."/>
            <section id="house__images" className="gallery__section">
                
                <div className="container gallery__container">
                <h2>Kuće</h2>
                <div className={model ? "model open" : "model"}>
                    <img src={tempImgSrc} alt="Not Found"></img>
                    <GrClose onClick={() => setModel(false)}/>
                </div>
                <div className="gallery__wrapper">
                {
                    houseArr.map((item, index) => {
                        return <article key={index} onClick={() => handleHouseImg(item.path)}>
                            <img src={item.path} alt={`Slika kuće ${index+1}`} />
                            </article>
                    })
                }
                </div>
                </div>
            </section>



            <section id="building__images" className="gallery__section">
                
                <div className="container gallery__container">
                    <hr />
                <h2>Zgrade</h2>
                <div className="gallery__wrapper">
                {
                    buildingArr.map((item, index) => {
                        return <article key={index} onClick={() => handleHouseImg(item.path)}>
                            <img src={item.path} alt={`Slika zgrade ${index+1}`} />
                            </article>
                    })
                }
                </div>
                </div>
            </section>


            <section id="hale__images" className="gallery__section">
                
                <div className="container gallery__container">
                    <hr />
                <h2>Hale</h2>
                <div className="gallery__wrapper">
                {
                    halaArr.map((item, index) => {
                        return <article key={index} onClick={() => handleHouseImg(item.path)}>
                            <img src={item.path} alt={`Slika hale ${index+1}`} />
                            </article>
                    })
                }
                </div>
                </div>
            </section>

            <section id="garage__images" className="gallery__section">
                
                <div className="container gallery__container">
                    <hr />
                <h2>Ostali objekti</h2>
                <div className="gallery__wrapper">
                {
                    garageArr.map((item, index) => {
                        return <article key={index} onClick={() => handleHouseImg(item.path)}>
                            <img src={item.path} alt={`Slika hale ${index+1}`} />
                            </article>
                    })
                }
                </div>
                </div>
            </section>
        </>
    )
}
