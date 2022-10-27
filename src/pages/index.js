import React, { Fragment } from 'react';
import { useNavigate  } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/Md";
import { RiComputerLine } from "react-icons/Ri";

import {
  Container, Button, CardText,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from 'reactstrap';

import {
  HeroImage,   HeroImage1,
  HeroText,
  HeroTitle,
  HeroTextButton,
  HeroDescription,
  HeroSubTitle,
  HeroParrafo1,
  HeroParrafo2,
} from './styles';

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

import { View } from './../components/page/view/view';
import { LOGIN_PAGE } from './../utils/colors';
import { Announcement } from './../components/page/announcement/announcement';
import { SlideShow } from './../components/page/slideshow/slideshow';

import Linlogo from './../res/Linventario_icon.png';
import LinlogoS from './../res/Linventario_iconMin.png';



/*  export const Index = () => {
    return (
      <Col className="text-center">
      <CardImg alt="Linv logo" src={Linlogo} style={{width: 400, height: 125, padding: '40px'}} width="100%"/>
      </Col>
    );
  };*/





export const Index = () => {
  let navigate = useNavigate();

  return (

    <View theme={LOGIN_PAGE} banner={'announcement'} className="text-center">

      <Col className="text-center">
      </Col>

      <Container fluid className="h-100 m-3" >

        <Row className='flex-grow-1 justify-content-center h-100"' >
        <HeroImage>
          <HeroTitle className="">TU INVENTARIO EN LÍNEA</HeroTitle>
          <HeroSubTitle className="">MANTÉN TU INVENTARIO EN ORDEN</HeroSubTitle>
          <HeroDescription className="">Con LINVENTARIO podrás administrar todos tu inventarios y activos desde cualquier lugar, ya sea en la oficina, lugar de trabajo o en el parque por medio de nuestra página web.</HeroDescription>
        </HeroImage>

        <HeroParrafo1>LINVENTARIO ES LA NUEVA FORMA DE ADMINISTRAR TUS ACTIVOS EN LA CASA O TRABAJO</HeroParrafo1>
        <HeroParrafo2>LINVENTARIO es una nueva plataforma que te permite administrar tus inventarios y activos a través de Internet, de forma rápida, sencilla y confiable.</HeroParrafo2>
          <Col sm="4" className="text-center">
            <FiUser style={{color: 'blue', fontSize: '50px', display: 'inline'}} />
              <CardTitle tag="h5">
              PROVEEDORES
              </CardTitle>
              <CardText>
              Registra y administra a tus proveedores de activos. Posteriormente podrás consultar sus datos así como registrar los activos comprados a cada uno.
              </CardText>
          </Col>
          <Col sm="4" className="text-center">
            <MdOutlineCategory style={{color: 'blue', fontSize: '50px', display: 'inline'}} />
              <CardTitle tag="h5">
              CATEGORÍAS
              </CardTitle>
              <CardText>
              Registra todas las categorías necesarias para la administración personalizada de tu inventario de activos. Son 100% ilimitadas y se adaptan a tus necesidades.
              </CardText>
          </Col>
          <Col sm="4" className="text-center">
            <RiComputerLine style={{color: 'blue', fontSize: '50px', display: 'inline'}} />
              <CardTitle tag="h5">
              ACTIVOS
              </CardTitle>
              <CardText>
              Registro, edición y administración general de tu inventario de activos en línea. Activos de Hardware, Software y Genéricos adaptados a tus procesos.
              </CardText>
          </Col>

        <HeroImage1></HeroImage1>

        <HeroParrafo1>CARACTERÍSTICAS</HeroParrafo1>


        <Col sm="4" className="text-center">
          <RiComputerLine style={{color: 'blue', fontSize: '50px', display: 'inline', marginTop:'0px'}} />
          <CardTitle tag="h5">Disponible 24/7.</CardTitle>
          <RiComputerLine style={{color: 'blue', fontSize: '50px', display: 'inline',marginTop:'10px'}} />
          <CardTitle tag="h5">Adaptable.</CardTitle>
          <RiComputerLine style={{color: 'blue', fontSize: '50px', display: 'inline',marginTop:'10px'}} />
          <CardTitle tag="h5">Universal.</CardTitle>
          <RiComputerLine style={{color: 'blue', fontSize: '50px', display: 'inline',marginTop:'10px'}} />
          <CardTitle tag="h5">Confiable.</CardTitle>
        </Col>
        <Col sm="4" className="text-center">
        <CardImg alt="Linv logo" src={LinlogoS} style={{width:350,height: 300}} width="100%"/>
        </Col>
        <Col sm="4" className="text-center">
          <RiComputerLine style={{color: 'blue', fontSize: '50px', display: 'inline', marginTop:'0px'}} />
          <CardTitle tag="h5">Fácil De Usar. </CardTitle>
          <RiComputerLine style={{color: 'blue', fontSize: '50px', display: 'inline', marginTop:'10px'}} />
          <CardTitle tag="h5">Eficiente.</CardTitle>
          <RiComputerLine style={{color: 'blue', fontSize: '50px', display: 'inline', marginTop:'10px'}} />
          <CardTitle tag="h5">Rápido.</CardTitle>
          <RiComputerLine style={{color: 'blue', fontSize: '50px', display: 'inline', marginTop:'10px'}} />
          <CardTitle tag="h5">Y Mucho Más.</CardTitle>
        </Col>



        </Row>
      </Container>

    </View>





  );
};

