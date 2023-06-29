import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemCarrossel from "./CarrosselItem";
import bonecos from '../../../../public/Imagens/Bonecos.png';
import cebolinha from '../../../../public/Imagens/personagem.png';
import boneco from '../../../../public/Imagens/boneco.png';
import ovelha from '../../../../public/Imagens/ovelha.png';
import retrato from '../../../../public/Imagens/PortaRetrato.png';

interface deviceProps {
  deviceType?: string;
}

export default function Carrossel(props: deviceProps) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      className: String,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }; 
  
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .8"
      transitionDuration={2500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className={`flex h-96 w-2/3`}
    >      
      <ItemCarrossel
        className="flex"
        imagem={bonecos}
        descricao={"Cabelos Cacheados"}
      /> 

      <ItemCarrossel
        className="flex"
        imagem={cebolinha}
        descricao={"Cebolinha e Floquinho"}
      />

      <ItemCarrossel
        className="flex"
        imagem={boneco}
        descricao={"Anne com 'E'"}
      />

      <ItemCarrossel
        className="flex"
        imagem={retrato}
        descricao={"Porta Retrato Safári"}
      />

      <ItemCarrossel
        className="flex"
        imagem={ovelha}
        descricao={"Ovelha em Carapinha"}
      />
    </Carousel>
  );
}
