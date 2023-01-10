import {useState} from 'react';
import style from "./NftCard.module.css"
import Pagination from 'react-paginate';
import joePegsIcon from '../../joePegsIcon.png'
import OpenSeaIcon from '../../OpenSeaicon.png'
import looksrareIcon from '../../looksrareIcon.png'


export default function NftCard(props) {
  const [perPage, setPerPage] = useState(16);
  const [pageEth, setPageEth] = useState(parseInt(localStorage.getItem('pageEth')) || 0);
  const [pageEthMain, setPageEthMain] = useState(0);
  const [pageAvax, setPageAvax] = useState(parseInt(localStorage.getItem('pageAvax')) || 0);
  const [pageAvaxMain, setPageAvaxMain] = useState(parseInt(localStorage.getItem('pageAvaxMain')) || 0);
  let EthUrls = [];
  for (let i = 1; i <= 551; i++) {
    EthUrls.push(i);
  }
  let AvaxUrls = [];
  for (let n = 1; n <= 2566; n++) {
    AvaxUrls.push(n);
  }
  const handlePageChangeEthMain = (pageEthMain) => {
    setPageEthMain(pageEthMain.selected);
    localStorage.setItem('pageEthMain', pageEth.selected);
   
  };
  const handlePageChangeAvaxMain = (pageAvaxMain) => {
    setPageAvaxMain(pageAvaxMain.selected);
    localStorage.setItem('pageAvaxMain', pageEth.selected);
  };
  const handlePageChangeEth = (pageEth) => {
    setPageEth(pageEth.selected);
    localStorage.setItem('pageEth', pageEth.selected);
    
  };
  const handlePageChangeAvax = (pageAvax) => {
    setPageAvax(pageAvax.selected);
    localStorage.setItem('pageAvax', pageAvax.selected);
  };
 
  
  const nfts = props.nftId.slice(pageAvax * perPage, (pageAvax + 1) * perPage).map((nft) =>
  <div className="card" style={{ width: "12.5%" }} key={nft.toString()} >
   <img src={`https://cryptobroskis.com/cryptobroskis/joepegsImg/${nft}.png`} alt="CryptoBroski Nft #${nft}" className={style.nft} ></img>
    <div className="card-body">
      <img src={joePegsIcon} className={style.img} alt="JoePegs Icon"></img>
      <a href={`https://joepegs.com/item/0xeb4f5d458b135a8993239f91ab3f45ab92cd519e/${nft}/`} target="_blank" rel="noreferrer noopener">   #{nft}</a>
    </div>
  </div>
  );
  const ethNftCard = props.EthNft.slice(pageEthMain * perPage, (pageEthMain + 1) * perPage).map((ethNft) =>
  <div className="card" style={{ width: "12.5%" }} key={ethNft.toString()} >
   <img src={`https://cryptobroskis.com/cryptobroskis/ethImg/${ethNft}.png`} alt="CryptoBroski Nft #${ethNft}"className={style.nft}></img>
    <div className="card-body">
      <a  href={`https://opensea.io/assets/ethereum/0xeaa7aa689eec0e3ceb70e288d23e01e874a98e5c/${ethNft}`} target="_blank" rel="noreferrer noopener"><p>#{ethNft}</p><img src={OpenSeaIcon} alt="Opensea Icon" className={style.img}></img></a>
      <a  href={`https://looksrare.org/collections/0xeAa7Aa689eec0e3Ceb70E288d23e01E874a98E5c/${ethNft}`} target="_blank" rel="noreferrer noopener"><img src={looksrareIcon} alt="looksrare Icon" className={style.img}></img></a>
    </div>
   
  </div>
  );
  const mainNfts = EthUrls.slice(pageEthMain * perPage, (pageEthMain + 1) * perPage).map((EthUrls) =>
  <div className="card" style={{ width: "12.5%" }} key={EthUrls.toString()} >
   <img src={`https://cryptobroskis.com/cryptobroskis/ethImg/${EthUrls}.png`} className={style.nft} alt="..." ></img>
    <div className="card-body">
    <a  href={`https://opensea.io/assets/ethereum/0xeaa7aa689eec0e3ceb70e288d23e01e874a98e5c/${EthUrls}`} target="_blank" rel="noreferrer noopener"><p>#{EthUrls}</p><img src={OpenSeaIcon} alt="OpenSea Icon" className={style.img}></img></a>
    <a  href={`https://looksrare.org/collections/0xeAa7Aa689eec0e3Ceb70E288d23e01E874a98E5c/${EthUrls}`} target="_blank" rel="noreferrer noopener"><img src={looksrareIcon} alt="LooksRare Icon" className={style.img}></img></a>
    </div>
  </div>
  );
  const AvaxMainNfts = AvaxUrls.slice(pageAvaxMain * perPage, (pageAvaxMain + 1) * perPage).map((AvaxUrls) =>
  <div className="card" style={{ width: "12.5%" }} key={AvaxUrls.toString()} >
   <img src={`https://cryptobroskis.com/cryptobroskis/joepegsImg/${AvaxUrls}.png`} className={style.nft} alt="..." ></img>
    <div className="card-body">
      <img src={joePegsIcon} className={style.img} alt="JoePegs Icon"></img>
      <a href={`https://joepegs.com/item/0xeb4f5d458b135a8993239f91ab3f45ab92cd519e/${AvaxUrls}/`} target="_blank" rel="noreferrer noopener">   #{AvaxUrls}</a> 
    </div>
  </div>
  );

  return (
    <div className={style.container}>
        <div className={ style.main }>
          {props.nftDisp === true &&
            <div className={style.p} style={{ display: "flex", flexWrap: "wrap" }}> 
            {nfts}
            <Pagination
              initialPage={0}
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageChangeAvax}
              pageRangeDisplayed={5}
              pageCount={Math.ceil(props.avaxNftBal / perPage)}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              marginPagesDisplayed={2}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
           </div>}
           {props.ethNftDisp === true &&
            <div className={style.a} style={{ display: "flex", flexWrap: "wrap" }}> 
            {ethNftCard}
            <Pagination
              initialPage={0}
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageChangeEth}
              pageRangeDisplayed={5}
              pageCount={Math.ceil(props.EthNftBal / perPage)}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          
                      
            </div>
            }
            {props.showEth === true &&
             <div className={style.a} style={{ display: "flex", flexWrap: "wrap" }}> 
             {mainNfts}
             <Pagination
               breakLabel="..."
               initialPage={0}
               nextLabel="next >"
               onPageChange={handlePageChangeEthMain}
               pageRangeDisplayed={5}
               pageCount={Math.ceil(EthUrls.length / perPage)}
               previousLabel="< previous"
               renderOnZeroPageCount={null}
               pageClassName="page-item"
               pageLinkClassName="page-link"
               previousClassName="page-item"
               previousLinkClassName="page-link"
               nextClassName="page-item"
               nextLinkClassName="page-link"
               breakClassName="page-item"
               breakLinkClassName="page-link"
               containerClassName="pagination"
               activeClassName="active"
             />      
             </div> }
             {props.showAvax === true &&
             <div className={style.a} style={{ display: "flex", flexWrap: "wrap" }}> 
             {AvaxMainNfts}
             <Pagination
               breakLabel="..."
               initialPage={0}
               nextLabel="next >"
               onPageChange={handlePageChangeAvaxMain}
               pageRangeDisplayed={5}
               pageCount={Math.ceil(AvaxUrls.length / perPage)}
               previousLabel="< previous"
               renderOnZeroPageCount={null}
               pageClassName="page-item"
               pageLinkClassName="page-link"
               previousClassName="page-item"
               previousLinkClassName="page-link"
               nextClassName="page-item"
               nextLinkClassName="page-link"
               breakClassName="page-item"
               breakLinkClassName="page-link"
               containerClassName="pagination"
               activeClassName="active"
             />      
             </div> }
             
        </div>
   </div>
  );
}
