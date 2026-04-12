module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body || {};
  if (!text) return res.status(400).json({ error: 'Missing text' });

  try {
    const response = await fetch('https://genialchat.uazapi.com/send/text', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'token': '35b507bb-c4f0-4f13-9260-c4b4f07f2d92',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number: '5562999878349', text }),
    });

    const data = await response.text();
    return res.status(response.status).send(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
