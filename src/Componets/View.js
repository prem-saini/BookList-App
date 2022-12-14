import React from "react"

function View({ books, onDataDel }) {


    return books.map(book => (
        <tr key={book.isbn}>
            <th>{book.isbn}</th>
            <th>{book.title}</th>
            <th>{book.author}</th>
            <th><button className="del_btn" style={{ backgroundColor: "blue", color: "white" }} onClick={() => onDataDel(book.isbn)}>Del</button></th>
        </tr>
    ))
}

export default View