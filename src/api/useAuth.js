import { useEffect, useState } from 'react';
import axios from 'axios';

function useAuth() {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    axios
      .post('/token')
      .then(response => setAccessToken(response.data.accessToken))
      .catch(error => console.log(error));
  }, []);
  return accessToken;
}

export default useAuth;
