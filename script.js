const bookingForm = document.querySelector("#bookingForm");

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(bookingForm);
  const message = [
    "Halo TriTwo Travel, saya ingin booking.",
    "",
    `Nama: ${data.get("nama")}`,
    `Layanan: ${data.get("layanan")}`,
    `Tanggal: ${data.get("tanggal")}`,
    `Titik jemput: ${data.get("jemput")}`,
    `Catatan: ${data.get("catatan") || "-"}`,
  ].join("\n");

  const whatsappNumber = "";
  const encodedMessage = encodeURIComponent(message);
  const url = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;

  window.open(url, "_blank", "noopener,noreferrer");
});
