import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChackraInputProps } from "@chakra-ui/react";

interface InputProps extends ChackraInputProps{
    name:string;
    label?:string
}

export function Input ({name, label, ...rest}:InputProps){
    return(
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
              id={name}
              name={name}
              type="email"
              focusBorderColor="pink.800"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: 'gray.900' }}
              size="lg"
              {...rest}
            />
          </FormControl>
    )
}