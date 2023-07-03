export const sendText = async (text) => {
  const res = await fetch('/api', {
    method: 'POST',
    body: JSON.stringify(text),
  });
  const body = await res.json();
  if (res.ok) {
    return { ok: res.ok, body };
  } else {
    return { ok: res.ok };
  }
  return res;
};
