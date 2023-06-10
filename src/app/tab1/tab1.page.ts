import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  form = {
    nik: '',
    nama: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    jenis_kelamin: '',
    alamat: '',
    agama: '',
    status_perkawinan: '',
    pekerjaan: '',
    kewarganegaraan: '',
    berlaku_hingga: '',
  };
  
  botToken = 'YOUR_BOT_TOKEN'; // Ganti dengan token Bot Telegram Anda
  chatId = 'YOUR_CHAT_ID'; // Ganti dengan ID obrolan (chat ID) Anda
  
  constructor(private router: Router) {}

  SubmitData() {
    // Simpan data ke local storage
    localStorage.setItem('nik', this.form.nik);
    localStorage.setItem('nama', this.form.nama);
    localStorage.setItem('tempat_lahir', this.form.tempat_lahir);
    localStorage.setItem('tanggal_lahir', this.form.tanggal_lahir);
    localStorage.setItem('jenis_kelamin', this.form.jenis_kelamin);
    localStorage.setItem('alamat', this.form.alamat);
    localStorage.setItem('agama', this.form.agama);
    localStorage.setItem('status_perkawinan', this.form.status_perkawinan);
    localStorage.setItem('pekerjaan', this.form.pekerjaan);
    localStorage.setItem('kewarganegaraan', this.form.kewarganegaraan);
    localStorage.setItem('berlaku_hingga', this.form.berlaku_hingga);
  }
    sendFormDataToTelegram() {
      const botToken = '6279321249:AAGPh1WKSS0IG2QQ4rdd1rf-AAh9Z7ZYOsc'; // Ganti dengan token akses bot Anda
      const chatId = '1027772636'; // Ganti dengan ID obrolan tujuan Anda
      const message = this.generateMessage();
      const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
      const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
        message
      )}`;
  
      window.open(telegramUrl, '_blank');
    }