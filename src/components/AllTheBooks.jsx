import { Card, Container, Tab, Tabs, Col, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { useState } from 'react'


// const AllTheBooks = ({ searchQuery }) => {

//   const [selected, setSelected] = useState(false)

//   return (
//     <Row>
//       <Col md={8}>
//         <Row className="g-2 mt-3">
//           {fantasy
//             .filter((b) => b.title.toLowerCase().includes(searchQuery))
//             .map((book) => {
//               return (
//                 <Col xs={12} md={4} key={book.asin}>
//                   <SingleBook
//                     book={book}
//                     selected={selected}
//                     setSelected={setSelected}
//                   />
//                 </Col>
//               )
//             })}
//         </Row>
//       </Col>
//       <Col md={4}>
//         <CommentArea asin={selected} />
//       </Col>
//     </Row>
//   )
// }

// export default AllTheBooks




const BooksByGenre = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
}


export default function AllTheBooks({ searchQuery }) {
  const [selectedGenre, setSelectedGenre] = useState('fantasy');
  const [selected, setSelected] = useState(false)

  const books = BooksByGenre[selectedGenre];

  const booksByQuery = (book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <>
      <Container>
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="my-3"
          justify
          onSelect={(genre) => setSelectedGenre(genre)}
        >
          {Object.keys(BooksByGenre).map((genre) => (
            <Tab eventKey={genre} title={genre} />
          ))}
        </Tabs>

        <Row className="g-2 mt-3">
          <Col xs={12} md={4}>
            {books.filter(booksByQuery).map((book) => (
              <SingleBook setSelected={setSelected} selected={selected} book={book} key={book.asin} />

            ))}

          </Col>
          <Col md={4}>
            <CommentArea asin={selected} />

          </Col>
        </Row>
      </Container>
    </>
  );



}



//  {/* <Form.Group className="py-4">
//          <Form.Label>Search</Form.Label>
//          <Form.Control
//            type="text"
//            value={query}
//            onChange={(e) => setQuery(e.target.value)}
//          />
//        </Form.Group> */}