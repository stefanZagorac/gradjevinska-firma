import "./about.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header-image.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
export default function About(){
    return (
        <div className="about">
            <Header title="O nama" image={HeaderImage}>
                Građevinska kompanija sa dugim nizom decenija spremna da vam izađe u susret.
            </Header>
            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="" />
                    </div>
                    <div className="about__section-content">
                        <h1>Naša Priča</h1>
                        <p>
                            Početkom zlatnih dvehiljaditih godina ova firma je počela da izlazi u susret najpre ljudima na teritoriji Beograda, a danas na teritoriji cele Srbije.
                        </p>
                        <p>
                            Firma se najpre bavila izgradnjom kuća, to jest zidanjem istih da bi danas gradila sve vrste građevina koje zamislite.
                        </p>
                        <p>
                            Sa ponosom možemo da kažemo da smo u svakom trenutku dostupni za vas.
                        </p>
                    </div>
                </div>
            </section>



            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Naša Vizija</h1>
                        <p>
                            Naša Firma ima za uzor sve najmodernije vrste građevina koje trenutno postoje u svetu ili koje su u fazi izdradnje, uvek težimo ka najboljem i najmodernijem.
                        </p>
                        <p>
                            Kao takvi, uvek smo spremni na sve vrste seminara i obuka, što omogućavamo našim vernim zaposlenima.
                        </p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="" />
                    </div>
                </div>
            </section>



            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="" />
                    </div>
                    <div className="about__section-content">
                        <h1>Naša Misija</h1>
                        <p>
                            Misija naše firme je da Srbija bude u koraku sa današnjim vremenom i trenutnim modernim rešenjima izgradnje stambenih i poslovnih objekata.
                        </p>
                        <p>
                            Trudimo se da pomognemo našim građanima tako što ćemo da im omogućimo najbolje rešenje u najkraćem mogućem roku.
                        </p>
                        <p>
                            Takođe naši zaposleni su uvek prioritet, jer da nije njih ništa ne bi bilo moguće, može se reći da je konačni cilj kompletan kompromis između firme, zaposlenih i građana.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}