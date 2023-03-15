import { 
  Box, 
  FormControl, 
  FormLabel, 
  FormHelperText, 
  Input, 
  Textarea, 
  Button, 
  Checkbox 
} from '@chakra-ui/react'
import { Form, redirect } from 'react-router-dom'

export default function Create() {

  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Product title:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText fontSize={13}>Should be less than 6 words.</FormHelperText>
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Image url:</FormLabel>
          <Input type="text" name="image_url" />
          <FormHelperText fontSize={13}>Image url should be valid.</FormHelperText>
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Price:</FormLabel>
          <Input type="text" name="price" />
          <FormHelperText fontSize={13}>Enter the price in Tsh.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Product description:</FormLabel>
          <Textarea 
            placeholder="Enter a detailed description for your product..." 
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox 
            name="isPriority" 
            colorScheme="purple"
            size="lg"
          />
          <FormLabel mb="0" ml="10px">Make a priority task</FormLabel>
        </FormControl>

        <Button type="submit">submit</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const product = {
    title: data.get('title'),
    image_url: data.get('image_url'),
    price: data.get('price'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }

  console.log(product)

  return redirect('/')
}

