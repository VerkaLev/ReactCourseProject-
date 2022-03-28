import axios from 'axios';

export const api = () => {
  const request = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    return data;
  };

  const get = async (url) => {
    const data = await request(url, {
      method: 'GET',
    });

    return data;
  };

  const post = async (url, payload) => {
    const data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
  };

  const deleteMethod = async (url, payload) => {
    const res = await axios.delete(url, {
      data: {
        id: payload,
      },
    });

    return res;
  };

  const editMethod = async (url, payload) => {
    const res = await axios.patch(url, payload);
    return res;
  };

  return {
    get,
    post,
    deleteMethod,
    editMethod,
  };
};
