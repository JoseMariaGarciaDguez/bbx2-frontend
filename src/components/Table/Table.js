import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import axios from "axios";
import {DataGrid} from '@material-ui/data-grid';
import updateItemList from '../../store/item/action';
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import ItemDetailsDialog from './ItemDetailsDialog';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import detailAdd from '../../store/itemDetails/action';

export default function Dashboard() {
  
  const dispatch = useDispatch();
  const state = useSelector(state => state.itemReducer.items);
  const [open, setOpen] = useState()
  const [itemSelected, setItemSelected] = useState({});

  const rowClick = (params) => {
    dispatch(detailAdd(params.row));
    setItemSelected(params.row)
    setOpen(true);
  }
  const deleteItem = (params) =>{
    dispatch(updateItemList(state.filter (e=> e.id !== params.row.id)))
  }
  
  const getRowsAxios = async () => { return axios({
      method: 'get',
      url: 'http://localhost:8080/api/item/allitems',  
      /*headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }*/
    }).then((response) => {
      var data = response.data;
      dispatch(updateItemList((data.map( (e) =>({
          id: e.idItem,
          description: e.description,
          itemCode: e.itemCode,
          price: e.price,
          state: e.state,
          creationDate: Moment(e.creationDate).format('MM-DD-YYYY'),
          createdBy: e.createdBy,
          supplier: e.supplier,
          priceReduction: e.priceReduction

      })))))
    })
  }
  useEffect(() => {
    getRowsAxios();
    
  }, []);

  
const columns = [
  {field: 'id', headerName: 'ID', width: 50 },
  {field: 'description', headerName: 'Description', width: 200 },
  {field: 'price', headerName: 'Price', width: 130 },
  {field: 'state', headerName: 'State', width:200},
  {field: 'creationDate', headerName: 'Creation Date', type:'date', width: 180},
  {field: 'createdBy', headerName: 'Created By', width: 190 },
  {field:'actions', headerName: 'Acions', label: ' ',
    renderCell: (params) => {
          return (
            <>
            <IconButton aria-label="Edit" size="small" onClick={(e)=>rowClick(params)}>
            <EditIcon  />
          </IconButton>
          <IconButton aria-label="Edit" size="small" onClick={(e)=>deleteItem(params)}>
          <DeleteIcon  />
        </IconButton>
        </>
            );
      }
  },
   
];

  return (
  
    <div style={{ height: 400, width: '100%' }}>
    <h1>Item List:</h1>
    <DataGrid rows={state} columns={columns} pageSize={5} /*onRowClick=/*{(e)=>{getItemAxios(e.row.id)}}*//>
    <ItemDetailsDialog openState={open} setOpenState={setOpen} /*itemSelected={itemSelected} setItemSelected={setItemSelected}*/  />
  </div>

  );
}