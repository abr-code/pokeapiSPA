const getHash = () => {
  let hash = location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
  if (hash != "/") {
    hash = `/${hash}`;
  }
  return hash;
};

export default getHash;
