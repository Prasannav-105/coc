const axios = require('axios');

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA4ODUxMzYzLTc2NWQtNGUyNC05YjQ4LTdjMzFkY2IzMWQ5OSIsImlhdCI6MTczMjg5NDM3Miwic3ViIjoiZGV2ZWxvcGVyLzAwOGNhMmNjLTM3ZDctNTdhMC0yZjNjLTRhNDBmZGEyMjA1NSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjAuMC4wLjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.I-PIoRVR5qmTo0eUJRcBJZQce0_hhLff3mGPgrg8ML8Ne3zx5Hksw0HNzCGacvC7JsjZL5a_VBCypOoPfB78eA';
const playerId = '4455776633';

axios.get(`https://api.clashofclans.com/v1/players/${playerId}`, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
    Accept: 'application/json',
  },
})
  .then((response) => {
    console.log(response.data);
    
  })
  .catch((error) => {
    console.log(error);
  });