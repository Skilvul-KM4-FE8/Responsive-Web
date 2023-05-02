export function doctorTitle(url) {
  if (url === "umum") return ``;
  if (url === "anak") return `Sp.A`;
  if (url === "kulit_kelamin") return `Sp.KK`;
  if (url === "gigi") return `Sp.KG`;
  if (url === "kandungan") return `Sp.OG`;
  if (url === "tht") return `Sp. THT`;
  if (url === "psikiater") return `Sp.KJ`;
  if (url === "saraf") return `Sp.N`;
  if (url === "penyakit_dalam") return `Sp.PD`;
  if (url === "mata") return `Sp.M`;
  if (url === "tulang") return `Sp.OT`;
}
