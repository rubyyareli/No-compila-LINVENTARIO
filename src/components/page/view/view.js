import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Header } from '../header/header';
import { Content } from '../content';
import { Footer } from '../footer';
import { Announcement } from '../announcement/announcement';
import { SlideShow } from '../slideshow/slideshow';
import { LOGIN_PAGE } from './../../../utils/colors';
import { NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const navbaritems = [
  {
    text: 'Inicio',
    link: 'index',
  },
  {
    text: 'Acerca',
    link: 'www.google.com',
  },
  {
    text: 'Características',
    link: 'www.google.com',
  },
  {
    text: 'Web',
    link: 'www.google.com',
  },
  {
    text: 'Precio',
    link: 'www.google.com',
  },
  {
    text: 'Contacto',
    link: 'www.google.com',
  },
  {
    text: 'Ingresar',
    link: 'www.google.com',
  },
  {
  },
];

const footeritems = [
  {
    text: 'Derechos reservados @ 2022 Equipo No compila'

  }
];

export const View = (props) => {
  return (
    <Container fluid>
      <Row >
        <Header tag={RRNavLink} to={navbaritems.link} theme={props.theme} items={navbaritems}></Header>
        <NavLink tag={RRNavLink} to="/">Inicio</NavLink>
        <NavLink tag={RRNavLink} to="/register">Registrarse</NavLink>
        <NavLink tag={RRNavLink} to="/login">Iniciar sesión</NavLink>
        <NavLink tag={RRNavLink} to="/newProduct">Producto</NavLink>
        <NavLink tag={RRNavLink} to="/newTransaction">Transaccion</NavLink>
      </Row>


          {props.banner == 'slideshow' ? (
            <SlideShow
              slides={[
                {
                  number: 0,
                  img: 'https://i.pinimg.com/originals/c6/20/4d/c6204dfdc2fc3a5e421fbd955dad5809.jpg',
                  text: 'Texto1',
                },
                {
                  number: 1,
                  img: 'https://i.pinimg.com/originals/c6/20/4d/c6204dfdc2fc3a5e421fbd955dad5809.jpg',
                  text: 'Texto2',
                },
                {
                  number: 2,
                  img: 'https://i.pinimg.com/originals/c6/20/4d/c6204dfdc2fc3a5e421fbd955dad5809.jpg',
                  text: 'Texto3',
                },
              ]}
            ></SlideShow>
          ) : props.banner == 'announcement' ? (
            <Announcement></Announcement>
          ) : (
            <div></div>
          )}
          <Content>{props.children}</Content>


      <Footer theme={props.theme} items={footeritems}></Footer>
    </Container>
  );
};
