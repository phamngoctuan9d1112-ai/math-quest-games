import pdfPoppler from "pdf-poppler";
import fs from "fs-extra";
import path from "path";

export async function pdfToImages(pdfFile) {
  const outputDir =
    pdfFile.replace(".pdf", "");

  await fs.ensureDir(outputDir);

  const opts = {
    format: "png",
    out_dir: outputDir,
    out_prefix: "page",
    page: null
  };

  await pdfPoppler.convert(
    pdfFile,
    opts
  );

  return (
    await fs.readdir(outputDir)
  )
    .filter(f => f.endsWith(".png"))
    .sort()
    .map(f => path.join(outputDir, f));
}
