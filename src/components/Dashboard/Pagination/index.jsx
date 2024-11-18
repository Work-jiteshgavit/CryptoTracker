import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import "./styles.css"

export default function PaginationComponent({page, handlePageChange}) {
   

    return (
        <div className='pagination-component'>
            <Pagination
                count={10}
                page={page}
                onChange={(event, value) => handlePageChange(event, value)}

                sx={{
                    "& .MuiPaginationItem-text": {
                        color: "var(--white)",
                        border: "1px solid var(--grey)",
                      },
                      "& .MuiPaginationItem-text:hover": {
                        backgroundColor: "var(--blue) !important",
                      },
                      "& .Mui-selected  ": {
                        backgroundColor: "var(--blue)",
                        borderColor: "var(--blue)",
                      },
                      "& .MuiPaginationItem-ellipsis": {
                        border: "none",
                      },
                }}

            />
        </div>
    );
}
