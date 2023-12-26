import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, addprice, addcredit, handleAddcreditdue, addcreditdue }) => {

    handleAddcreditdue(addcredit)
    return (
        <div className="md: w-1/4 bg-white rounded-md p-4 ">

            <h1 className="text-[#2F80ED] text-base font-semibold">Credit Hour Remaining {addcreditdue} hr</h1>
            <h1 className="text-xl font-bold my-6">Course Name</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                
            }
            <h1 className="text-base font-medium my-6">Total Credit Hour :{addcredit}</h1>
            <h2 className="text-base font-medium">Total Price : { addprice} USD</h2>


            
        </div>
    );
};

export default Bookmarks;