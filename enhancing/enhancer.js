module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancment < 20) {
    return (item.enhancment += 1);
  } else {
    return item;
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return item;
}

function get(item) {
  return { ...item };
}
