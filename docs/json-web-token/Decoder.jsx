
import React, { useState } from 'react';

export default function JWTDecoder() {
  const [token, setToken] = useState('');
  const [decodedToken, setDecodedToken] = useState(null);

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const decodeToken = async () => {
    try {
      const headerBase64Url = token.split('.')[0];
      const headerBase64 = headerBase64Url.replace(/-/g, '+').replace(/_/g, '/');
      const headerJson = atob(headerBase64);
      setDecodedToken(JSON.parse(headerJson));
    } catch (error) {
      setDecodedToken({ error: error });
    }
  };

  return (
    <div style={{ border: '1px solid #ffaf1d', padding: '10px', borderRadius: '5px', backgroundColor: '#000', color: '#fff', marginBottom: '20px' }}>
      <label>
        <strong>Token</strong> [<em>Paste a JWT Token here</em>]
      </label>
      <textarea
        value={token}
        onChange={handleTokenChange}
        placeholder="Enter JWT token here..."
        rows="4"
        style={{ width: '100%', marginTop: '10px', padding: '8px', color: '#000' }}
      />
      <button onClick={decodeToken} style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#ffaf1d', color: '#000', border: 'none', cursor: 'pointer' }}>
        Decode Token
      </button>

      {decodedToken && (
        <div style={{ marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: '#222', color: '#fff' }}>
          <h3>Decoded Token</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{JSON.stringify(decodedToken, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
