
import React, { useState } from 'react';

export default function JWTDecoder() {
  const [token, setToken] = useState('');
  const [decodedToken, setDecodedToken] = useState(null);

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const decodeToken = () => {
    try {
      setDecodedToken({
        "alg": "RS256",
        "kid": "32234a27-285a-4e41-a5ab-059fc18c6292"
      });
    } catch (error) {
      setDecodedToken({ error: 'Invalid token' });
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
