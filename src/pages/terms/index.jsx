import { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import {
  SubTermsButton,
  SubTermsDescription,
  SubTermsText,
  TermsBack,
  TermsCard,
  TermsDescription,
  TermsText,
  TermsTextBox,
  TermsTextScroll,
} from "../../static/Terms.tags";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const Terms = () => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Pastga surish");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [setIsBottomReached] = useState(false);

  const scrollToBottom = () => {
    const element = document.getElementById("termsScroll");
    if (element) {
      element.scrollTo({
        top: element.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  useEffect(() => {
    const element = document.getElementById("termsScroll");
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    const element = document.getElementById("termsScroll");
    if (element) {
      const isBottom =
        Math.floor(element.scrollHeight - element.scrollTop) ===
        element.clientHeight;
      setIsBottomReached(isBottom);
    }
  };

  const handleButtonClick = () => {
    if (buttonText === "Pastga surish") {
      scrollToBottom();
      setButtonText("Qabul qilish & Davom etish");
    } else if (isCheckboxChecked) {
      navigate("/personal-information");
    }
  };

  return (
    <TermsBack>
      <TermsCard>
        <TermsDescription>{`“GOODCLUB” MCHJ tomonidan ishlab chiqilgan CEFR imtixonidan B1, B2 va C1 darajalarini olishda yordam beruvchi bilimlar jamlangan "GOODLCUB CEFR" online platformasidan foydalanish bo’yicha`}</TermsDescription>
        <TermsDescription
          sx={{
            fontSize: "20px",
          }}
        >{`OMMAVIY OFERTA`}</TermsDescription>
        <SubTermsDescription>
          {`(«GOODCLUB» MChJ ning 2024-yil «29» maydagi
«______»-sonli buyrugʻi bilan tasdiqlangan)`}
        </SubTermsDescription>
        <Divider
          sx={{
            maxWidth: "375px",
            width: "100%",
            border: "1px solid #D9D9D9",
          }}
        />
        <TermsTextScroll id="termsScroll">
          <TermsTextBox>
            <TermsText>1. UMUMIY QOIDALAR</TermsText>
            <SubTermsText>
              1.1. Mazkur ommaviy oferta «GOODCLUB» MChJ (keyingi {"o'rinlarda"}{" "}
              - Tashkilotchi) tomonidan ingliz tilidan CEFR imtixonida B1, B2 va
              C1 darajalarini olishda yordam beruvchi bilimlar jamlangan online
              platformadan foydalanishning tartib qoidalarini, undan
              foydalanuvchi shaxslarning hamda tashkilotchining huquq va
              majburiyatlarini, fors-major holatlarni belgilaydi.
            </SubTermsText>
          </TermsTextBox>
          <TermsTextBox>
            <SubTermsText>
              1.2. Online platformaga kirish ruxsatini sotishdan oldin sotuvchi
              isteʼmolchini mazkur yoʻriqnomada belgilangan foydalanish
              shartlarini, tomonlarning huquq va majburiyatlarini tushuntiradi,
              isteʼmolchi ushbu taklif va shartlarga rozilik bildirgan taqdirda,{" "}
              {"GOODCLUB CEFR"} online platformasiga kirish login va parolini
              sotib oladi. {"GOODCLUB CEFR"} online platformasiga kirish login
              va parolini sotib olgan shaxs, sotuvchining (Tashkilotchining)
              xizmatini talab qilishi uchun mazkur yoʻriqnomada aks etgan
              qoidalarga, huquq va majburiyatlarga rozilik bildirgan
              hisoblanadi.
            </SubTermsText>
          </TermsTextBox>
          <TermsTextBox>
            <SubTermsText>
              1.3. Ushbu ommaviy ofertada quyidagilar belgilangan:
            </SubTermsText>
            <SubTermsText>- Online platformaning mazmuni;</SubTermsText>
            <SubTermsText>
              - Online platformadan foydalanuvchi shahslar doirasi;
            </SubTermsText>
            <SubTermsText>
              - Online platformadan foydalanish tartibi va shartlari;
            </SubTermsText>
            <SubTermsText>
              - Online platformadan foydalanuvchining huquq va majburiyatlari;
            </SubTermsText>
            <SubTermsText>
              - Tashkilotchining huquq va majburiyatlari;
            </SubTermsText>
            <SubTermsText>- Fors-major holatlar;</SubTermsText>
            <SubTermsText>
              - Mahsulotni qaytarib berish va qaytarib olish;
            </SubTermsText>
            <SubTermsText>- Nizolarni hal etish.</SubTermsText>
            <SubTermsText>
              1.4 Ushbu ommaviy ofertada quyidagi tushunchalardan foydalaniladi:
            </SubTermsText>
            <SubTermsText>
              - Tashkilotchi – {"GOODCLUB CEFR"} online platformasini ishlab
              chiqqan «GOODCLUB» MChJ;
            </SubTermsText>
            <SubTermsText>
              - Online platforma - Tashkilotchining {"GOODCLUB CEFR"} ingliz
              tilidagi bilimlarni oshirishga yordam beruvchi maxsus video
              darslar jamlangan shaxsiy web-sahifa
            </SubTermsText>
            <SubTermsText>
              - Video darslar - Tashkilotchining ingliz tilidan CEFR
              sertifikatini olishda yordam beruvchi bilimlar jamlangan video
              darslar
            </SubTermsText>
            <SubTermsText>
              - Shaxsiy kabinet – Tashkilotchi yaratgan online platformadagi
              video darslarni iste’molchi o’zlashtirishi uchun tayyorlangan
              individual havola
            </SubTermsText>
            <SubTermsText>
              - Login va parol - Tashkilotchining online platformasidan
              foydalanib shaxsiy kabinetga kirish uchun iste’molchiga
              beriladigan maxfiy {"so'z"}
            </SubTermsText>
            <SubTermsText>
              - Foydalanuvchi – ingliz tilidagi bilimlarini oshirish maqsadida
              online platformaga kirish logini va parolini sotib olgan hamda
              undan foydalanuvchi shaxs (isteʼmolchi);
            </SubTermsText>
            <SubTermsText>
              - Mashgʻulot – ingliz tilidan CEFR imtixonida B1, B2 va C1
              darajalarini olishda yordam beruvchi maxsus bilimlar jamlangan
              videolar;
            </SubTermsText>
            <TermsText>
              2. {"GOODCLUB CEFR"} online platformasining mazmuni
            </TermsText>
            <SubTermsText>
              - 2.1 Ingliz tilidan CEFR imtixonida B1, B2 va C1 darajalarini
              olishda maxsus bilimlar o’rgatuvchi video darslar jamlangan online
              platforma;
            </SubTermsText>

            <TermsText>
              2. Online platformadan foydalanuvchi shahslar doirasi.
            </TermsText>
            <SubTermsText>
              3.1 {"Mashg'ulotlarni"} koʻrish, eshitish va soʻzlashish
              qobiliyatlarida nuqsoni boʻlmagan, shuningdek, tanlangan tildagi
              alifbolarni biluvchi, harflarni talaffus qilish va soʻzlarni erkin
              oʻqiy olish imkoniga ega boʻlgan, 12 yoshga toʻlgan va undan
              yuqori yoshdagi shaxslar uchun moʻljallangan.
            </SubTermsText>
            <SubTermsText>
              3.2 Online platformaga kirish login va parolini sotib olgan shaxs,
              uning foydalanuvchisiga aylanadi.
            </SubTermsText>
            <SubTermsText>
              3.3 Online platformadagi darslarni {"ko'rish"} uchun
              foydalanuvchiga maxsus login va parol taqdim qilinadi.
            </SubTermsText>
            <SubTermsText>
              3.4 Online platformaga bir foydalanuvchi kirganidan so’ng bir
              vaqtning o’zida ikkinchi foydalanuvchi kirish imkoni mavjud emas.
            </SubTermsText>
            <TermsText>
              3. Online platformadan foydalanish tartibi va shartlari.
            </TermsText>
            <SubTermsText>
              4.1 Foydalanuvchi mashg’ulotlarni o’zlashtirishi uchun internet
              sarfi kerak bo’ladi, barcha darslar online o’zlashtiriladi
            </SubTermsText>
            <SubTermsText>
              4.2 Online platformada 60 ta video mashgʻulotlar mavjud boʻlib,
              ularni jadval asosida ketma-ketlikda diqqat bilan ko’rishi va
              bilim olganiga ishonch hosil qilganidan so’ng keyingi darsga
              o’tishi lozim.
            </SubTermsText>
            <SubTermsText>
              4.3 Har bir video dars bir kunda ko’rish uchun moʻljallangan.
              Foydalanuvchi har bir video darsni 1 kun davomida, kamida 1
              marotabadan online platformadagi shaxsiy kabineti orqali
              o’zlashtirishi lozim.
            </SubTermsText>
            <SubTermsText>
              4.4 Video darslarni sutkaning xohlagan vaqtida {"o'zlashtirishi"}{" "}
              mumkin. Bu foydalanuvchining kundalik vaqt taqsimotiga bogʻliq.
            </SubTermsText>
            <SubTermsText>
              4.5 Tashkilotchi oʻzi tomonidan ishlab chiqilib,
              foydalanuvchilarga sotgan login va parol ichidagi iste’molchi
              maʼlumotlari tashkilotchi bazasida shakllantirib boriladi. Ushbu
              maʼlumotlar baʼzasida foydalanuvchining anketa maʼlumotlari,
              telefon raqami, login va parol sotib olingan sana hamda online
              platformadan foydalanish jarayoni bilan bogʻliq maʼlumotlar
              saqlanadi.
            </SubTermsText>
            <SubTermsText>
              4.6 Mualliflik huquqini himoya qilish hamda online platformadagi
              video darslar taqalib ketish holatlarini oldini olish maqsadida
              video darslarni ko’chirish, ko’paytirish, video tasvirga olish,
              skrinshot qilish yoki ekrandan yozib olish taqiqlanadi. Shuningdek
              yangi darsga o’tilganida eskisi avtomatik tarzda o’chib ketadi,
              shu sababdan keyingi darslarga o’tishdan avval yangi bilimlar
              olinganiga ishonch hosil qilib o’tilishi lozim.
            </SubTermsText>
            <TermsText>4. Foydalanuvchining huquqlari.</TermsText>
            <SubTermsText>
              5.1 Online platformaga kirish login va parolini sotib olishdan
              oldin Tashkilotchidan undan foydalanish shartlarini, tomonlarning
              huquq va majburiyatlarini batafsil tushuntirishni talab qilishi,
              yoʻriqnomadagi umumiy qoidalarga rozilik bildirmagan taqdirda
              Tashkilotchi bilan individual shartlar asosida yozma shartnoma
              tuzilishini talab qilishi;
            </SubTermsText>
            <SubTermsText>
              5.2 Foydalanuvchi online platformadan foydalanish jarayonida
              tashkilotchining aloqa vositalari (ommaviy ofertaning 13-bobida
              aks etgan) orqali haftaning yakshanba va bayram kunlaridan
              tashqari har kuni soat 09:00dan 18:00 ga qadar bo’lgan vaqt
              oralig’ida maʼlumot va maslahatlar olishi;
            </SubTermsText>
            <SubTermsText>
              5.3 Online platforma ishlashida nosozliklar yuzaga kelgan taqdirda
              Tashkilotchidan ushbu nosozliklarni bartaraf etishini talab
              qilish;
            </SubTermsText>
            <SubTermsText>
              5.4 Foydalanuvchi mashgʻulotlarini sutkaning xohlagan vaqtida
              bajarib borishi va haftada bir kun mashgʻulotlardan dam olishi;
            </SubTermsText>
            <SubTermsText>
              5.5 Tashkilotchining gʻayriqonuniy harakati (harakatsizligi)
              tufayli yetkazilgan moddiy ziyon, maʼnaviy zararning toʻliq hajmda
              qoplanishini talab qilish;
            </SubTermsText>
            <SubTermsText>
              5.6 Buzilgan huquqlari yoki qonun bilan muhofaza etiladigan
              manfaatlari himoya qilinishini soʻrab sudga, boshqa vakolatli
              davlat organlariga murojaat etishi mumkin;
            </SubTermsText>
            <SubTermsText>
              5.7 Tashkilotchi tomonidan berilgan video darslarda nosozliklar
              aniqlansa yoki tanlangan tilda notoʻgʻri tarjimalar aniqlansa,
              Oʻzbekiston Respublikasining “Isteʼmolchilarning huquqlarini
              himoya qilish toʻgʻrisida”gi qonuni va mazkur sohadagi boshqa
              qonun hujjatlariga asosan, tashkilotchidan mahsulotni qaytarib
              olishni va pullarini qaytarilishini talab qilishi;
            </SubTermsText>
            <SubTermsText>
              5.8 Foydalanuvchi qonun hujjatlarida nazarda tutilgan boshqa
              huquqlarga ham ega boʻlishi mumkin.
            </SubTermsText>
            <TermsText>5. Foydalanuvchining majburiyatlari.</TermsText>
            <SubTermsText>
              6.1 Foydalanuvchi har bir video darsni faqat o’zi o’zlashtirishi
              lozim undan 2-shaxslarga foydalanish uchun bermasligi kerak;
            </SubTermsText>
            <SubTermsText>
              6.2 Foydalanuvchi mashgʻulotlarni shaxsiy telefoni, kompyuteri
              yoki o’ziga qulay bo’lgan boshqa qurilmalar orqali faqat online
              tarzda o’zlashtiradi;
            </SubTermsText>
            <SubTermsText>
              6.3 Online platformadagi darslarni jadval asosida tartibli ketma-
              ketlik bilan diqqat qilib o’zlashtirishi agar bilim olganiga
              ishonch hosil qilmasa keyingi darsga o’tishdan avval takroran
              ko’rishi tavsiya etiladi;
            </SubTermsText>
            <SubTermsText>
              6.4 Foydalanuvchi vidodarsliklardan online platforma orqali
              foydalanish vaqtida shaxsiy internet trafigidan foydalanishi lozim
            </SubTermsText>
            <TermsText>6. Tashkilotchining huquqlari.</TermsText>
            <SubTermsText>
              7.1 Tashkilotchi iste’molchilarga sotilgan online platformadagi
              maʼlumotlar bazasini (yoʻriqnomaning 4.5 bandida aks etgan
              maʼlumotlarni) shakllantirib borish;
            </SubTermsText>
            <SubTermsText>
              7.2 Foydalanuvchining online platformada mashgʻulotlarni bajarib
              boorish jarayonini kuzatib borish;
            </SubTermsText>
            <SubTermsText>
              7.3 Tashkilotchi qonun hujjatlarida nazarda tutilgan boshqa
              huquqlarga ham ega boʻlishi mumkin.
            </SubTermsText>
            <TermsText>7. Tashkilotchining majburiyatlari.</TermsText>
            <SubTermsText>
              8.1 Online platformaga kirish logini va parolini sotishdan oldin
              isteʼmolchiga mobil ilovadan foydalanish shartlarini, tomonlarning
              huquq va majburiyatlarini batafsil tushuntirib berishi;
            </SubTermsText>
            <SubTermsText>
              8.3 Tashkilotchi foydalanuvchining online planformadan foydalanish
              bilan bogʻliq savollariga zudlik bilan yoki uzogʻi bilan bir ish
              kuni davomida javob berishi;
            </SubTermsText>
            <TermsText>
              8. Mahsulotni qaytarib berish va qaytarib olish.
            </TermsText>
            <SubTermsText>
              10.1 Oʻzbekiston Respublikasining 1996-yil 26-apreldagi
              “Isteʼmolchilarning huquqlarini himoya qilish toʻgʻrisidagi
              221-i-son qonuni 18-moddasiga asosan, isteʼmolchi (foydalanuvchi)
              maqbul sifatli nooziq-ovqat tovarini (online platformaga kirish
              kodini) xarid qilgan kunidan eʼtiboran oʻn ish kuni ichida ushbu
              tovar sotib olingan joydagi sotuvchidan uni ayni shunday tovarga
              almashtirib olishiga, bunday tovar sotuvda boʻlmasa, pulini
              qaytarib olishga haqli.
            </SubTermsText>
            <TermsText>9. Nizolarni hal etish</TermsText>
            <SubTermsText>
              9.1. Online platformadan foydalanish jarayonida Foydalanuvchi va
              Tashkilotchi {"o'rtasida yuzaga kelishi mumkin bo'lgan"} barcha nizo,
              tortishuv va kelishmovchiliklar xayrixohlik hamda{" o'zaro "}anglashuv
              asosida muzokaralar{" yo'li "}bilan hal qilinadi.
            </SubTermsText>
            <SubTermsText>
            Tomonlar muzokara yo’li bilan o’zaro kelishuvga erishmagan taqdirda, nizo sud tomonidan {"ko'rib"} chiqilishi lozim.
            </SubTermsText>
            <TermsText>
            10.	Tashkilotchining yuridik manzili va online platformadan foydalanish tartiblarini yetkazish tartibi.
            </TermsText>
            <SubTermsText>10.1.	Online platformadan foydalanish shartlari va tartibi {"to'g'risida ma'lumot"} Foydalanuvchiga mahsulot sotishdan oldin hamda sotilganidan so’ng online platformaga kirish davomida ko’rsatiladi.</SubTermsText>
            <SubTermsText>
            10.2.	Foydalanuvchi kitob va uning mobil ilovasi boʻyicha qoʻshimcha savol maslahatlar yuzasidan batafsil {"ma'lumotni"} 71-203-00-06 telefon raqami yoki www.goodclub.uz veb-sayti orqali olishi mumkin.
            </SubTermsText>
            <SubTermsText>
            10.3.	Tashkilotchining yuridik manzili: Toshkent shaxri Shayxontoxur tumani A.navoiy ko’chasi 26A uy, Andijon shahri, Amir Umarxon ko’chasi
            </SubTermsText>
          </TermsTextBox>
        </TermsTextScroll>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            style={{
              width: "35px",
            }}
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
            id="termsCheckbox"
          />
          <label htmlFor="termsCheckbox">
            {"Men shartlarni o'qidim va barchasiga roziman"}{" "}
          </label>
        </Box>
        <SubTermsButton onClick={handleButtonClick}>
          {buttonText}
        </SubTermsButton>
      </TermsCard>
    </TermsBack>
  );
};

export default Terms;
