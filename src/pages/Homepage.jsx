import { EditIcon, DeleteIcon } from "@chakra-ui/icons"
import { 
  Box, 
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Image,
  Stack,
  ButtonGroup,
  Container
} from "@chakra-ui/react"
import { Link, useLoaderData } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Dashboard() {
  const tasks = useLoaderData()

  const phoneNumber = '255764940382'; // replace with your WhatsApp phone number
  const message = `Hello, Naihitaji hii bidhaa: `; // replace with your message

  const whatsappUrl = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;


  return (
     <Container as='section'maxWidth="5xl" py={30}>
       <Navbar />

       <Heading>Recent added products</Heading>

       <SimpleGrid spacing={5}  minChildWidth={300}>
      {tasks && tasks.map(task => (
        <Card key={task.id}  bg="white">

          <CardBody color="gray.500">
            <Image
              src={task.image_url}
              alt={task.title}
              borderRadius='lg'
            />
            
           <Stack mt='6' spacing='3'>
             <Heading size='md'>{task.title}</Heading>
             <Text>
               {task.description}
             </Text>
             <Text color='blue.600' fontSize='2xl'>
               ${task.price}
             </Text>
           </Stack>
         </CardBody>
         <Divider />
         <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='purple'>
              <a href={whatsappUrl + task.title}>Order Now</a>
            </Button>
           <Button variant='ghost' colorScheme='blue'>
            Add to cart
           </Button>
         </ButtonGroup>
        </CardFooter>

        </Card>
      ))}
    </SimpleGrid>
     </Container>
  )
}

export const tasksLoader = async () => {
  const res = await fetch('http://127.0.0.1:8000/api/product-list/')

  return res.json()
}