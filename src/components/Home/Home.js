import {
  Box,
  Button,
  Heading,
  Image,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  ButtonGroup,
} from "@chakra-ui/react";
import "./Home.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../feature/postSlice/postSlice";
import { Spinner } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
function Home() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const location = useLocation();
  const logindata = location.state?.data;

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts());
    }, 2000);
  }, []);

  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/");
  };

  const noSpecialCharacters = logindata.replace("@gmail.com", "");
  console.log(noSpecialCharacters);

  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box className="home">
      <Box>
        <Image
          className="home__image"
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        />
      </Box>
      <Box className="home__loader">{loading && <Spinner />}</Box>
      <Box>
        <Button className="btn btn--state-logout" onClick={onToggle}>
          logout
        </Button>
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverContent className="btn btn--state-popover">
            <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure you want to continue with your action?
            </PopoverBody>
            <PopoverFooter display="flex" justifyContent="flex-end">
              <ButtonGroup size="sm">
                <Button variant="outline" onClick={onClose}>Cancel</Button>
                <Button colorScheme="red" onClick={redirectLogin}>Apply</Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Box>
      <Box>
        <Heading as="h1" className="home__username">
          Welcome   {noSpecialCharacters}!!!
        </Heading>
        <Box className="home__data">
          <Box className="home__dataitems">
            {posts.map((items) => (
              <h1 key={items.id}>{items.title}</h1>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
