export default function findBy(key, value) {
  return (i) => i[key] === value;
}
