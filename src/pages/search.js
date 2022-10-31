import React, { Fragment } from 'react';
import { useNavigate  } from "react-router-dom";
import Linlogo from './../res/Linventario_icon.png';
import Background from './../res/blank.png';


import { Container, 
  CardText, 
  Col, 
  Button, 
  Row, 
  CardTitle, 
  CardSubtitle,
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Card, 
  CardHeader, 
  CardBody,
  CardImg, 
  FormText } from 'reactstrap';


import { View } from './../components/page/view/view';
import { MAIN_PAGE } from './../utils/colors';

export const Search = () => {
  let navigate = useNavigate();

  return (
    <div  >
      
    <View theme={MAIN_PAGE} banner={''} className="text-center" >

    <Container fluid  style={{padding: '40px'}}>
<Row className="m-auto align-self-center" style={{padding: '40px'}}>


    <Card border="dark" 
    
    style={{
      width: '122rem',
      height: '5rem',
      boxShadow:'0px 15px 26px rgba(0, 0, 0, 0.50)'
    }}
  >
    <CardBody className="align-items-center">
      <div class="d-flex bd-highlight">

      <div class="p-2 w-100 bd-highlight">
        <Input type="text" name="productName" id="productName" placeholder="Nombre del producto"/>
            </div>

            <div class="p-2 w-100 bd-highlight">
        <Input type="date" name="prodDate" id="prodDate" />
            </div>

      <div class="p-2 flex-shrink-1 bd-highlight">
      <Button style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Buscar</Button>
      </div>
      </div>
    </CardBody>
  </Card>


<div className="align-items-center" style={{fontFamily:'Cochin', paddingTop:'20px'}}>
  <Row className="text-center">
            <h1 className="text-center">Resultados</h1>
            </Row>

            
</div>

<div style={{ paddingBottom:'20px'}}>
            <hr></hr>
            </div>

            <div style={{paddingLeft: '5px', alignItems:'left'}}>
  <Card border="dark" className="align-items-center"
    
    
    style={{
      width: '25rem',
      height: '32rem',
      boxShadow:'0px 15px 26px rgba(0, 0, 0, 0.50)'
    }}
  >
    <img
    style={{
      width: '20rem',
      height: '20rem'
      
    }}
    alt="Sample"
    src="https://assets.sams.com.mx/image/upload/f_auto,q_auto:eco,w_350,c_scale,dpr_auto/mx/images/product-images/img_medium/980028912m.jpg"
  />

<CardTitle tag="h5">
      All in One PC
    </CardTitle>

    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Ryzen 5 AMD Radeon Graphics marca HP
    </CardSubtitle>

    <CardText>
      50$
    </CardText>
    
    <CardBody className="align-items-center">

    <Button style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Comprar</Button>
    </CardBody>

  </Card>
  
 
</div>
</Row>
 </Container>

  
    </View>

    </div>

  );

};