/**
 * Solvis Mukesh Pahuja - 3D Appearance Silver Metallic Digital Card
 * Inside-the-Card Language Switcher + 4 Direct Actions + Trust Quote
 */

const TRANSLATIONS = {
  en: {
    dir: "ltr",
    title: "Solvis Mukesh Pahuja | Software Engineer & Product Manager",
    name: "Solvis Mukesh Pahuja",
    role: "Software Engineer & Product Manager",
    saveContact: "Save Contact",
    saveContactSub: "Add directly to your phone",
    call: "Call Directly",
    whatsapp: "WhatsApp",
    whatsappSub: "Send a message",
    email: "Send Email",
    quote: '"Building reliable digital products and lasting partnerships with integrity."',
    toastSaved: "📥 Contact card saved to your phone!",
    vcardNote: "Software Engineer & Product Manager"
  },
  ar: {
    dir: "rtl",
    title: "سولفيس موكيش باهوجا | مهندس برمجيات ومدير منتجات",
    name: "سولفيس موكيش باهوجا",
    role: "مهندس برمجيات ومدير منتجات",
    saveContact: "حفظ جهة الاتصال",
    saveContactSub: "إضافة مباشرة إلى الهاتف",
    call: "اتصال مباشر",
    whatsapp: "واتساب",
    whatsappSub: "إرسال رسالة فورية",
    email: "إرسال بريد إلكتروني",
    quote: '«بناء حلول رقمية موثوقة وشراكات دائمة قائمة على النزاهة والتميز»',
    toastSaved: "📥 تم حفظ جهة الاتصال في هاتفك!",
    vcardNote: "مهندس برمجيات ومدير منتجات"
  }
};

const CONTACT_DATA = {
  nameEn: "Solvis Mukesh Pahuja",
  nameAr: "سولفيس موكيش باهوجا",
  phoneRaw: "+96565534802",
  whatsappRaw: "96565534802",
  whatsappMessage: "Hi Solvis! I got your contact from your digital card.",
  email: "solvis.kw@gmail.com",
  emailSubject: "Connecting with Solvis Mukesh Pahuja"
};

let currentLang = "en";

// DOM References
const elements = {
  html: document.documentElement,
  btnEn: document.getElementById('btnEn'),
  btnAr: document.getElementById('btnAr'),
  profileName: document.getElementById('profileName'),
  profileRole: document.getElementById('profileRole'),
  trustQuoteText: document.getElementById('trustQuoteText'),
  
  // 4 Actions
  btnSaveContact: document.getElementById('btnSaveContact'),
  txtSaveContact: document.getElementById('txtSaveContact'),
  txtSaveContactSub: document.getElementById('txtSaveContactSub'),

  btnCall: document.getElementById('btnCall'),
  txtCall: document.getElementById('txtCall'),

  btnWhatsapp: document.getElementById('btnWhatsapp'),
  txtWhatsapp: document.getElementById('txtWhatsapp'),
  txtWhatsappSub: document.getElementById('txtWhatsappSub'),

  btnEmail: document.getElementById('btnEmail'),
  txtEmail: document.getElementById('txtEmail'),

  // Toast
  toast: document.getElementById('toastNotification'),
  toastMessage: document.getElementById('toastMessage')
};

function init() {
  const savedLang = localStorage.getItem('my_card_lang') || "en";
  setLanguage(savedLang);
  setupActionLinks();
  setupEventListeners();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('my_card_lang', lang);
  const t = TRANSLATIONS[lang];

  elements.html.setAttribute('lang', lang);
  elements.html.setAttribute('dir', t.dir);
  document.title = t.title;

  if (lang === 'en') {
    elements.btnEn.classList.add('active');
    elements.btnAr.classList.remove('active');
  } else {
    elements.btnAr.classList.add('active');
    elements.btnEn.classList.remove('active');
  }

  elements.profileName.textContent = t.name;
  elements.profileRole.textContent = t.role;
  elements.txtSaveContact.textContent = t.saveContact;
  elements.txtSaveContactSub.textContent = t.saveContactSub;
  elements.txtCall.textContent = t.call;
  elements.txtWhatsapp.textContent = t.whatsapp;
  elements.txtWhatsappSub.textContent = t.whatsappSub;
  elements.txtEmail.textContent = t.email;
  
  if (elements.trustQuoteText) {
    elements.trustQuoteText.textContent = t.quote;
  }
}

function setupActionLinks() {
  const waMsg = encodeURIComponent(CONTACT_DATA.whatsappMessage);
  const mailSubject = encodeURIComponent(CONTACT_DATA.emailSubject);

  elements.btnCall.href = `tel:${CONTACT_DATA.phoneRaw}`;
  elements.btnWhatsapp.href = `https://wa.me/${CONTACT_DATA.whatsappRaw}?text=${waMsg}`;
  elements.btnEmail.href = `mailto:${CONTACT_DATA.email}?subject=${mailSubject}`;
}

/**
 * Downloads standard vCard (.vcf)
 */
function downloadVCard() {
  const t = TRANSLATIONS[currentLang];
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Pahuja;Solvis;Mukesh;;',
    'FN:Solvis Mukesh Pahuja',
    'TITLE:Software Engineer & Product Manager',
    `TEL;TYPE=CELL,VOICE,pref:${CONTACT_DATA.phoneRaw}`,
    `TEL;TYPE=WHATSAPP,VOICE:${CONTACT_DATA.whatsappRaw}`,
    `EMAIL;TYPE=INTERNET,pref:${CONTACT_DATA.email}`,
    'ADR;TYPE=WORK:;;;Kuwait;;;;',
    `NOTE:${t.vcardNote}`,
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Solvis_Mukesh_Pahuja.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast(t.toastSaved);
}

let toastTimer = null;
function showToast(msg) {
  if (!elements.toast) return;
  elements.toastMessage.textContent = msg;
  elements.toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2200);
}

function setupEventListeners() {
  elements.btnEn.addEventListener('click', () => setLanguage('en'));
  elements.btnAr.addEventListener('click', () => setLanguage('ar'));
  elements.btnSaveContact.addEventListener('click', downloadVCard);
}

document.addEventListener('DOMContentLoaded', init);
