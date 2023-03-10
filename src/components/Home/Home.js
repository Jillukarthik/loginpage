import {
  Box,
  Button,
  Heading,
  Image,
  useDisclosure,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  ButtonGroup,
} from "@chakra-ui/react";
import "./Home.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../feature/postSlice/postSlice";
import { Spinner } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import headerimg from "../../assests/headerimg.jpg";
function Home() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const location = useLocation();
  const logindata = location.state?.data;

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts());
    }, 5000);
  }, []);

  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/");
  }


  const noSpecialCharacters = logindata.replace("@gmail.com", "");
  console.log(noSpecialCharacters);

  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box className="home">
      <Box>
        <Image className="home__image" src={headerimg} />
      </Box>
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
            <PopoverHeader className="popover__confirmation">
              Confirmation
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>Are you sure you want to logout</PopoverBody>
            <PopoverFooter className="popover__footer">
              <ButtonGroup className="popover__btngroup">
                <Button variant="outline" onClick={onClose}>
                  No
                </Button>
                <Button colorScheme="red" onClick={redirectLogin}>
                  Yes
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </Box>
      <Box>
        <Heading as="h1" className="home__username">
          Welcome {noSpecialCharacters}!!!
        </Heading>
        <Box className="home__loader">{loading && <Spinner />}</Box>
        <Box className="home__data">
          <Box className="home__dataitems">
            {posts.map((items,index) => (
              <Box>
              <h1 key={items.id}>{items.title}</h1>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
