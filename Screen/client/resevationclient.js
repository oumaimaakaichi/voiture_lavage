





import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, SafeAreaView, Image, TextInput, TouchableOpacity  , Dimensions} from 'react-native';
import { DataTable } from 'react-native-paper';



const { width: WIDTH } = Dimensions.get('window')

export default function Reservationclient({ route, navigation }) {
    const { itemId, getReservations} = route.params;
    useEffect(() => {
        console.warn(itemId, getReservations.marque_vehicule)
        console.warn(getReservations._id)
    }, [])

    const[reservation , setReservation]=useState('')
    useEffect(async () => {
      
        if (getReservations) {
            setReservation(getReservations)
        }
    }, []);





    
    return (

        <SafeAreaView >
            <ScrollView >
                <Text style={{color:'#4A919E' , fontWeight:'bold' , fontSize:19 , alignSelf:'center' ,marginTop:30 , fontStyle:'italic'}}>Informations de la réservation</Text>
                
            <View style={styles.container}>
    <DataTable>
    <DataTable.Header>
    <DataTable.Cell style={{fontSize:20}}>Nom client</DataTable.Cell>
        <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.Nom_client}</DataTable.Title>
  
        
         
         </DataTable.Header>

         <DataTable.Header>
    <DataTable.Cell style={{fontSize:20}}>Prenom client</DataTable.Cell>
        <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.Prenom_client}</DataTable.Title>
  
        
         
         </DataTable.Header>

      {/*<DataTable.Row>
        <DataTable.Cell>Numéro du téléphone</DataTable.Cell>
        <DataTable.Cell>{reservation.Num_Client}</DataTable.Cell>
       
    </DataTable.Row>*/}



        
<DataTable.Header>
    <DataTable.Cell style={{fontSize:20}}>Marque véhicule</DataTable.Cell>
        <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.marque_vehicule}</DataTable.Title>
  
        
         
         </DataTable.Header>
         <DataTable.Header>
    <DataTable.Cell style={{fontSize:20}}>Nature véhicule</DataTable.Cell>
        <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.Nature_vehicule}</DataTable.Title>
  
        
         
         </DataTable.Header>
      <DataTable.Header>
        <DataTable.Cell>Date</DataTable.Cell>
        <DataTable.Title style={{width:WIDTH/2 , marginLeft:40}}>{reservation.date_heure}</DataTable.Title>
      
      </DataTable.Header>

    </DataTable>
  </View>
               
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
      
      },
   
   f:{
      fontStyle:'italic',
      color:'red'
   }
  
   
});