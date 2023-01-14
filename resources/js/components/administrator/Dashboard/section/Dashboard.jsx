import React, { useState, useEffect } from 'react';
import DashboardTable from './components/Table'
import DashboardModal from './components/Modal'

function DashboardSection() {
    return ( 
        <div className="row">
            <div className="col-md-3 mb-3">
                <DashboardModal />
            </div>
            <div className="col-md-12">
             <DashboardTable />
            </div>
        </div>
     );
}

export default DashboardSection;