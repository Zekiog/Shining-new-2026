# Katkı

Sorun bildirmek, değişiklik önermek ve çekme isteği göndermek için bu belge yeterlidir.

## Davranış

Katılım saygılı, teknik ve konunun içinde kalır. Taciz, konu dışı tanıtım ve kasıtlı düşmanca yorumlar bildirim olmadan kaldırılır.

## Sorun açmadan önce

1. Açık ve kapalı sorunlarda aynı kaydı arayın.
2. README'yi okuyun. Kurulum sorularının çoğu orada yanıtlıdır.
3. Son `main` dalını deneyin. Bildirilen birçok sorun kapanmış olabilir.

## Hata bildirimi

**Hata bildirimi** şablonunu kullanın. Ekleyin:

- Yeniden üretme adımları (kısa, kopyalanabilir)
- Beklenen ve gerçekleşen davranış
- Ortam (işletim sistemi, çalışma zamanı sürümü, ilgili servis sürümleri)
- İlgili günlük ve yığın izi. Gizli anahtarları yapıştırmadan silin.

## Özellik önerisi

**Özellik isteği** şablonunu kullanın. Yazın:

- Çözmek istediğiniz sorun
- Önerilen çözüm (mümkünse tek cümle)
- Düşündüğünüz alternatifler
- Çekme isteği göndermeye hazır olup olmadığınız

## Çekme isteği

1. Depoyu çatallayın ve `main` üzerinden bir dal açın.
2. Odaklı kayıtlar oluşturun. Her kayıt derlenmeli ve testleri geçmelidir.
3. Mevcut kod biçimine uyun. Göndermeden önce biçimlendirici ve linter çalıştırın.
4. Davranış değişikliğine test ekleyin veya mevcut testi güncelleyin.
5. Ziyaretçinin gördüğü davranış değişirse README'yi güncelleyin.
6. `main` hedefine çekme isteği açın ve şablonu doldurun:
   - **Ne** değişti (bir paragraf)
   - **Neden** (kapattığı sorun, örneğin `Closes #42`)
   - **Nasıl** doğrulanır (komutlar, ekran görüntüleri)

İnceleme istenmeden önce CI yeşil olmalıdır. Küçük düzeltme istekleri ret değildir.

## Güvenlik

Güvenlik açığı için herkese açık sorun açmayın. Süreç [SECURITY.md](./SECURITY.md) içindedir.

## Lisans

Katkı, depo ile aynı lisans altındadır (`LICENSE`).
