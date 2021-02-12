import React from 'react';
import Select, {components} from 'react-select';
import {Box, Flex, Image, Text} from 'rebass';
import data from '../Data/AccountData.json';
import img from '../Assets/Dropdown/green-tick.png';

const style= {
    option: (styles, props, state) => {
        return {
          ...styles,
          backgroundColor: props.isSelected ? "white" : null,
          color: "black"
        };
      },

    input: (styles)=> {
      return{
       ...styles,
       height: "70px"
     }
   }   
}

const Option = (props, state) => {
    return (
      <div>
        <components.Option {...props}>
            <Flex justifyContent= "space-between">
                {/* <label>{props.label}</label>  */}
                <label>{props.value}</label>
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
    return {
      value: 
        <Text>{account.sortCode} {account.accountNumber} {account.accountType} - {account.accountName}</Text>, 
      label: <Flex flexDirection="column">
              <Flex flexDirection= "row">
                <Text>{account.sortCode}</Text>
                <Text mx={3}>{account.accountNumber}</Text>
              </Flex>
                <Text>{account.accountType} - {account.accountName}</Text>      
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