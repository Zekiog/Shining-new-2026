# Güvenlik ilkesi

## Desteklenen sürümler

Güvenlik güncellemesi alan sürümler:

| Sürüm | Destek |
|---|---|
| `main` | Etkin |
| Son etiketli sürüm | Etkin |
| Daha eski sürümler | Yalnızca olanak ölçüsünde |

## Açık bildirme

**Güvenlik açığı için herkese açık bir GitHub sorunu açmayın.**

Aşağıdaki kanallardan biriyle özel bildirin. Yeniden üretmek ve etkiyi ölçmek için yeterli bilgi verin:

- Sorunun ve etkilenen bileşenin veya dosyanın açık tarifi
- Yeniden üretme adımları veya küçük bir kanıt
- Etki: bir saldırgan ne elde edebilir
- Gerekirse ortam (işletim sistemi, çalışma zamanı sürümü)

### Özel kanallar

- **GitHub özel güvenlik bildirimi:** deponun *Security* sekmesindeki *Report a vulnerability* düğmesi. Bu, yalnız bakımcıların gördüğü özel bir danışma açar.
- **E-posta:** bakımcı profilindeki güvenlik iletişimi. PGP zorunlu değildir; sunuluyorsa şifreli ileti kabul edilir.

**5 iş günü** içinde alındı bilgisi bekleyin.

## Bildirimden sonra

1. 5 iş günü içinde sınıflandırma: alındı onayı ve şiddet (Kritik / Yüksek / Orta / Düşük).
2. Yüksek ve Kritik kayıtlarda 10 iş günü içinde yama veya geçici çözüm takvimi.
3. Düzeltme yayınlanınca GitHub üzerinde eşgüdümlü bir danışma çıkar. İstemediğiniz sürece adınız yazılır.
4. Yeniden üretilemezse veya güvenlik kaydı sayılmazsa gerekçe ayrıca iletilir.

## Kapsam

Kapsam içi: bu deponun kaynak kodu, varsayılan yapılandırma, CI akışları ve belgelenmiş dağıtım yolları.

Kapsam dışı:

- Üst bağımlılıklardaki açıklar (ilgili projeye bildirin)
- Yalnızca fiziksel veya yerel makine erişimi gerektiren durumlar
- Bakımcıya yönelik sosyal mühendislik veya hizmet dışı bırakma
- Somut bir saldırı yolu olmayan kuramsal bulgular

## Sertleştirme notları

Tasarım kararları için depoda varsa `HARDENING_NOTES.md` dosyasına bakın.
