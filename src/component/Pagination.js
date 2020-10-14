import React, { useState, useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink  } from 'reactstrap'

const Paginations = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const [First, setFirst] = useState(0);
    const [FirstStyle, setFirstStyle] = useState('disabled');
    const [Prev, setPrev] = useState(1);
    const [PrevStyle, setPrevStyle] = useState('enabled');
    const [Next, setNext] = useState(1);
    const [NextStyle, setNextStyle] = useState('enabled');
    const [Last, setLast] = useState(3);
    const [LastStyle, setLastStyle] = useState('enabled');
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  // console.log('ini' + totalPosts)

  /* ----------------------------------------------------------------- */
  /* ------------Handling when user click first pagination button--------- */
//   let a = 'disabled'
const FirstPagination = () => {
    if (currentPage < 4) {
        setFirstStyle('disabled')
        setFirst(0)
    } else if (currentPage >= 4) {
        setFirstStyle('enabled')
        setFirst(3)
        // console.log('enabled')
    } else if (currentPage >= 5) {
        setFirstStyle('enabled')
        setFirst(4)
    } else if (currentPage === 10 || currentPage === 15 || currentPage === 20 || currentPage === 25 ||       currentPage === 30)  {
        setFirstStyle('enabled')
        setFirst(5)
    }
}
useEffect(FirstPagination);   //useEffect did mount

/* ----------------------------------------------------------------- */
/* ------------Handling when user click previous pagination button--------- */
const PrevPagination = () => {
  if (currentPage === 1) {
        setPrev(0);
        setPrevStyle('disabled');
  } else {
        setPrevStyle('enabled');
        setPrev(1);
  }
}
useEffect(PrevPagination);   //useEffect did mount

/* ----------------------------------------------------------------- */
/* ------------Handling when user click next pagination button--------- */
const NextPagination = () => {
  if (currentPage === pageNumbers.length) {
        setNext(0);
        setNextStyle('disabled');
    // console.log(pageNumbers.length)
  } else {
        setNext(1);
        setNextStyle('enabled');
  }
}
useEffect(NextPagination);   //useEffect did mount

/* ------------Handling when user click last pagination button--------- */
const LastPagination = () => {
  if (currentPage <= pageNumbers.length - 5 ) {
        setLast(5);
  } else if (currentPage === pageNumbers.length - 2){
        setLast(2);
        setLastStyle('enabled');
  } else if (currentPage === pageNumbers.length - 1 || currentPage === pageNumbers.length){
        setLast(0);
        setLastStyle('disabled');
  } else if (currentPage === pageNumbers.length - 3) {
        setLast(3);
        setLastStyle('enabled');
  } else if (currentPage === pageNumbers.length - 4){
        setLast(4);
        setLastStyle('enabled');
  } else {
        setLastStyle('enabled')  ;
  }
}
useEffect(LastPagination);   //useEffect did mount
/* ----------------------------------------------------------------- */
const checkNull = () => {
  // console.log('ini' + totalPosts)
  if(totalPosts === 0) {
    // setFirstStyle('disabled')
    // setPrevStyle('disabled')
    setNextStyle('disabled')
    setLastStyle('disabled')
    setNext(0)
    setLast(0)
    // console.log('anda betul')
    // console.log(Last)
  }
}
useEffect(checkNull);
  // console.log(LastStyle)
  
  return (
      <div className="w-100">
        <p className='mr-auto'>
          Showing 1 to {postsPerPage > totalPosts ? totalPosts :  postsPerPage} of {totalPosts} entries
        </p>

      <Pagination className='d-flex align-items-center justify-content-center ml-auto'>
      <PaginationItem onClick={() => paginate(currentPage - First)} className={`${ FirstStyle }`}>
      <PaginationLink first/>
      </PaginationItem >
      <PaginationItem onClick={() => paginate(currentPage - Prev)} className={`${ PrevStyle }`}>
        <PaginationLink previous/>
      </PaginationItem>
      {pageNumbers.map(number => (
          <PaginationItem className={`page-item${ currentPage === number ? ' active' : ''}`}>     {/* untuk menunjukan page yang sedang aktif  */}
          <PaginationLink onClick={() => paginate(number)}>
              {number}
              {/* {console.log(number)} */}
          </PaginationLink >
          </PaginationItem>
      ))}
        <PaginationItem onClick={() => paginate(currentPage + Next)} className={`${ NextStyle }`}>
          <PaginationLink next/>
        </PaginationItem>
        <PaginationItem onClick={() => paginate(currentPage + Last )} className={`${ LastStyle }`}>
          <PaginationLink last/>
        </PaginationItem>
      </Pagination >

    </div>
  );
};

export default Paginations;