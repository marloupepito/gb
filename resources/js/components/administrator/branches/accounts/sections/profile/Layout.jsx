import React, { useState, useEffect } from 'react';
import AccountCard from './components/Card';

import banner from "./../../../../../assets/img/auth/auth.png";
import avatar from "./../../../../../assets/img/avatars/avatar4.png";
function AccountSectionLayout() {
    return ( 
        <>
        <AccountCard 
                   gridArea='1 / 1 / 2 / 2'
                   banner={banner}
                   avatar={avatar}
                   name='Adela Parkson'
                   job='Product Designer'
                   posts='17'
                   followers='9.7k'
                   following='274'
                   />
        </>
     );
}

export default AccountSectionLayout;