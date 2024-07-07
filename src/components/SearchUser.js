import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SearchUser = () => {
  const [showUser, setShowUser] = useState([]);
  const [searchkey, setSearchkey] = useState("");
  // const [cache, setCache] = useState({});

  useEffect(() => {
    let timer = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(timer);
    //// eslint-disable-next-line //t0 ifnore the warning
  }, [searchkey]);

  const handleSearch = async () => {
    // if(cache[searchkey]){
    //     setShowUser(cache[searchkey]);
    //     return;
    // }else{

    const gotData = await axios.get(
      `http://localhost:4000/users/search/findall?searchkey=${searchkey}`
    );
    setShowUser(gotData.data);
    //   cache[searchkey]= gotData.data;
    console.log(gotData.data);
    // }
  };
  return (

    
    <div>

<Container>
      <Row>
        <Col>
          
      <Stack direction="horizontal" gap={3}>
    <Form.Control className="me-auto" placeholder="Add your item here..." />
    {/* <Button variant="secondary">Submit</Button>
    <div className="vr" />
    <Button variant="outline-danger">Reset</Button> */}
  </Stack>
        </Col>
        <Col></Col>
      </Row>
    </Container> 

      <form>
        <label>Search User</label>
        <input
          type="text"
          placeholder="Enter here!"
          onChange={(e) => setSearchkey(e.target.value)}
        ></input>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {showUser.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SearchUser;
