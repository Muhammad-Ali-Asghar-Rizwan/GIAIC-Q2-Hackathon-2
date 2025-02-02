import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../ui/pagination"
import React from 'react'

function Paginationpage() {
  return (
    <div className="w-full mt-4">
 <Pagination>
  <PaginationContent className="w-full space-x-4 flex justify-center lg:ml-7">
    <PaginationItem>
      <PaginationPrevious href="/" />
    </PaginationItem>

    <PaginationItem className="hidden lg:block">
      <PaginationLink href="/">Home</PaginationLink>
    </PaginationItem>
    <PaginationItem className="hidden lg:block">
      <PaginationEllipsis />
    </PaginationItem>

    <PaginationItem className="hidden lg:block">
      <PaginationLink href="/sell">Top Sell</PaginationLink>
    </PaginationItem>
    <PaginationItem className="hidden lg:block">
      <PaginationEllipsis />
    </PaginationItem>

    <PaginationItem>
      <PaginationLink href="/brand">Brands</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>

    <PaginationItem>
      <PaginationNext href="/cart" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
 
    </div>
  )
}

export default Paginationpage  