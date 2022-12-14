import React, { useState, useEffect } from "react"
import "./Book.css"
import View from "./View"

function Book() {

    const getdataLocalStorage = () => {
        const data = localStorage.getItem('books')

        if (data) {
            return JSON.parse(data)
        } else {
            return []
        }
    }





    const [books, setBooks] = useState(getdataLocalStorage())

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setIsbn] = useState("")

    const onSubmithandler = (e) => {
        e.preventDefault();

        let book = {
            title,
            author,
            isbn
        }

        setBooks([...books, book])
        setTitle("")
        setAuthor("")
        setIsbn("")
    }
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    }, [books])

    const onDataDel = (isbn) => {
        const filteredBooks = books.filter((element, index) => {
            return element.isbn !== isbn
        })
        setBooks(filteredBooks);
    }


    return (
        <>

            <h1>Book List</h1>
            <p>Add Your Book Data In LocalStorage</p>

            <div className="Book">

                <div className="Book_left">
                    <form onSubmit={onSubmithandler}>
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label>Author</label>
                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        <label>Isbn</label>
                        <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                        <button className="Add_btn">Submit</button>
                    </form>


                </div>
                <div className="Book_right">
                    <div className="get_data">
                        {books.length > 0 && <>
                            <table>
                                <thead>

                                    <tr>
                                        <th>isbn</th>
                                        <th>title</th>
                                        <th>author</th>
                                        <th>Delete</th>
                                    </tr>

                                </thead>

                                <tbody>


                                    <View books={books} onDataDel={onDataDel} />
                                </tbody>
                            </table>


                        </>}


                        {books.length < 1 && <div><p>No Books Are Added Yet</p></div>}

                    </div>

                </div>
            </div>

        </>
    )
}
export default Book