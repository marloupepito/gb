import React, { useState, useEffect } from 'react';
import RawMaterialsTable from './components/Table';
import Card from '../../components/card';
function RawMaterialsLayout() {
    return ( 
        <Card className="mt-4">
          <RawMaterialsTable />
        </Card>
     );
}

export default RawMaterialsLayout;