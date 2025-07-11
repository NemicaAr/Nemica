import ConmemorativeSection from "../components/ConmemorativeSection";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import lauraImg from "../assets/images/Laura.png";
import velaImg from "../assets/images/laura2.png";
import logo from "../assets/images/icons/logo.png";
import titulonemica from "../assets/images/icons/titulonemica.png";

export default function MariaLauraFigari() {
  const texto = `Lala, o Malala, como tantos la llamaban,
fue hija, madre, abuela, amiga, compañera.
Fue arte y fue raíz.
Artista, bailarina, gran lectora, consejera,
un alma que se encendía con la música y el color.
Una mujer que no pasó por la vida: la llenó.
Tenía el don de la alegría simple,
esa que nace del amor por lo cotidiano:
el campo, los cardos, el mate compartido, 
la debilidad por el dulce leche, un buen libro policial,
una zamba bien bailada,
una feria en el barrio,
una charla sincera.
Amó con todo el cuerpo y toda el alma
a sus hijos, a sus nietos, a sus amigas,
a su gente, a su lugar.
Malala no sabía quedarse quieta:
siempre ayudando, siempre creando,
siempre pensando en cómo tender una mano.
En su barrio, todos sabían quién era.
Y la querían.
Mucho.
Brillaba arriba del escenario,
se transformaba.
Era feliz bailando y cantando folklore.
Nos enseñó a disfrutar,
a estar presentes,
a vivir con entrega.
Era sabia, dulce, fuerte y serena.
La abuela que escuchaba, aconsejaba, abrazaba.
Una abuela que sostenía en los días difíciles
y aplaudía con orgullo en los días felices.
Hoy su ausencia duele,
pero al mismo tiempo,
su presencia se multiplica.
En los paisajes que amaba,
en la música que suena,
en cada pincelada de vida que dejó en nuestras casas,
dejando su huella.
Porque era artista,
pero sobre todo era generosa de su tiempo, de su mirada, de su corazón.
Pero una persona como Malala no se va.
Se transforma en memoria viva,
en legado, en luz.
Y desde donde esté,
seguro sigue bailando una chacarera,
pintando cielos,
y cuidándonos, como siempre.
Y cada diciembre, cuando el barrio se vista de Navidad,
su pesebre de hierro —grande, noble, suyo—
nos dará la bienvenida.
Será imposible no pensar en ella,
en sus manos creando arte con amor,
en su forma de dar, de estar, de dejar algo eterno.
Gracias, Lalá.
Por tu vida.
Por tu amor.
Por tu ejemplo.
Ahora descansá en las manos de Jesús.`;

  return (
    <div className="bg-gris min-h-screen flex flex-col">
      <NavBar  imgSrc={logo} title={titulonemica}  />
      <main className="flex-grow">
        <ConmemorativeSection
          h1="María Laura Figari"
          birthDate="18/12/1947"
          deathDate="13/05/2025"
          mainImage={lauraImg}
          text={texto}
          secondaryImage={velaImg}
        />
      </main>
      <Footer />
    </div>
  );
}
