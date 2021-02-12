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
          color: "black",
          fontSize: ".8rem"
        };
      },

    input: (styles)=> {
      return{
       ...styles,
       height: "60px"
     }
   },
   
    placeholder: (styles)=>{
      return{
        ...styles,
        fontSize: "1rem"
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
                        width: [ '3%', '3%' ],
                        height: ['20%','80%'],
                        paddingTop: ['3/2', '3/2']
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
      label: <Flex flexDirection="column" style={{fontSize: ".8rem"}}>
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
        width={['100%', 1/3 ]}
        >
            <Select 
            components={{ Option }}
            options = {options} 
            styles={style}
            placeholder= {"Select Your Account..."}
            />
        </Box>
      );
}

export default DropDown;