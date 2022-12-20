import React, { useState, useEffect } from 'react';
import { Card, Col, Row,Button } from 'antd';
import IngredientsModal from './components/Modal';
import IngredientsAutocomplete from './components/Autocomplete';
import { get_branch_ingredients } from '../../api/Ingredients';




function IngredientsLayout() {

    return ( 
        <div>
        <Row gutter={[16,16]}>
            <Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4}>
               <IngredientsModal />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
               <IngredientsAutocomplete data={get_branch_ingredients().props.children} />
            </Col>
        </Row>
        </div>
     );
}

export default IngredientsLayout;