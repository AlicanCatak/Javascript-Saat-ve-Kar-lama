const name = prompt("İsminizi girin:");
document.getElementById("myName").textContent = name;

// const açıp name adında bir değişken oluşturuyoruz. Bu değişkene prompt fonksiyonunu atıyoruz. prompt, kullanıcıdan bilgi almak için kullanılır. İçine "İsminizi girin" yazıyoruz, bu mesaj kullanıcıya gösterilecek.

// document.getElementById() ise HTML dosyamızda gördüğünüz gibi bir adet span etiketinin içinde myName id'si var. Burada document kodu ile span etiketine ulaşıp, textContent ile içeriğini kullanıcıdan aldığımız isimle değiştiriyoruz.

function showTime() {
  // Şu anki tarih ve saati alıyoruz
  const now = new Date();

  // Saat bilgisini alıp, okunabilir bir formata çeviriyoruz
  const time = now.toLocaleTimeString();

  // Tarih bilgisini de okunabilir bir formata çeviriyoruz
  const date = now.toLocaleDateString();

  // HTML'deki "myClock" id'li alana tarih ve saati yazıyoruz
  document.getElementById("myClock").textContent = date + " - " + time;
}

// Her saniye saati güncelle
setInterval(showTime, 1000);
