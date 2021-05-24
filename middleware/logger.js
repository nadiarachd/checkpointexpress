function logger(req, res, next) {
  console.table({ method: req.method, path: req.url });
  let date = new Date().getDay();
  const hours = new Date().getHours();
  //const min= new Date().getMinutes()
  if (date > 0 && date < 6 && hours > 9 && hours < 17) {
    console.log("During Business Hours!");

    next();
  } else {
    console.log("out of office");
    res.send("Out of office could please contact us from Monday to Friday  ");
  }
}
module.exports = logger;
