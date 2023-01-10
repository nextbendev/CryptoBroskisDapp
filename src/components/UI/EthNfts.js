import React, { useState } from 'react';


const ImageCard = ({ imgUrl }) => {
  return (
    <div className="card"  key={imgUrl.toString()} >
    <img src={`https://cryptobroskis.com/cryptobroskis/ethImg/${imgUrl}.png`} className="nftCard" alt="..." ></img>
    <p>
        Hello
    </p>
   
   </div>

  );
}

const ImageList = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const imageUrls = [];
  for (let i = 1; i <= 25; i++) {
    imageUrls.push(i);
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageUrls = imageUrls.slice(startIndex, endIndex);

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div >
      {currentPageUrls.map(imgUrl => (
        <ImageCard imgUrl={imgUrl} key={imgUrl} />
      ))}
      <div className="pagination">
        <button onClick={handlePrevClick} disabled={page === 1}>Prev</button>
        <span>Page {page}</span>
        <button onClick={handleNextClick} disabled={page === 3}>Next</button>
      </div>
    </div>
  );
}

export default ImageList;
