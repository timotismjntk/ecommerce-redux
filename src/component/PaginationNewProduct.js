import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Pagination, PaginationItem, PaginationLink  } from 'reactstrap'

import newProductAction from '../redux/actions/newproduct'

const Paginations = ({ postsPerPage, totalPosts, paginate, currentPage, pageInfo }) => {
    const [First, setFirst] = useState(0);
    const [FirstStyle, setFirstStyle] = useState('disabled');
    const [Prev, setPrev] = useState(1);
    const [PrevStyle, setPrevStyle] = useState('enabled');
    const [Next, setNext] = useState(1);
    const [NextStyle, setNextStyle] = useState('enabled');
    const [Last, setLast] = useState(3);
    const [LastStyle, setLastStyle] = useState('enabled');
    const pageNumbers = [];

    const dispatch = useDispatch()

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers)

  const slideToPage = (number) => {
      window.scrollTo({
        top: 0
      });
      dispatch(newProductAction.getNewProduct(number))
  }
  const slideToFirstPage = (number) => {
    if (FirstStyle === 'enabled') {
      window.scrollTo({
        top: 0
      });
      dispatch(newProductAction.getNewProduct(number))
    }
  }
  const slideToLastPage = (number) => {
    if (LastStyle === 'enabled') {
      window.scrollTo({
        top: 0
      });
      dispatch(newProductAction.getNewProduct(number))
    }
  }
  const nextPage = () => {
    if (pageInfo.nextLink) {
      window.scrollTo({
        top: 0
      });
      dispatch(newProductAction.getNewProduct(pageInfo.currentPage + 1))
    }
  }
  const prevPage = () => {
    if (pageInfo.prevLink) {
      window.scrollTo({
        top: 0
      });
      dispatch(newProductAction.getNewProduct(pageInfo.currentPage - 1))
    }
  }

  /* ----------------------------------------------------------------- */
  /* ------------Handling when user click first pagination button--------- */
  useEffect(() => {
    if (pageInfo.currentPage < 3) {
      setFirstStyle('disabled')
      setFirst(0)
    } else if (pageInfo.currentPage >= 3) {
        setFirstStyle('enabled')
        setFirst(3)
    }
    else if (pageInfo.currentPage < 4) {
      setFirstStyle('disabled')
      setFirst(0)
    } else if (pageInfo.currentPage >= 4) {
        setFirstStyle('enabled')
        setFirst(3)
        // console.log('enabled')
    } else if (pageInfo.currentPage >= 5) {
        setFirstStyle('enabled')
        setFirst(4)
    } else if (pageInfo.currentPage === 10 || pageInfo.currentPage === 15 || pageInfo.currentPage === 20 || pageInfo.currentPage === 25 || pageInfo.currentPage === 30)  {
        setFirstStyle('enabled')
        setFirst(5)
    }
  }, [pageInfo.currentPage])

/* ----------------------------------------------------------------- */
/* ------------Handling when user click previous pagination button--------- */
  
  useEffect(() => {
    if (pageInfo.currentPage === 1) {
      setPrev(0);
      setPrevStyle('disabled');
    } else {
        setPrevStyle('enabled');
        setPrev(1);
    }
  }, [pageInfo.currentPage])

/* ----------------------------------------------------------------- */
/* ------------Handling when user click next pagination button--------- */
  useEffect(() => {
    if (pageInfo.currentPage === pageNumbers.length) {
      setNext(0);
      setNextStyle('disabled');
    } else {
        setNext(1);
        setNextStyle('enabled');
    }
  }, [pageInfo.currentPage, pageNumbers.length]);   //useEffect did mount

/* ------------Handling when user click last pagination button--------- */
  useEffect(() => {
    if (pageInfo.currentPage <= pageNumbers.length - 5 ) {
      setLast(5);
    } else if (pageInfo.currentPage === pageNumbers.length - 2){
        setLast(2);
        setLastStyle('enabled');
    } else if (pageInfo.currentPage === pageNumbers.length - 1 || pageInfo.currentPage === pageNumbers.length){
        setLast(0);
        setLastStyle('disabled');
    } else if (pageInfo.currentPage === pageNumbers.length - 3) {
        setLast(3);
        setLastStyle('enabled');
    } else if (pageInfo.currentPage === pageNumbers.length - 4){
        setLast(4);
        setLastStyle('enabled');
    } else {
        setLastStyle('enabled')  ;
    }
  }, [pageInfo.currentPage, pageNumbers.length]);
/* ----------------------------------------------------------------- */
  useEffect(() => {
    if(totalPosts === 0) {
      setNextStyle('disabled')
      setLastStyle('disabled')
      setNext(0)
      setLast(0)
    }
  }, [totalPosts]);
  
  return (
      <div className="w-100">
        <p className='mr-auto'>
          Showing 1 to {postsPerPage > totalPosts ? totalPosts :  postsPerPage} of {totalPosts} entries from page {pageInfo.currentPage}
        </p>
        <Pagination className='d-flex align-items-center justify-content-center ml-auto'>
        <PaginationItem onClick={() => {paginate(pageInfo.currentPage - First + 1); slideToFirstPage(pageInfo.currentPage - First + 1)}} className={`${ FirstStyle }`}>
          <PaginationLink first/>
        </PaginationItem >
        <PaginationItem onClick={() => {paginate(pageInfo.currentPage - Prev); prevPage()}} className={`${ PrevStyle }`}>
          <PaginationLink previous/>
        </PaginationItem>
        {pageNumbers.map(number => (
            <PaginationItem className={`page-item${ pageInfo.currentPage === number ? ' active' : ''}`}>     {/* untuk menunjukan page yang sedang aktif  */}
            <PaginationLink onClick={() => {paginate(number); slideToPage(number)}}>
                {number}
            </PaginationLink >
            </PaginationItem>
        ))}
          <PaginationItem onClick={() => {paginate(pageInfo.currentPage + Next); nextPage()}} className={`${ NextStyle }`}>
            <PaginationLink next/>
          </PaginationItem>
          <PaginationItem onClick={() => {paginate(pageInfo.currentPage + Last); slideToLastPage(pageInfo.currentPage + Last)}} className={`${ LastStyle }`}>
            <PaginationLink last/>
          </PaginationItem>
        </Pagination >
      </div>
  );
};

export default Paginations;