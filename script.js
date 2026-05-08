const bookingForm = document.querySelector("#bookingForm");

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(bookingForm);
  const message = [
    "Halo TriTwo Rental, saya ingin booking mobil dengan sopir.",
    "",
    `Nama: ${data.get("nama")}`,
    `Layanan: ${data.get("layanan")}`,
    `Tanggal: ${data.get("tanggal")}`,
    `Titik jemput: ${data.get("jemput")}`,
    `Catatan: ${data.get("catatan") || "-"}`,
  ].join("\n");

  const whatsappNumber = "6282170276076";
  const encodedMessage = encodeURIComponent(message);
  const url = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;

  window.open(url, "_blank", "noopener,noreferrer");
});
