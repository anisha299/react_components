import React, { useState } from 'react';
import Select from 'react-select';
import {Box, Flex} from 'rebass';
import data from '../Data/AccountData.json';

const style= {
    select: {
        height: "100%"
    }
}

const options= data.map(account=>{
    return {value: {account}, 
        label: <Flex flexDirection='row'>
                <Box mx={1}>{account.sortCode}</Box>
                <Box mx={1}>{account.accountNumber}</Box>
                <Box mx={1}>{account.accountType}</Box>
                <Box mx={1}>{account.accountName}</Box>
        </Flex>
    }
})

const DropDown= ()=> {

    const [selectedValue, setSelectedValue]= useState("");
    return (
        <Box
        p={5}
        m= {"auto"}
        fontSize={3}
        width={[ 1/2 ]}
        height={[150]}
        >
            <Select 
            options = {options} 
            styles={style.select}
            onChange= {(val)=> {setSelectedValue(val)}}
            />
        </Box>
      );
}

export default DropDown;