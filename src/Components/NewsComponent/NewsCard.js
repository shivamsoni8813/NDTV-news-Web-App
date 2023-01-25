import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

function NewsCard(props) {
  // destructuring Data from props

  let { image, title, description, url, src, publish,author } = props;  
  return (
    <div>
      <Card style={{ width: "16rem" }}>      {/* Card using React Bootstrap */}
        <span
          style={{ zIndex: "1", left: "70%" }}
          className="d-flex position-absolute top-0 start-100 translate-middle badge rounded-pill "
        >
          <Badge style={{ marginTop: "1rem" }} bg="dark">
            {src}
          </Badge>
        </span>
        <Card.Img
          variant="top"
          src={
            image
              ? image
              : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg    "
          }
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>  
           <Card.Text>{description}</Card.Text>
          <p className="fs-6">Author : {author?author:"unknown"}</p>  {/* Normal Bootstrap */}
          <p className="fs-6">{publish}</p>
          <Button variant="dark"> 
            <a href={url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsCard;
