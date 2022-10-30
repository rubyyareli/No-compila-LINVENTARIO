import React from 'react';
import { useNavigate  } from "react-router-dom";
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { View } from './../components/page/view/view';
import { MAIN_PAGE } from './../utils/colors';
import 'fontsource-roboto'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CategoryIcon from '@mui/icons-material/Category';
import { withTheme } from 'styled-components';
import CardsHeader  from "../components/dashboard/cardsHeader"

const useStyles = makeStyles(()=>({
  root:{
    flexGrow:1
  },
  iconos:{
    color:'white'
  }
}));

export const Dashboard = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  return (
    <View theme={MAIN_PAGE} banner={''} className="text-center" >

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs ={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader icono = {<ImportExportIcon className={classes.iconos} />} titulo ="Nueva transacción" texto="" color="rgba(43, 77, 219, 1)" font="white"/>
          </Grid>

          <Grid item xs ={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono = {<AddBoxIcon className={classes.iconos} />} titulo ="Nuevo producto" texto="" color="rgba(43, 77, 219, 1)" font="white"/>

          </Grid>

          <Grid item xs ={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono = {<CategoryIcon className={classes.iconos} />} titulo ="Nueva categoria" texto="" color="rgba(43, 77, 219, 1)" font="white"/>

          </Grid>

        </Grid>
      </div>
    </View>

  );
}
