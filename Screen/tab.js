import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Tab() {
  return (
    <View style={styles.container}>
      <DataTable>
      <DataTable.Row>
          <DataTable.Cell>Nom client</DataTable.Cell>
          <DataTable.Cell></DataTable.Cell>
    
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Prenom client</DataTable.Cell>
          <DataTable.Cell></DataTable.Cell>
    
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Numéro du téléphone</DataTable.Cell>
          <DataTable.Cell></DataTable.Cell>
         
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Marque véhicule</DataTable.Cell>
          <DataTable.Cell></DataTable.Cell>
        
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});