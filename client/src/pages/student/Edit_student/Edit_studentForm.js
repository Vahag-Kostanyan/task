import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit_student, get_student } from '../../../actions/studentAction';
import { Box, FormControl, FormLabel, Input, Text, Button, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { useParams } from 'react-router-dom';


const VARIANT_COLOR = "teal"


const Edit_studentForm = ({ colorMode }) => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [date_of_birth, setDate_of_birthe] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [favorite_sport, setFavorite_sport] = useState("");
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("")
    const params = useParams()

    const dispatch = useDispatch();
    const id = params.studentId


    const GETstudent = async () => {
        const student = await dispatch(get_student(id));

        setFirst_name(student.data.first_name)
        setLast_name(student.data.last_name)
        setDate_of_birthe(student.data.date_of_birth)
        setEmail(student.data.email)
        setPhone(student.data.phone)
        setFavorite_sport(student.data.favorite_sport)
    }

    useEffect(() => {
        GETstudent();
    }, [])



    const EditStudentHandeler = async (e) => {
        e.preventDefault();

        const data = await dispatch(edit_student({ first_name, last_name, date_of_birth, email, phone, favorite_sport,id }));

        if(data.status == "ok"){
            setSuccess(data.success)
            setErrors({})
            setFirst_name(data.student.first_name)
        }else{
            setErrors(data.data)
            setSuccess("")
        }

    }

    return (
        <Box my={1} textAlign="left" >
            {success !== ""?(
                <Text align="center" color={VARIANT_COLOR} fontSize="2xl" >{success}</Text>
            ):(
                <></>
            )}
            <form autoComplete='off'>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input value={first_name} type="txet" placeholder='enter name'
                        onChange={e => setFirst_name(e.target.value)}
                    />
                </FormControl>
                <FormControl mt={1}>
                    <FormLabel>Surname</FormLabel>
                    <Input type="txet" placeholder='enter Surname' value={last_name}
                        onChange={e => setLast_name(e.target.value)} />
                </FormControl>
                <FormControl mt={1}>
                    <FormLabel>Date of Birth</FormLabel>

                    <Input type="date" placeholder='enter Date of Birth' value={date_of_birth}
                        onChange={e => setDate_of_birthe(e.target.value)} />
                </FormControl>
                <FormControl mt={1}>
                    <FormLabel>Email Adress</FormLabel>
                    <Input type="email" placeholder='enter Email Adress' value={email}
                        onChange={e => setEmail(e.target.value)} />
                </FormControl>
                <FormControl mt={1}>
                    <FormLabel for="phonInput">Phone Number</FormLabel>

                        <InputGroup>
                            <InputLeftAddon children='+374' />
                            <Input type='number'  placeholder='phone number'
                                 value={phone}
                                onChange={e => setPhone(e.target.value)} 
                                />
                        </InputGroup>

                </FormControl>
                <FormControl mt={1}>
                    <FormLabel>Favorite sports</FormLabel>
                    <Input type="txet" placeholder='enter Favorite sports' value={favorite_sport}
                        onChange={e => setFavorite_sport(e.target.value)} />
                </FormControl>

                <Button
                    disabled={!(first_name.length >= 2 && last_name.length >= 2 && date_of_birth && phone.length == 8 && favorite_sport.length >= 2 && email.includes("@") && email.includes("."))}
                    onClick={EditStudentHandeler} colorScheme={VARIANT_COLOR} width="full" mt="4">Edit Student</Button>
            </form>

            <Box mt={4} align="center" color="red">
                {Object.keys(errors).length >= 1 ? (
                    <>
                        <div style={{ color: "red" }}>
                            <Text>{errors.email && errors.email[0]}</Text>
                            <Text>{errors.phone && errors.phone[0]}</Text>
                            <Text>{errors.first_name && errors.first_name[0]}</Text>
                            <Text>{errors.last_name && errors.last_name[0]}</Text>
                            <Text>{errors.date_of_birth && errors.date_of_birth[0]}</Text>
                            <Text>{errors.favorite_sport && errors.favorite_sport[0]}</Text>
                        </div>
                    </>
                ) : (
                    <>
                    </>
                )}

            </Box>
        </Box>
    )
}


export default Edit_studentForm;
