import React, { useState } from 'react';
import Select, {components} from 'react-select';
import {Box, Flex, Image, Text} from 'rebass';
import data from '../Data/AccountData.json';
import img from '../Assets/Dropdown/green-tick.png';

const style= {
    option: (styles, props) => {
        return {
          ...styles,
          backgroundColor: props.isSelected ? "white" : null,
          color: "black"
        };
      }
}

const Option = props => {
    return (
      <div>
        <components.Option {...props}>
            <Flex justifyContent= "space-between">
                <label>{props.label}</label>
                {props.isSelected && <Image
                    src={img}
                    sx={{
                        width: [ '100%', '2%' ],
                        height: ['50%'],
                        paddingTop: "2"
                    }}
                    />
                }
            </Flex>
        </components.Option>
      </div>
    );
  };

const options= data.map(account=>{
    return {value: {account}, 
        label: <Flex flexDirection= "row">
                <Text mx={1}>{account.sortCode}</Text>
                <Text mx={1}>{account.accountNumber}</Text>
                <Text mx={1}>{account.accountType}</Text>
                <Text mx={1}>{account.accountName}</Text>
        </Flex>
    }
})

const DropDown= ()=> {
    return (
        <Box
        p={5}
        m= {"auto"}
        fontSize={3}
        width={[ 1/2 ]}
        height={[150]}
        >
            <Select 
            components={{ Option }}
            options = {options} 
            styles={style}
            />
        </Box>
      );
}

export default DropDown;