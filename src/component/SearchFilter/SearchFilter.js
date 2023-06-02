// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// const SearchFilter = () => {
//     const [iconData, setIconData] = useState(null);
//
//     useEffect(() => {
//         const fetchIconData = async () => {
//             const url = 'https://api.thenounproject.com/v2/icon/1';
//             const consumerKey = '143ea616796042cc8e9ee02bfac3c261';
//             const consumerSecret = 'a51457aff58742b3828bd5850276b018';
//
//             const oauth = {
//                 consumer_key: consumerKey,
//                 consumer_secret: consumerSecret,
//                 token: '',
//                 token_secret: '',
//                 signature_method: 'HMAC-SHA1',
//             };
//
//             const requestConfig = {
//                 method: 'GET',
//                 url,
//                 headers: {
//                     Authorization: `OAuth oauth_consumer_key="${oauth.consumer_key}", oauth_nonce="${generateNonce()}", oauth_signature="${generateSignature(
//                         oauth,
//                         requestConfig
//                     )}", oauth_signature_method="${oauth.signature_method}", oauth_timestamp="${Math.floor(
//                         Date.now() / 1000
//                     )}"`,
//                 },
//             };
//
//             try {
//                 const response = await axios(requestConfig);
//                 setIconData(response.data);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
//
//         fetchIconData();
//     }, []);
//
//     return (
//         <div>
//             {iconData ? (
//                 <div>
//                     <h1>{iconData.icon.term}</h1>
//                     <img src={iconData.icon.thumbnail_url} alt={iconData.icon.term} />
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };
//
// export default SearchFilter;
