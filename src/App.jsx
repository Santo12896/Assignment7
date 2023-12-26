import { useState } from 'react'
import './App.css'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Courses from './component/Courses/Courses'
import Header from './component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [addprice, setAddprice] = useState(0)
  const [addcredit, setAddcredit] = useState(0)
  const [addcreditdue,setAddcreditdue] = useState(0)


  const handleAddBookmarks = course => {
    const newBookmarks = [...bookmarks, course]
    setBookmarks(newBookmarks);
  }

  const handlePrice = price => {
    const newAddprice = addprice + price;
    setAddprice(newAddprice);
  }

  const handlecredit = credit =>{
    const newAddcredit = addcredit+credit;
    if(20 < newAddcredit){
      alert ('20 credit filap');
    }
    setAddcredit(newAddcredit);
  }

  const handleAddcreditdue = (credit) =>{
    const newAddcreditdue = 20 - credit ;
    setAddcreditdue(newAddcreditdue);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-4 max-w-7xl mx-auto'>
        <Courses 
        handleAddBookmarks={handleAddBookmarks}
        handlePrice={handlePrice}
        handlecredit={handlecredit}
        ></Courses>
        <Bookmarks 
        bookmarks={bookmarks}
        addprice={addprice}
        addcredit={addcredit}
        handleAddcreditdue={handleAddcreditdue}
        addcreditdue={addcreditdue}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
