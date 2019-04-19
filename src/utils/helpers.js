export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const dateString = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
  const hourString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return `${dateString} - ${hourString}`;
}
