import React, { Fragment } from 'react';
import { useNavigate  } from "react-router-dom";
import Linlogo from './../res/Linventario_icon.png';
import Background from './../res/rects2.png';

import { Container, 
  CardText, 
  Col, 
  Button, 
  Row, 
  CardTitle, 
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

export const newProduct = () => {
  let navigate = useNavigate();

  return (
    <div style={{ backgroundImage: `url(${Background}) `, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} >
      
    <View theme={MAIN_PAGE} banner={''} className="text-center" >


      <Col className="text-center">
      </Col>

      <Container fluid className="d-flex vh-100" >

        <Row className="m-auto align-self-center">

          <Card border="dark" 
    
    
    style={{
      width: '69rem',
      boxShadow:'0px 15px 26px rgba(0, 0, 0, 0.50)',
      padding: '20px'
    }}
  >
    
    <CardTitle tag="h2" className="text-center" style={{fontFamily:'Cochin'}}>
              Nuevo Producto
              </CardTitle>
    
    <CardBody className="align-items-center">
      <CardText tag="h5" className="m-auto align-self-center">
      <Form className="m-auto align-self-center">
        

        <FormGroup row className="text-center">
          <Label for="productName" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Nombre del producto</Label>
          <Col sm={10} style={{padding:'5px' }}>
          <Input type="text" name="productName" id="productName" placeholder="Nombre del producto" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>
        <FormGroup row className="text-center">
          <Label for="productCode" sm={2} style={{padding:'5px',fontFamily:'Cochin' }}>Código del producto</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <Input type="text" name="productCode" id="productCode" placeholder="Código del producto" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}>
              </Input>  
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="purchasePrice"sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Precio de compra</Label>
        <Col sm={10} style={{padding:'5px' }}>
            <Input type="text" name="purchasePrice" id="purchasePrice" placeholder="Precio de compra" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="salePrice" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Precio de venta</Label>
        <Col sm={10} style={{padding:'5px' }}>
            <Input type="text" name="salePrice" id="salePrice" placeholder="Precio de venta" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="productDesc" sm={2} style={{fontFamily:'Cochin'}}>Descripcion del producto</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <Input type="textarea" name="productDesc" id="productDesc" rows="4" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
        <Label for="amount" sm={2} style={{padding:'5px', fontFamily:'Cochin' }}>Cantidad</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <Input type="text" name="amount" id="amount" placeholder="Cantidad" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="productPic" sm={2} style={{fontFamily:'Cochin'}}>Foto del producto</Label>
          <Col sm={10} style={{padding:'5px' }}>
            <Input type="file" name="productPic" id="productPic" className="w-80"
            style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>

        <FormGroup row className="text-center">
          <Label for="productExpire" sm={2} style={{fontFamily:'Cochin'}}>Fecha de expiración</Label>
          <Col sm={10} style={{padding:'5px' }}>
          <Input type="date" name="productExpire" id="productExpire" placeholder="date placeholder" className="w-80" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)'
            }}/>
          </Col>
        </FormGroup>



        <FormGroup check row className="text-center">
          <Col style={{padding:'5px' }}>
            <Button className="w-50" style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Guardar</Button>
          </Col>
        </FormGroup>
      </Form>

      </CardText>
    </CardBody>
  </Card>
        </Row>

      </Container>

    </View>

    </div>

  );

};