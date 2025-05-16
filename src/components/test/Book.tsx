interface Book {
  id: string;
  name: string;
}
const books: Book[] = [
  { id: "1", name: "Harry Potter" },
  { id: "2", name: "Lord of the Rings" },
];

export default function BookList() {
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}
