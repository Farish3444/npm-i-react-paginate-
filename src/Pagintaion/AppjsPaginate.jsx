import React,{useState} from 'react';
import JSONDATA from '../MOCK_DATA.json';
import ReactPaginate from 'react-paginate';
import '../App.css';

const AppjsPaginate = () => {

const [users,setUsers] = useState(JSONDATA.slice(0,50));
const [pageNumber, setPageNumber] = useState(0);

const userPerPage = 10 ;
const pagesVisited = pageNumber*userPerPage

const displayUser = users.slice(pagesVisited, pagesVisited + userPerPage).map((m) =>{
            return (
                <div>
                <ul className='user'>
                <li>name-{m.first_name}</li>
                <li>coutry-{m.Country}</li>
                </ul>
                </div>
            )
        })

        const pageCount= Math.ceil(users.length / userPerPage);

        const changePage=({selected})=>{
           setPageNumber(selected);
        }

    return (
        <div>
       {displayUser}
       <ReactPaginate
    previousLabel={'Previous'}
    nextLabel={'next'}
    pageCount={pageCount}
    onPageChange={changePage}
    containerClassName={"paginationBttns"}
    previousLinkClassName={'previousBttns'}
    nextLinkClassName={'nextBttn'}
    activeClassName={'paginationActive'}
       />
        </div>
    )
}

export default AppjsPaginate
