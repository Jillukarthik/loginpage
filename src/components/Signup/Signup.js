import React from "react";
import "./Signup.css";
import {
  Box,
  Heading,
  InputGroup,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { useSelector,useDispatch } from "react-redux";
// import { incre } from "../../feature/Name/NameSlice";
function Signup() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting ,isValid},
    getValues,
  } = useForm();

const userName=getValues("name");

  function reDirectHome() {
    return new Promise((resolve) => {
      setTimeout(() => {
        navigate("/Home",{state:{data:userName}});
        resolve();
      }, 3000);
    });
  }

  const reDirect = () => {
    navigate("/Login");
  };


  return (
    <Box className="signup">
      <Box className="signup__imagelogo">
        <Image
          src="	https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg"
          className="signup__image"
        />
      </Box>
      <Box className="signup__formfield">
        <Box className="signup__inputs">
          <Heading as="h1" className="signup__state">
            Create an Account 
          </Heading>
          <form onSubmit={handleSubmit(reDirectHome)} className="signup__form">
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">First name</FormLabel>
              <InputGroup className="signup__group">
                <Input
                  className="signup__inputfield"
                  id="name"
                  
                  placeholder="name"
                  {...register("name", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="name">Email</FormLabel>
              <InputGroup className="login__group">
                <Input
                
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "This is required",
                    pattern: {
                      value:
                        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                      message: "enter the valid email", 
                    },
                  })}
                />
              </InputGroup>
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <ButtonGroup className="signup__btngroup">
              <Button
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
                className="btn btn--state-submit"
              >
                Submit
              </Button>
              <Button
                colorScheme="teal"
                type="submit"
                className="btn btn--state-logindirect"
                onClick={reDirect}
              >
                Login
              </Button>
            </ButtonGroup>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
