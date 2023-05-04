import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
export  function BranchBreadAPI() {
    try {
       const data = axios.get('/api/get_all_bread')
          return { data };
    } catch (error) {
        
    }
}

