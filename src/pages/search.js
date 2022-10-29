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

export const Index = () => {
  let navigate = useNavigate();

  return (
    <div style={{ backgroundImage: `url(${Background}) `, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} >
      
    <View theme={MAIN_PAGE} banner={''} className="text-center" >

    <Container fluid  style={{padding: '40px'}}>
<Row className="m-auto align-self-center">
    <Card border="dark" 
    
    
    style={{
      width: '122rem',
      height: '5rem',
      boxShadow:'0px 15px 26px rgba(0, 0, 0, 0.50)',
      
    }}
  >
    
    
    <CardBody className="align-items-center">
      <div class="d-flex bd-highlight">

      <div class="p-2 w-100 bd-highlight">
        <Input type="text" name="productName" id="productName" placeholder="Nombre del producto"/>
            </div>

            <div class="p-2 w-100 bd-highlight">
        <Input type="date" name="productName" id="productName" />
            </div>

      <div class="p-2 flex-shrink-1 bd-highlight">
      <Button style={{
              boxShadow:'0px 7px 19px rgba(0, 0, 0, 0.40)',
              backgroundColor: '#6375b8',
              borderColor:'#6375b8'
            }}>Guardar</Button>
      </div>
      </div>
    </CardBody>
  </Card>

</Row>
 </Container>

  
    </View>

    </div>

  );

};