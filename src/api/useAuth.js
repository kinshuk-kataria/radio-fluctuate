import { useEffect, useState } from 'react';
import axios from 'axios';

function useAuth() {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    axios
      .post('http://localhost:3001/token')
      .then(response => setAccessToken(response.data.accessToken))
      .catch(error => console.log(error));
  }, []);
  return accessToken;
}

export default useAuth;
