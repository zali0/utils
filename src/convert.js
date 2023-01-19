import { Powerpoint, Word } from "pdf-officegen";
const p = new Word([{}]);
p.
p.convertFromPdf("input.pdf", [], (err, result) => {
  //Do something with the result (filepath to output)
  //   console.log(err)
  //   console.log(result)
});
