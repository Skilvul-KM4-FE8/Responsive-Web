export function categoryCard(abc) {
  return `
<div class="col-md-3 mt-3">
<a href="${abc.link}" class="link-kategori">
    <div class="container-kategori-box rounded shadow">
    <img src="${abc.gambar}" alt="" class="mundur img-fluid link-kategori" />
    <div class="bg-dark-shadow text-white rounded">
        <h4>${abc.kategori}</h4>
    </div>
    </div>
</a>
</div>
`;
}
